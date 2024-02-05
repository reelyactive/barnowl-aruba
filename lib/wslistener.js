/**
 * Copyright reelyActive 2020-2024
 * We believe in an open Internet of Things
 */


const WebSocket = require('ws');
const url = require('url');


const DEFAULT_PATH = '/aruba';
const DEFAULT_PORT = 3001;
const AOS8_ROUTE = '/aos8';
const AOS10_ROUTE = '/aos10';


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
    this.wss = createWebSocketServers(self, options);
    this.wss.forEach((wss, path) => { handleConnections(self, wss, path); });
  }

}


/**
 * Create the WebSocket servers.
 * @param {WsListener} instance The WsListener instance.
 * @param {Object} options The options as a JSON object.
 */
function createWebSocketServers(instance, options) {
  let wss = new Map();

  wss.set(options.path, new WebSocket.Server({ noServer: true }));
  wss.set(options.path + AOS8_ROUTE, new WebSocket.Server({ noServer: true }));
  wss.set(options.path + AOS10_ROUTE, new WebSocket.Server({ noServer: true }));

  // Create the HTTP server if none provided
  if(!options.server) {
    options.server = require('http').createServer();
    options.server.listen(options.port);
  }

  // Route requests to the target server based on the path
  options.server.on('upgrade', (request, socket, head) => {
    let requestPath = request.url; // TODO: sanitise?

    if(wss.has(requestPath)) {
      let targetWss = wss.get(requestPath);
      targetWss.handleUpgrade(request, socket, head, (ws) => {
        targetWss.emit('connection', ws, request);
      });
    }
    else {
      socket.destroy(); // TODO: could this path be handled elsewhere!?!
    }
  });

  return wss;
}


/**
 * Handle WebSocket connections.
 * @param {WsListener} instance The WsListener instance.
 * @param {Server} wss The WebSocket server instance.
 * @param {String} path The WebSocket server path.
 */
function handleConnections(instance, wss, path) {
  wss.on('connection', function(ws) {
    console.log('Aruba WebSocket connection established on', path);
    ws.on('message', (message) => {
      let time = new Date().getTime();

      instance.decoder.handleProtobuf(message, path, time,
                                      instance.decodingOptions);
    });
  });
}


module.exports = WsListener;
