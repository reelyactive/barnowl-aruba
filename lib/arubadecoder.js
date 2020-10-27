/**
 * Copyright reelyActive 2020
 * We believe in an open Internet of Things
 */


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
  }

  /**
   * Handle data from a given device, specified by the origin
   * @param {Object} data The data as JSON.
   * @param {String} origin The unique origin identifier of the device.
   * @param {Number} time The time of the data capture.
   * @param {Object} decodingOptions The packet decoding options.
   */
  handleData(data, origin, time, decodingOptions) {
    let self = this;

    let raddec = {}; // TODO: decode the data
    console.log(data); // Debug only
    //self.barnowl.handleRaddec(raddec);
  }
}


module.exports = ArubaDecoder;
