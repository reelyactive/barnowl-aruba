/**
 * Copyright reelyActive 2020-2024
 * We believe in an open Internet of Things
 */


const protobuf = require('protobufjs/minimal');
const aos10Proto = require('./aos10v1proto.js');
const aruba_telemetry_proto = require('./aruba_iot_proto.js').aruba_telemetry;
const telemetryReportDecoder = require('./telemetryreportdecoder.js');


/**
 * ArubaDecoder Class
 * Decodes data streams from one or more Aruba gateways and forwards the
 * packets to the given BarnowlAruba instance.
 */
class ArubaDecoder {

  /**
   * ArubaDecoder constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    options = options || {};

    this.barnowl = options.barnowl;
    this.aps = new Map();
  }

  /**
   * Handle protobuf data from a given device, specified by the origin
   * @param {Buffer} data The data as a protocol buffer.
   * @param {String} origin The unique origin identifier of the device.
   * @param {Number} time The time of the data capture.
   * @param {Object} decodingOptions The packet decoding options.
   */
  handleProtobuf(data, origin, time, decodingOptions) {
    let self = this;

    // Test for AOS10 by checking if the origin (path) includes 'aos10'
    if((typeof origin === 'string') && origin.includes('aos10')) {
      try {
        let nbData = aos10Proto.aruba.iotops.partner.transport.v1
                               .TransportNBData.decode(data);
        // TODO: handle northbound data
      }
      catch(error) {
        console.log('Error handling Aruba AOS10 telemetry report\r\n', error);
      }
    }

    // Otherwise assume AOS8
    else {
      try {
        let telemetryReport = aruba_telemetry_proto.Telemetry.decode(data);
        telemetryReport.toJSON();

        let raddecs = telemetryReportDecoder.decode(telemetryReport, origin,
                                                    time, self.aps,
                                                    decodingOptions);
        raddecs.forEach((raddec) => {
          self.barnowl.handleRaddec(raddec);
        });
      }
      catch(error) {
        console.log('Error handling Aruba AOS8 telemetry report\r\n', error);
      }
    }
  }

  /**
   * Handle JSON data from a given device, specified by the origin
   * @param {Object} data The data as JSON.
   * @param {String} origin The unique origin identifier of the device.
   * @param {Number} time The time of the data capture.
   * @param {Object} decodingOptions The packet decoding options.
   */
  handleData(data, origin, time, decodingOptions) {
    let self = this;

    let raddecs = telemetryReportDecoder.decode(data, origin, time, self.aps,
                                                decodingOptions);
    raddecs.forEach(function(raddec) {
      self.barnowl.handleRaddec(raddec);
    });
  }
}


module.exports = ArubaDecoder;
