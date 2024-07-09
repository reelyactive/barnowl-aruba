/**
 * Copyright reelyActive 2024
 * We believe in an open Internet of Things
 */


const aos8Telemetry = require('./aos8v1proto.js').aruba_telemetry;


const UUID_ACTIONS = new Map([
  // Sensor-Works BluVib ------------------------------------------------------
  [ "1c930001d45911e79296b8e856369374", {
    payloadPattern: "110674933656e8b89692e71159d40100931c",
    timeoutMilliseconds: 60000,
    actions: [{ // Connect
      "serviceUuid": null,
      "value": null,
      "characteristicUuid": null,
      "actionId": "00000001",
      "timeOut": 45,
      "type": "bleConnect"
    },
    { // Mode
      "serviceUuid": "1c930003-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930031-d459-11e7-9296-b8e856369374",
      "actionId": "00000002",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Temp
      "serviceUuid": "1c930003-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930032-d459-11e7-9296-b8e856369374",
      "actionId": "00000003",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Battery
      "serviceUuid": "1c930003-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930038-d459-11e7-9296-b8e856369374",
      "actionId": "00000004",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Sample rate
      "serviceUuid": "1c930002-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930023-d459-11e7-9296-b8e856369374",
      "actionId": "00000005",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Trace length
      "serviceUuid": "1c930002-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930024-d459-11e7-9296-b8e856369374",
      "actionId": "00000006",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Calibration
      "serviceUuid": "1c930002-d459-11e7-9296-b8e856369374",
      "value": null,
      "characteristicUuid": "1c930029-d459-11e7-9296-b8e856369374",
      "actionId": "00000007",
      "timeOut": 20,
      "type": "gattRead"
    },
    { // Data: notifications
      "serviceUuid": "1c930002-d459-11e7-9296-b8e856369374",
      "value": "01",
      "characteristicUuid": "1c930020-d459-11e7-9296-b8e856369374",
      "actionId": "00000008",
      "timeOut": 60,
      "type": "gattNotification"
    }],
    concludingActions: [{ // Release
      "serviceUuid": "1c930003-d459-11e7-9296-b8e856369374",
      "value": "00",
      "characteristicUuid": "1c930030-d459-11e7-9296-b8e856369374",
      "actionId": "00000009",
      "timeOut": 20,
      "type": "gattWrite"
    },
    { // Disconnect
      "serviceUuid": null,
      "value": null,
      "characteristicUuid": null,
      "actionId": "00000010",
      "timeOut": 20,
      "type": "bleDisconnect"
    }]
  }]
]);
const DEFAULT_TIMEOUT_MILLISECONDS = 60000;
const TYPE_GATT_READ = 2;
const TYPE_GATT_NOTIFICATION = 5;


/**
 * GattManager Class
 * Manages GATT interaction.
 * @constructor
 */
class GattManager {

  /**
   * GattManager constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    this.decoder = options.decoder;
    this.activeConnections = new Map();
  }

  /**
   * Handle the given GAP packet
   * @param {Object} packet The GAP packet to handle.
   * @param {String} transmitterId The ID of the transmitter of the GAP packet.
   * @param {String} receiverId The ID of the receiver of the GAP packet.
   * @param {Function} responseHandler The function to handle any response.
   */
  handlePacket(packet, transmitterId, receiverId, responseHandler) {
    let self = this;

    UUID_ACTIONS.forEach((instructions, uuid) => {
      if(packet.includes(instructions.payloadPattern)) {
        initiateActions(self, instructions, transmitterId, receiverId,
                        responseHandler);
      }
    });
  }

  /**
   * Handle the given characteristic
   * @param {Object} characteristic The characteristic to handle.
   * @param {String} type The type of update (read/notification).
   */
  handleCharacteristic(characteristic, type) {
    let self = this;

    if((typeof characteristic.deviceMac !== 'string') ||
       (typeof characteristic.serviceUuid !== 'string') ||
       (typeof characteristic.characteristicUuid !== 'string') ||
       (typeof characteristic.value !== 'string') ||
       !self.activeConnections.has(characteristic.deviceMac)) {
      return;
    }

    let device = self.activeConnections.get(characteristic.deviceMac);

    if(type === TYPE_GATT_READ) {
      device.gatt.push({ serviceUuid: characteristic.serviceUuid,
                         characteristicUuid: characteristic.characteristicUuid,
                         value: characteristic.value });
    }
    else if(type === TYPE_GATT_NOTIFICATION) {
      let isNew = true;

      device.gatt.forEach((element) => {
        if((element.serviceUuid === characteristic.serviceUuid) &&
           (element.characteristicUuid === characteristic.characteristicUuid)) {
          element.values.push(characteristic.value);
          isNew = false;
        }
      });

      if(isNew) {
        device.gatt.push({ serviceUuid: characteristic.serviceUuid,
                           characteristicUuid: characteristic.characteristicUuid,
                           values: [ characteristic.value ] });
      }
    }
  }
}


