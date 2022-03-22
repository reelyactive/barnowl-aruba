barnowl-aruba
=============

__barnowl-aruba__ converts Bluetooth Low Energy decodings from [Aruba APs](https://www.reelyactive.com/pareto/anywhere/infrastructure/aruba/) into software-developer-friendly JSON: a real-time stream of [raddec](https://github.com/reelyactive/raddec/) objects which facilitate any and all of the following applications:
- RFID: _what_ is present, based on the device identifier?
- RTLS: _where_ is it relative to the receiving devices?
- M2M: _how_ is its status, based on any payload included in the packet?

__barnowl-aruba__ is a lightweight [Node.js package](https://www.npmjs.com/package/barnowl-aruba) that can run on resource-constrained edge devices as well as on powerful cloud servers and anything in between.  It is typically run behind a [barnowl](https://github.com/reelyactive/barnowl) instance which is included in the [Pareto Anywhere](https://www.reelyactive.com/pareto/anywhere/) open source middleware suite.


Installation
------------

    npm install barnowl-aruba


Quick Start
-----------

Clone this repository, install package dependencies with `npm install`, and then from the root folder run at any time:

    npm start

__barnowl-aruba__ will indiscriminately accept WebSocket clients and their data on localhost:3001/aruba and print any processed [raddec](https://github.com/reelyactive/raddec) data to the console.


Hello barnowl-aruba!
--------------------

```javascript
const BarnowlAruba = require('barnowl-aruba');

let barnowl = new BarnowlAruba();

barnowl.addListener(BarnowlAruba.TestListener);

barnowl.on('raddec', function(raddec) {
  console.log(raddec);
});
```

As output you should see a stream of [raddec](https://github.com/reelyactive/raddec/) objects similar to the following:

```javascript
{
  transmitterId: "ac233fa00000",
  transmitterIdType: 2,
  rssiSignature: [
    {
      receiverId: "a400baa400ba",
      receiverIdType: 2,
      numberOfDecodings: 1,
      rssi: -70
    }
  ],
  packets: [
    '001e0000a03f23ac0201060303e1ff1016e1ffa10164187017fd5b8fa03f23ac'
  ],
  timestamp: 1547693457133
}
```

Regardless of the underlying RF protocol and hardware, the [raddec](https://github.com/reelyactive/raddec/) specifies _what_ (transmitterId) is _where_ (receiverId & rssi), as well as _how_ (packets) and _when_ (timestamp).


Is that owl you can do?
-----------------------

While __barnowl-aruba__ may suffice standalone for simple real-time applications, its functionality can be greatly extended with the following software packages:
- [advlib](https://github.com/reelyactive/advlib) to decode the individual packets from hexadecimal strings into JSON
- [barnowl](https://github.com/reelyactive/barnowl) to combine parallel streams of RF decoding data in a technology-and-vendor-agnostic way

These packages and more are bundled together as the [Pareto Anywhere](https://www.reelyactive.com/pareto/anywhere) open source middleware suite, which includes several __barnowl-x__ listeners.


Supported Listener Interfaces
-----------------------------

The following listener interfaces are supported.

### Websocket

```javascript
barnowl.addListener(BarnowlAruba.WsListener, { port: 3001 });
```

### Test

Provides a steady stream of simulated TelemetryReports for testing purposes.

```javascript
barnowl.addListener(BarnowlAruba.TestListener, {});
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
| payloadContent    | all                             |
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

Copyright (c) 2020-2022 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

