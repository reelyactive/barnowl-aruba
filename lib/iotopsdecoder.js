/**
 * Copyright reelyActive 2024-2025
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


const BLE_ID_TYPES = [
    Raddec.identifiers.TYPE_UNKNOWN,
    Raddec.identifiers.TYPE_EUI48,
    Raddec.identifiers.TYPE_RND48,
    Raddec.identifiers.TYPE_RND48,
    Raddec.identifiers.TYPE_RND48
];
const BLE_PACKET_TYPES = [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const MIN_ESP3_PACKET_LENGTH_BYTES = 8;


/**
 * Decode the given northbound IoT Operations data.
 * @param {Object} nbData The northbound IoT Operations data.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decode(nbData, origin, time, aps, options) {
  options = options || {};
  let isValidMessage = nbData.hasOwnProperty('header') &&
                       Number.isInteger(nbData.header.topic) &&
                       nbData.hasOwnProperty('body');

  if(!isValidMessage) {
    return [];
  }

  switch(nbData.header.topic) {
    case 1: // Topic: BLE Data
      return decodeBleRawData(nbData.body.bleRawData, origin, time, aps,
                              options);
    case 2: // Topic: Telemetry
      return []; // TODO
    case 3: // Topic: Serial USB Data
      return decodeSerialData(nbData.body.serialNbUsbData, origin, time, aps,
                              options);
    case 4: // Topic: AP Inventory
      return []; // TODO: isHealthy
    case 5: // Topic: Keep-Alive
      return []; // TODO?
    case 6: // Topic: Device Location
      return []; // TODO: position
    default:
      return [];
   
  }
}


/**
 * Decode all the bleData from the telemetry report.
 * @param {Array} data The array of BLE data.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeBleRawData(data, origin, time, aps, options) {
  let raddecs = [];

  if(!Array.isArray(data)) {
    return raddecs;
  }

  data.forEach((transmitter) => {
    let transmitterId = transmitter.bleDeviceAddress.iotDeviceMac
                                                    .toString('hex');
    let bleMacType = transmitter.bleDeviceAddress.bleMacType;
    let packetType = BLE_PACKET_TYPES[transmitter.bleDeviceFrameType];
    let payload = transmitter.bleDeviceRawData.toString('hex');
    let headerAddress = reconstructHeaderAddress(transmitterId, bleMacType,
                                                 packetType, payload);
    let packet = headerAddress + payload;

    let raddec = new Raddec({
      transmitterId: transmitterId,
      transmitterIdType: BLE_ID_TYPES[bleMacType],
      packets: [ packet ],
      timestamp: time
    });
    raddec.addDecoding({ receiverId: transmitter.apMac.toString('hex'),
                         receiverIdType: Raddec.identifiers.TYPE_EUI48,
                         rssi: transmitter.bleDeviceRssi });
    raddecs.push(raddec);
  });

  return raddecs;
}


/**
 * Decode all the serialNbUsbData from the telemetry report.
 * @param {Array} data The array of serial northbound USB data.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Map} aps The list of APs and their associated identifiers.
 * @param {Object} options The packet decoding options.
 */
function decodeSerialData(data, origin, time, aps, options) {
  let raddecs = [];

  if(!Array.isArray(data)) {
    return raddecs;
  }

  data.forEach((transmitter) => {
    if((typeof transmitter.usbAddress?.hwId === 'string') &&
       transmitter.usbAddress.hwId.startsWith('ENOCEAN_USB')) {
      let receiverId = transmitter.usbAddress.hwId; // TODO: trim to UUID
      let receiverIdType = Raddec.identifiers.TYPE_UUID128;
      let payloadBuffer = Buffer.from(transmitter.payload, 'base64');
      let raddec = decodeESPPacket(payloadBuffer.toString('hex'), receiverId,
                                   receiverIdType, time);
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
  if(payload.length < (MIN_ESP3_PACKET_LENGTH_BYTES * 2)) {
    return null;
  }

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