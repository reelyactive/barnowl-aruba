barnowl-aruba
=============

Interface Aruba gateways with [barnowl](https://github.com/reelyactive/barnowl) open source software.  We believe in an open Internet of Things.


Installation
------------

    npm install barnowl-aruba


Hello barnowl-aruba!
--------------------

```javascript
const BarnowlAruba = require('barnowl-aruba');

let barnowl = new BarnowlAruba();

barnowl.addListener(BarnowlAruba.TestListener); // Not yet fully implemented...

barnowl.on('raddec', function(raddec) {
  console.log(raddec);
});
```


Supported Listener Interfaces
-----------------------------

The following listener interfaces are supported.

### Websocket

```javascript
barnowl.addListener(BarnowlAruba.WsListener, { port: 3001 });
```


Aruba IoT Transport Profile Configuration
-----------------------------------------

The following IoT Transport Profile options should be configured on the Aruba AP.

| Config Option     | Value                           |
|:------------------|:--------------------------------|
| bleDataForwarding | (TRUE)                          |
| endpointType      | telemetry-websocket             |
| endpointURL       | ws://xxx.xxx.xxx.xxx:3001/aruba |
| endpointToken     | token _(cannot be left blank)_  |
| payloadContent    | _(TBD)_                         |
| transportInterval | 1 _(seconds)_                   |
| rssiReporting     | average                         |

For example, this can be achieved by SSHing into the AP and executing the following commands:
- `# configure terminal`
- `(config) # iot transportProfile test`
- `(IoT Transport Profile "test") # bleDataForwarding`
- `(IoT Transport Profile "test") # endpointType telemetry-websocket`
- `(IoT Transport Profile "test") # endpointURL ws://xxx.xxx.xxx.xxx:3001/aruba`
- `(IoT Transport Profile "test") # endpointToken token`
- `(IoT Transport Profile "test") # payloadContent all`
- `(IoT Transport Profile "test") # transportInterval 1`
- `(IoT Transport Profile "test") # rssiReporting average`
- `(IoT Transport Profile "test") # end`
- `# commit apply`

The configuration can be validated with the command:
- `# show iot transportProfile test`


License
-------

MIT License

Copyright (c) 2020 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

