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
    let packet = '0000000000000000' + transmitter.data; // TODO: header/address
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


module.exports.decode = decode;