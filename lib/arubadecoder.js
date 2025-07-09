/**
 * Copyright reelyActive 2020-2024
 * We believe in an open Internet of Things
 */


const protobuf = require('protobufjs/minimal');
const aos8Proto = require('./aos8v1proto.js');
const aos10Proto = require('./aos10v1proto.js');
const iotOpsDecoder = require('./iotopsdecoder.js');
const telemetryReportDecoder = require('./telemetryreportdecoder.js');
const gattManager = require('./gattmanager.js');


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
    let self = this;
    options = options || {};

    this.barnowl = options.barnowl;
    this.aps = new Map();
    this.gattManager = new gattManager({ barnowl: self.barnowl });
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
    let raddecs = [];
    decodingOptions = decodingOptions || {};
    decodingOptions.gattManager = self.gattManager;

    // Test for AOS10 by checking if the origin (path) includes 'aos10'
    if((typeof origin === 'string') && origin.includes('aos10')) {
      try {
        let nbData = aos10Proto.aruba.iotops.partner.transport.v1
                               .TransportNBData.decode(data);
        nbData.toJSON();

        let decoded = iotOpsDecoder.decode(nbData, origin, time, self.aps,
                                           decodingOptions);
        decoded.raddecs.forEach((raddec) => {
          self.barnowl.handleRaddec(raddec);
        });
        decoded.infrastructureMessages.forEach((infrastructureMessage) => {
          self.barnowl.handleInfrastructureMessage(infrastructureMessage);
        });
      }
      catch(error) {
        console.log('Error handling Aruba AOS10 northbound data\r\n', error);
      }
    }

    // Otherwise assume AOS8
    else {
      try {
        let telemetryReport = aos8Proto.aruba_telemetry.Telemetry.decode(data);
        telemetryReport.toJSON();

        let decoded = telemetryReportDecoder.decode(telemetryReport, origin,
                                                    time, self.aps,
                                                    decodingOptions);
        decoded.raddecs.forEach((raddec) => {
          self.barnowl.handleRaddec(raddec);
        });
        decoded.infrastructureMessages.forEach((infrastructureMessage) => {
          self.barnowl.handleInfrastructureMessage(infrastructureMessage);
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
