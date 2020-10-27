/**
 * Copyright reelyActive 2020
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
    ws.on('message', function(message) {
      try {
        let data = JSON.parse(message); // Non-JSON will throw a SyntaxError
        let time = new Date().getTime();

        instance.decoder.handleData(data, 'WS', time,
                                    instance.decodingOptions);
      }
      catch(error) {}
    });
  });
}


module.exports = WsListener;
