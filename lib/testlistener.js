/**
 * Copyright reelyActive 2020
 * We believe in an open Internet of Things
 */


const DEFAULT_RADIO_DECODINGS_PERIOD_MILLISECONDS = 1000;
const DEFAULT_RSSI = -70;
const MIN_RSSI = -90;
const MAX_RSSI = -50;
const RSSI_RANDOM_DELTA = 5;
const TEST_ORIGIN = 'test';


/**
 * TestListener Class
 * Provides a consistent stream of artificially generated packets.
 */
class TestListener {

  /**
   * TestListener constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    options = options || {};

    this.decoder = options.decoder;
    this.radioDecodingPeriod = options.radioDecodingPeriod ||
                               DEFAULT_RADIO_DECODINGS_PERIOD_MILLISECONDS;
    this.rssi = [ DEFAULT_RSSI ];
    this.decodingOptions = options.decodingOptions || {};

    setInterval(emitRadioDecodings, this.radioDecodingPeriod, this);
  }

}


/**
 * Emit simulated radio decoding packets
 * @param {TestListener} instance The given instance.
 */
function emitRadioDecodings(instance) {
  let time = new Date().getTime();
  let simulatedData = {
      reported: [],
      results: [],
      characteristics: [],
      bleData: [
        {
          mac: "ac233fa00000",
          frameType: 0,
          data: "0201060303e1ff1016e1ffa10164187017fd5b8fa03f23ac",
          rssi: instance.rssi[0],
          addrType: 0
        }
      ],
      wifiData: [],
      nbSData: [],
      meta: {
        version: { low: 1, high: 0, unsigned: true },
        access_token: "token",
        nbTopic: 3
      },
      reporter: {
        name: "a4:00:ba:a4:00:ba",
        mac: "a400baa400ba",
        ipv4: "192.168.0.1",
        hwType: "AP-303H",
        swVersion: "8.8",
        swBuild: "12345",
        time: { low: Math.round(time / 1000), high: 0, unsigned: true }
      }
  };

  updateSimulatedRssi(instance);
  instance.decoder.handleData(simulatedData, TEST_ORIGIN, time,
                              instance.decodingOptions);
}


/**
 * Update the simulated RSSI values
 * @param {TestListener} instance The given instance.
 */
function updateSimulatedRssi(instance) {
  for(let index = 0; index < instance.rssi.length; index++) {
    instance.rssi[index] += Math.floor((Math.random() * RSSI_RANDOM_DELTA) -
                                       (RSSI_RANDOM_DELTA / 2));
    if(instance.rssi[index] > MAX_RSSI) {
      instance.rssi[index] = MAX_RSSI;
    }
    else if(instance.rssi[index] < MIN_RSSI) {
      instance.rssi[index] = MIN_RSSI;
    }
  }
}


module.exports = TestListener;
