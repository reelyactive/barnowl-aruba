/**
 * Copyright reelyActive 2020
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


/**
 * Decode all the reported transmitters from the telemetry report.
 * @param {Object} report The telemetry report.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decode(report, origin, time, options) {
  let isValidReport = report && report.hasOwnProperty('reporter') &&
                      report.hasOwnProperty('reported');
  if(!isValidReport) {
    return [];
  }

  let raddecs = [];
  let receiverId = report.reporter.mac;
  let receiverIdType = Raddec.identifiers.TYPE_EUI48;

  report.reported.forEach(function(transmitter) {
    let lastSeenTimestamp = parseInt(transmitter.lastSeen) * 1000;
    let raddec = new Raddec({
      transmitterId: transmitter.mac,
      transmitterIdType: Raddec.identifiers.TYPE_EUI48,
      timestamp: lastSeenTimestamp
    });
    raddec.addDecoding({ receiverId: receiverId,
                         receiverIdType: receiverIdType,
                         rssi: transmitter.rssi.avg });
    raddecs.push(raddec);
  });

  return raddecs;
}


module.exports.decode = decode;