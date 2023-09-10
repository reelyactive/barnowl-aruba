/**
 * Copyright reelyActive 2020-2023
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


const ID_TYPES = [
    Raddec.identifiers.TYPE_EUI48,
    Raddec.identifiers.TYPE_RND48,
    Raddec.identifiers.TYPE_RND48,
    Raddec.identifiers.TYPE_RND48
];


/**
 * Decode all the reported transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decode(report, origin, time, options) {
  let isValidBleData = report && report.hasOwnProperty('reporter') &&
                       Array.isArray(report.bleData) &&
                       (report.bleData.length > 0);
  let isValidSerialData = report && report.hasOwnProperty('reporter') &&
                          Array.isArray(report.nbSData) &&
                          (report.nbSData.length > 0);
  let isValidReported = report && report.hasOwnProperty('reporter') &&
                       Array.isArray(report.reported) &&
                       (report.reported.length > 0);

  if(isValidBleData) {
    return decodeBleData(report, origin, time, options);
  }
  else if(isValidSerialData) {
    return decodeSerialData(report, origin, time, options);
  }
  else if(isValidReported && options.acceptTelemetryReports) {
    return decodeReported(report, origin, time, options);
  }
  else {
    return [];
  }
}


/**
 * Decode all the bleData from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decodeBleData(report, origin, time, options) {
  let raddecs = [];
  let receiverId = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;

  report.bleData.forEach((transmitter) => {
    let reporterTime = report.reporter.time.low * 1000;
    let headerAddress = reconstructHeaderAddress(transmitter.mac,
                                                 transmitter.addrType,
                                                 transmitter.frameType,
                                                 transmitter.data);
    let packet = headerAddress + transmitter.data;
    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: ID_TYPES[transmitter.addrType],
      packets: [ packet ],
      timestamp: reporterTime
    });
    raddec.addDecoding({ receiverId: transmitter.apbMac || receiverId,
                         receiverIdType: receiverIdType,
                         rssi: transmitter.rssi });

    raddecs.push(raddec);
  });

  return raddecs;
}


/**
 * Decode all the nbSData from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decodeSerialData(report, origin, time, options) {
  let raddecs = [];
  let receiverId = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;

  report.nbSData.forEach((transmitter) => {
    let reporterTime = report.reporter.time.low * 1000;

    if((typeof transmitter.nbDeviceId === 'string') &&
       transmitter.nbDeviceId.startsWith('ENOCEAN_USB')) {
      let raddec = decodeESPPacket(transmitter.nbSerialPayload, receiverId,
                                   receiverIdType, reporterTime);
      if(raddec) {
        raddecs.push(raddec);
      }
    }
  });

  return raddecs;
}


/* Decoode the EnOcean Serial Protocol data into a raddec.
 * @param {String} payload The ESP data.
 * @param {String} receiverId The receiver id.
 * @param {Number} receiverIdType The receiver id type.
 * @param {Number} timestamp The time of the decoding.
 */
function decodeESPPacket(payload, receiverId, receiverIdType, timestamp) {
  let prefix = parseInt(payload.substring(0, 2), 16);
  let dataLength = parseInt(payload.substring(2, 6), 16);
  let optionalLength = parseInt(payload.substring(6, 8), 16);
  let packetType = parseInt(payload.substring(8, 10), 16);

  if((prefix !== 0x55) || (packetType !== 0x01)) {
    return null;
  }

  let indexOfData = 12;
  let indexOfOptionalData = 12 + (dataLength * 2);
  let data = payload.substring(indexOfData, indexOfOptionalData);
  let optionalData = payload.substring(indexOfOptionalData, indexOfOptionalData
                                                       + (optionalLength * 2));

  let rssi = 0 - parseInt(optionalData.substring(10, 12));
  let transmitterId = data.substring(data.length - 10, data.length - 2);
  let raddec = new Raddec({ 
      transmitterId: transmitterId,
      transmitterIdType: Raddec.identifiers.TYPE_EURID32
  });
  raddec.addDecoding({
      receiverId: receiverId,
      receiverIdType: receiverIdType,
      rssi: rssi
  });
  raddec.addPacket(data);

  return raddec;
}


/**
 * Decode all the reported transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decodeReported(report, origin, time, options) {
  let raddecs = [];
  let receiverId = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;

  report.reported.forEach((transmitter) => {
    let lastSeenTimestamp = parseInt(transmitter.lastSeen) * 1000;
    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: Raddec.identifiers.TYPE_EUI48,
      timestamp: lastSeenTimestamp
    });

    raddecs.push(raddec);
  });

  return raddecs;
}


/**
 * Reconstruct the PDU header and address.
 * @param {String} address The transmitter address as a hexadecimal string.
 * @param {Number} addressType The address type.
 * @param {Number} packetType The packet type.
 * @param {String} payload The payload as a hexadecimal string.
 */
function reconstructHeaderAddress(address, addressType, packetType, payload) {
  let headerAddress = '0';
  let length = 6 + (payload.length / 2);

  if(addressType > 0) {
    headerAddress = '4';
  }

  headerAddress += packetType.toString(16);
  headerAddress += ('0' + length.toString(16)).substr(-2);
  headerAddress += address.substring(10,12);
  headerAddress += address.substring(8,10);
  headerAddress += address.substring(6,8);
  headerAddress += address.substring(4,6);
  headerAddress += address.substring(2,4);
  headerAddress += address.substring(0,2);

  return headerAddress;
}


module.exports.decode = decode;