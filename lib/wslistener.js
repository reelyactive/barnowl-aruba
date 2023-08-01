/**
 * Copyright reelyActive 2020-2023
 * We believe in an open Internet of Things
 */


const WebSocket = require('ws');


const DEFAULT_PATH = '/aruba';
const DEFAULT_PORT = 3001;


/**
 * WsListener Class
 * Listens for Aruba data via WebSocket.
 */
class WsListener {

  /**
   * WsListener constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    let self = this;
    options = options || {};
    options.port = options.port || DEFAULT_PORT;
    options.path = options.path || DEFAULT_PATH;

    this.decoder = options.decoder;
    this.decodingOptions = options.decodingOptions || {};

    if(options.server) {
      self.wss = new WebSocket.Server({ server: options.server,
                                        path: options.path });
    }
    else {
      self.wss = new WebSocket.Server({ port: options.port,
                                        path: options.path });
    }

    handleConnections(self);
  }

}


/**
 * Handle WebSocket connections.
 * @param {WsListener} instance The WsListener instance.
 */
function handleConnections(instance) {
  instance.wss.on('connection', function(ws) {
    console.log('Aruba WebSocket connection established');
    ws.on('message', function(message) {
      try {
        let time = new Date().getTime();

        instance.decoder.handleProtobuf(message, 'WS', time,
                                        instance.decodingOptions);
      }
      catch(error) {}
    });
  });
}


module.exports = WsListener;
