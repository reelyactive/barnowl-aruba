/**
 * Copyright reelyActive 2020
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
                       report.hasOwnProperty('bleData');
  let isValidReported = report && report.hasOwnProperty('reporter') &&
                        report.hasOwnProperty('reported');

  if(isValidBleData) {
    return decodeBleData(report, origin, time, options);
  }
  else if(isValidReported) {
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

  report.bleData.forEach(function(transmitter) {
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
    raddec.addDecoding({ receiverId: receiverId,
                         receiverIdType: receiverIdType,
                         rssi: transmitter.rssi });

    raddecs.push(raddec);
  });

  return raddecs;
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

  report.reported.forEach(function(transmitter) {
    let lastSeenTimestamp = parseInt(transmitter.lastSeen) * 1000;
    let hasRssi = transmitter.hasOwnProperty('rssi') &&
                  transmitter.rssi.hasOwnProperty('avg');
    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: Raddec.identifiers.TYPE_EUI48,
      timestamp: lastSeenTimestamp
    });

    if(hasRssi) {
      raddec.addDecoding({ receiverId: receiverId,
                           receiverIdType: receiverIdType,
                           rssi: transmitter.rssi.avg });
    }
    else {
      raddec.addDecoding({ receiverId: receiverId,
                           receiverIdType: receiverIdType });
    }

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