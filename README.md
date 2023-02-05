barnowl-aruba
=============

__barnowl-aruba__ converts the decodings of _any_ ambient Bluetooth Low Energy devices by [Aruba Networks](https://www.minew.com/) access points into standard developer-friendly JSON that is vendor/technology/application-agnostic.

![Overview of barnowl-aruba](https://reelyactive.github.io/barnowl-aruba/images/overview.png)

__barnowl-aruba__ is a lightweight [Node.js package](https://www.npmjs.com/package/barnowl-aruba) that can run on resource-constrained edge devices as well as on powerful cloud servers and anything in between.  It is included in reelyActive's [Pareto Anywhere](https://www.reelyactive.com/pareto/anywhere/) open source middleware suite, and can just as easily be run standalone behind a [barnowl](https://github.com/reelyactive/barnowl) instance, as detailed in the code examples below.


Getting Started
---------------

Follow our step-by-step [Configure an Aruba Instant AP](https://reelyactive.github.io/diy/aruba-instant-config/) tutorial to get started with __barnowl-aruba__ or __Pareto Anywhere__.  Or visit our [Aruba Networks integration](https://www.reelyactive.com/pareto/anywhere/infrastructure/aruba/) page to learn about alternative configurations such as Aruba IoT Transport for Azure.

Learn "owl" about the __raddec__ JSON data output:
-  [reelyActive Developer's Cheatsheet](https://reelyactive.github.io/diy/cheatsheet/)


Quick Start
-----------

Clone this repository, install package dependencies with `npm install`, and then from the root folder run at any time:

    npm start

__barnowl-aruba__ will indiscriminately accept WebSocket clients and their data on localhost:3001/aruba and output (flattened) __raddec__ JSON to the console.


Hello barnowl-aruba!
--------------------

Developing an application directly from __barnowl-aruba__?  Start by pasting the code below into a file called server.js:

```javascript
const Barnowl = require('barnowl');
const BarnowlAruba = require('barnowl-aruba');

let barnowl = new Barnowl({ enableMixing: true });

barnowl.addListener(BarnowlAruba, {}, BarnowlAruba.TestListener, {});

barnowl.on('raddec', (raddec) => {
  console.log(raddec);
  // Trigger your application logic here
});
```

From the same folder as the server.js file, install package dependencies with the commands `npm install barnowl-aruba` and `npm install barnowl`.  Then run the code with the command `node server.js` and observe the _simulated_ data stream of radio decodings (raddec objects) output to the console:

```javascript
{
  transmitterId: "fee150bada55",
  transmitterIdType: 2,
  rssiSignature: [
    {
      receiverId: "204c0fffffff",
      receiverIdType: 2,
      rssi: -77,
      numberOfDecodings: 1
    }
  ],
  packets: [ '001a55daba50e1fe0201060303e1ff1216e1ffa1034affe7004500fa55daba50e1fe' ],
  timestamp: 1645568542222
}
```

See the [Supported Listener Interfaces](#supported-listener-interfaces) below to adapt the code to listen for your AP(s).


Supported Listener Interfaces
-----------------------------

The following listener interfaces are supported.

### Websocket

```javascript
barnowl.addListener(BarnowlAruba, {}, BarnowlAruba.WsListener, { port: 3001 });
```

### Test

Provides a steady stream of simulated TelemetryReports for testing purposes.

```javascript
barnowl.addListener(BarnowlAruba, {}, BarnowlAruba.TestListener, {});
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


Is that owl you can do?
-----------------------

While __barnowl-aruba__ may suffice standalone for simple real-time applications, its functionality can be greatly extended with the following software packages:
- [advlib](https://github.com/reelyactive/advlib) to decode the individual packets from hexadecimal strings into JSON
- [barnowl](https://github.com/reelyactive/barnowl) to combine parallel streams of RF decoding data in a technology-and-vendor-agnostic way

These packages and more are bundled together as the [Pareto Anywhere](https://www.reelyactive.com/pareto/anywhere) open source middleware suite, which includes a variety of __barnowl-x__ listeners, APIs and interactive web apps.


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/barnowl-aruba/badge.svg)](https://snyk.io/test/github/reelyactive/barnowl-aruba)


License
-------

MIT License

Copyright (c) 2020-2023 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