/**
 * Initiate the actions.
 * @param {GattManager} instance The given GattManager instance.
 * @param {Object} instructions The instructions, including actions.
 * @param {String} transmitterId The ID of the transmitter of the GAP packet.
 * @param {String} receiverId The ID of the receiver of the GAP packet.
 * @param {Function} responseHandler The function to handle any response.
 */
function initiateActions(instance, instructions, transmitterId, receiverId,
                         responseHandler) {
  if(instance.activeConnections.has(transmitterId) ||
     (typeof responseHandler !== 'function')) {
    return;
  }

  let timeoutMilliseconds = instructions.timeoutMilliseconds ||
                            DEFAULT_TIMEOUT_MILLISECONDS;
  instance.activeConnections.set(transmitterId, { gatt: [] });
  setTimeout(initiateConcludingActions, timeoutMilliseconds, instance,
             instructions, transmitterId, receiverId, responseHandler);

  let mac = { deviceMac: createMac(transmitterId) };

  let macActions = [];
  instructions.actions.forEach((action) => {
    macActions.push(Object.assign({}, mac, action));
  });

  let formattedRequest = formatSbBleMessage({
    meta: {
      version: 1,
      sbTopic: "actions"
    },
    actions: macActions,
    receiver: {
      apMac: createMac(receiverId),
      all: false
    }
  });

  if(formattedRequest) {
    responseHandler(formattedRequest);
  }
}


/**
 * Initiate the concluding actions.
 * @param {GattManager} instance The given GattManager instance.
 * @param {Object} instructions The instructions, including concluding actions.
 * @param {String} transmitterId The ID of the transmitter of the GAP packet.
 * @param {String} receiverId The ID of the receiver of the GAP packet.
 * @param {Function} responseHandler The function to handle any response.
 */
function initiateConcludingActions(instance, instructions, transmitterId,
                                   receiverId, responseHandler) {
  let mac = { deviceMac: createMac(transmitterId) };

  let macActions = [];
  instructions.concludingActions.forEach((action) => {
    macActions.push(Object.assign({}, mac, action));
  });

  let formattedRequest = formatSbBleMessage({
    meta: {
      version: 1,
      sbTopic: "actions"
    },
    actions: macActions,
    receiver: {
      apMac: createMac(receiverId),
      all: false
    }
  });

  if(formattedRequest) {
    responseHandler(formattedRequest);
  }

  // TODO: forward GATT raddec
  instance.activeConnections.delete(transmitterId);
}


/**
 * Convert the given device ID to the colon-separated MAC format.
 * @param {String} deviceId The ID of the device.
 */
function createMac(deviceId) {
  return deviceId.substring(0, 2) + ':' + deviceId.substring(2, 4) + ':' +
         deviceId.substring(4, 6) + ':' + deviceId.substring(6, 8) + ':' +
         deviceId.substring(8, 10) + ':' + deviceId.substring(10, 12);
}


/**
 * Format the given message for the Aruba southbound API.
 * @param {Object} message The message to format.
 */
function formatSbBleMessage(message) {
  let formattedMessage = Object.assign({}, message);

  if(Array.isArray(message.actions)) {
    formattedMessage.actions = [];
    message.actions.forEach((action) => {
      let formattedAction = Object.assign({}, action);

      if(typeof formattedAction.deviceMac === 'string') {
        formattedAction.deviceMac = encodeBase64(formattedAction.deviceMac);
      }
      if(typeof formattedAction.apbMac === 'string') {
        formattedAction.apbMac = encodeBase64(formattedAction.apbMac);
      }
      if(typeof formattedAction.serviceUuid === 'string') {
        formattedAction.serviceUuid = encodeBase64(formattedAction.serviceUuid);
      }
      if(typeof formattedAction.characteristicUuid === 'string') {
        formattedAction.characteristicUuid =
                               encodeBase64(formattedAction.characteristicUuid);
      }
      if(typeof formattedAction.value === 'string') {
        formattedAction.value = encodeBase64(formattedAction.value);
      }

      formattedMessage.actions.push(formattedAction);
    });
  }

  if(message.hasOwnProperty('receiver')) {
    formattedMessage.receiver = Object.assign({}, message.receiver);
    if(typeof formattedMessage.receiver.apMac === 'string') {
      formattedMessage.receiver.apMac =
                                  encodeBase64(formattedMessage.receiver.apMac);
    }
  }

  try {
    let reply = aos8Telemetry.IotSbMessage.fromObject(formattedMessage);
    aos8Telemetry.IotSbMessage.verify(reply);
    return aos8Telemetry.IotSbMessage.encode(reply).finish();
  }
  catch(error) {
    console.log('barnowl-aruba: failed to convert sb message to protobuf');
    return null;
  }
}


/**
 * Encode the given data in base64.
 * @param {String} data The data to encode.
 */
function encodeBase64(data) {
  let hexString = data.replaceAll(':', '').replaceAll('-', '').toLowerCase();

  return Buffer.from(hexString, 'hex').toString('base64');
}


module.exports = GattManager;
