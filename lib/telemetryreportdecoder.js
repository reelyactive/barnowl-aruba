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
const DEFAULT_HISTORY_MILLISECONDS = 2000;
const RANDOM_STATIC_CHARS = [ 'c', 'd', 'e', 'f' ];


/**
 * Decode all the reported transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decode(report, origin, time, aps, options) {
  options = options || {};
  if(!Number.isInteger(options.historyMilliseconds)) {
    options.historyMilliseconds = DEFAULT_HISTORY_MILLISECONDS;
  }

  let isValidBleData = report && report.hasOwnProperty('reporter') &&
                       Array.isArray(report.bleData) &&
                       (report.bleData.length > 0);
  let isValidSerialData = report && report.hasOwnProperty('reporter') &&
                          Array.isArray(report.nbSData) &&
                          (report.nbSData.length > 0);
  let isValidReported = report && report.hasOwnProperty('reporter') &&
                        Array.isArray(report.reported) &&
                        (report.reported.length > 0);
  let isValidWiFiData = report && report.hasOwnProperty('reporter') &&
                        Array.isArray(report.wifiData) &&
                        (report.wifiData.length > 0);
  let isValidApHealth = report && report.hasOwnProperty('reporter') &&
                        report.hasOwnProperty('apHealth');

  if(isValidBleData) {
    return decodeBleData(report, origin, time, aps, options);
  }
  else if(isValidSerialData) {
    return decodeSerialData(report, origin, time, aps, options);
  }
  else if(isValidReported && options.acceptTelemetryReports) {
    return decodeReported(report, origin, time, aps, options);
  }
  else if(isValidWiFiData && options.acceptTelemetryReports) {
    return decodeWiFiData(report, origin, time, aps, options);
  }
  else if(isValidApHealth) {
    return decodeApHealth(report, origin, time, aps, options);
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
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeBleData(report, origin, time, aps, options) {
  let raddecs = [];
  let apMac = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;
  let apbMac;

  report.bleData.forEach((transmitter) => {
    let reporterTime = report.reporter.time.low * 1000;
    let headerAddress = reconstructHeaderAddress(transmitter.mac,
                                                 transmitter.addrType,
                                                 transmitter.frameType,
                                                 transmitter.data);
    let packet = headerAddress + transmitter.data;
    apbMac = transmitter.apbMac;

    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: ID_TYPES[transmitter.addrType],
      packets: [ packet ],
      timestamp: reporterTime
    });
    raddec.addDecoding({ receiverId: apbMac || apMac,
                         receiverIdType: receiverIdType,
                         rssi: transmitter.rssi });

    raddecs.push(raddec);
  });

  if(!aps.has(apMac)) {
    aps.set(apMac, { apbMac: apbMac });
  }

  return raddecs;
}


/**
 * Decode all the nbSData from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeSerialData(report, origin, time, aps, options) {
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
  raddec.addPacket(payload);

  return raddec;
}


/**
 * Decode all the reported BLE transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeReported(report, origin, time, aps, options) {
  let raddecs = [];
  let apMac = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;
  let apbMac;

  if(aps.has(apMac)) {
    apbMac = aps.get(apMac).apbMac;
  }

  report.reported.forEach((transmitter) => {
    let lastSeenTimestamp = parseInt(transmitter.lastSeen) * 1000;
    let transmitterIdType = Raddec.identifiers.TYPE_EUI48;

    // TODO: extract transmitterIdType from report, if made available
    if(RANDOM_STATIC_CHARS.includes(transmitter.mac.substring(0,1))) {
      transmitterIdType = Raddec.identifiers.TYPE_RND48;
    }

    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: transmitterIdType,
      timestamp: lastSeenTimestamp
    });

    if(transmitter.hasOwnProperty('rssi')) {
      let rssi = transmitter.rssi.last;

      // Use individual RSSI samples from history, when available
      if(Array.isArray(transmitter.rssi.history) && 
         (transmitter.rssi.history.length > 0)) {
        transmitter.rssi.history.forEach((entry) => {
          let isStale = ((time - (entry.time.low * 1000)) >
                                                  options.historyMilliseconds);
          if(!isStale && Number.isInteger(entry.rssi)) {
            raddec.addDecoding({ receiverId: apbMac || apMac,
                                 receiverIdType: receiverIdType,
                                 rssi: entry.rssi });
          }
        });

        if(raddec.rssiSignature.length > 0) {
          raddecs.push(raddec);
        }
      }

      // Use last/smooth/avg/max RSSI, otherwise
      else {
        let rssi = transmitter.rssi.last || transmitter.rssi.smooth ||
                   transmitter.rssi.avg || transmitter.rssi.max;

        if(rssi) {
          raddec.addDecoding({ receiverId: apbMac || apMac,
                               receiverIdType: receiverIdType,
                               rssi: rssi });
          raddecs.push(raddec);
        }
      }
    }
  });

  return raddecs;
}


/**
 * Decode all the reported WiFi transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeWiFiData(report, origin, time, aps, options) {
  let raddecs = [];
  let receiverId = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;

  report.wifiData.forEach((transmitter) => {
    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: Raddec.identifiers.TYPE_EUI48,
      timestamp: Date.now()
    });
    raddec.addDecoding({
        receiverId: receiverId,
        receiverIdType: receiverIdType,
        rssi: transmitter.rssi
    });

    if(transmitter.hasOwnProperty('rtls_payload')) {
      raddec.addPacket(transmitter.rtls_payload);
    }

    raddecs.push(raddec);
  });

  return raddecs;
}


/**
 * Decode the AP Health report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeApHealth(report, origin, time, aps, options) {
  let apMac = report.reporter.mac;

  if(Array.isArray(report.apHealth.radio) &&
     (report.apHealth.radio.length === 1)) {
    // TODO: retain additional health info for future infrastructure message?
    aps.set(apMac, { apbMac: report.apHealth.radio[0].mac });
  }

  return [];
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