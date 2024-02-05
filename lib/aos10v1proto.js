/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.aruba = (function() {

    /**
     * Namespace aruba.
     * @exports aruba
     * @namespace
     */
    var aruba = {};

    aruba.iotops = (function() {

        /**
         * Namespace iotops.
         * @memberof aruba
         * @namespace
         */
        var iotops = {};

        iotops.partner = (function() {

            /**
             * Namespace partner.
             * @memberof aruba.iotops
             * @namespace
             */
            var partner = {};

            partner.transport = (function() {

                /**
                 * Namespace transport.
                 * @memberof aruba.iotops.partner
                 * @namespace
                 */
                var transport = {};

                transport.v1 = (function() {

                    /**
                     * Namespace v1.
                     * @memberof aruba.iotops.partner.transport
                     * @namespace
                     */
                    var v1 = {};

                    v1.TransportNBData = (function() {

                        /**
                         * Properties of a TransportNBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface ITransportNBData
                         * @property {aruba.iotops.partner.transport.v1.TransportNBData.IHeader|null} [header] TransportNBData header
                         * @property {aruba.iotops.partner.transport.v1.TransportNBData.IBody|null} [body] TransportNBData body
                         * @property {number|Long|null} [timestamp] TransportNBData timestamp
                         */

                        /**
                         * Constructs a new TransportNBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a TransportNBData.
                         * @implements ITransportNBData
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.ITransportNBData=} [properties] Properties to set
                         */
                        function TransportNBData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TransportNBData header.
                         * @member {aruba.iotops.partner.transport.v1.TransportNBData.IHeader|null|undefined} header
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @instance
                         */
                        TransportNBData.prototype.header = null;

                        /**
                         * TransportNBData body.
                         * @member {aruba.iotops.partner.transport.v1.TransportNBData.IBody|null|undefined} body
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @instance
                         */
                        TransportNBData.prototype.body = null;

                        /**
                         * TransportNBData timestamp.
                         * @member {number|Long} timestamp
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @instance
                         */
                        TransportNBData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new TransportNBData instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportNBData=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.TransportNBData} TransportNBData instance
                         */
                        TransportNBData.create = function create(properties) {
                            return new TransportNBData(properties);
                        };

                        /**
                         * Encodes the specified TransportNBData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportNBData} message TransportNBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransportNBData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                                $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                                $root.aruba.iotops.partner.transport.v1.TransportNBData.Body.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
                            return writer;
                        };

                        /**
                         * Encodes the specified TransportNBData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportNBData} message TransportNBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransportNBData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TransportNBData message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.TransportNBData} TransportNBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransportNBData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportNBData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.header = $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.body = $root.aruba.iotops.partner.transport.v1.TransportNBData.Body.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.timestamp = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TransportNBData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.TransportNBData} TransportNBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransportNBData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TransportNBData message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TransportNBData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.header != null && message.hasOwnProperty("header")) {
                                var error = $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.verify(message.header);
                                if (error)
                                    return "header." + error;
                            }
                            if (message.body != null && message.hasOwnProperty("body")) {
                                var error = $root.aruba.iotops.partner.transport.v1.TransportNBData.Body.verify(message.body);
                                if (error)
                                    return "body." + error;
                            }
                            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                    return "timestamp: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a TransportNBData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.TransportNBData} TransportNBData
                         */
                        TransportNBData.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportNBData)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.TransportNBData();
                            if (object.header != null) {
                                if (typeof object.header !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.header: object expected");
                                message.header = $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.fromObject(object.header);
                            }
                            if (object.body != null) {
                                if (typeof object.body !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.body: object expected");
                                message.body = $root.aruba.iotops.partner.transport.v1.TransportNBData.Body.fromObject(object.body);
                            }
                            if (object.timestamp != null)
                                if ($util.Long)
                                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                                else if (typeof object.timestamp === "string")
                                    message.timestamp = parseInt(object.timestamp, 10);
                                else if (typeof object.timestamp === "number")
                                    message.timestamp = object.timestamp;
                                else if (typeof object.timestamp === "object")
                                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a TransportNBData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.TransportNBData} message TransportNBData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TransportNBData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.header = null;
                                object.body = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.timestamp = options.longs === String ? "0" : 0;
                            }
                            if (message.header != null && message.hasOwnProperty("header"))
                                object.header = $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.toObject(message.header, options);
                            if (message.body != null && message.hasOwnProperty("body"))
                                object.body = $root.aruba.iotops.partner.transport.v1.TransportNBData.Body.toObject(message.body, options);
                            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                                if (typeof message.timestamp === "number")
                                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                                else
                                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                            return object;
                        };

                        /**
                         * Converts this TransportNBData to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TransportNBData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for TransportNBData
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        TransportNBData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportNBData";
                        };

                        TransportNBData.Header = (function() {

                            /**
                             * Properties of a Header.
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                             * @interface IHeader
                             * @property {string|null} [version] Header version
                             * @property {aruba.iotops.partner.transport.v1.TransportNBData.Header.Topic|null} [topic] Header topic
                             * @property {string|null} [connectorName] Header connectorName
                             * @property {string|null} [tpName] Header tpName
                             */

                            /**
                             * Constructs a new Header.
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                             * @classdesc Represents a Header.
                             * @implements IHeader
                             * @constructor
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IHeader=} [properties] Properties to set
                             */
                            function Header(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Header version.
                             * @member {string} version
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @instance
                             */
                            Header.prototype.version = "";

                            /**
                             * Header topic.
                             * @member {aruba.iotops.partner.transport.v1.TransportNBData.Header.Topic} topic
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @instance
                             */
                            Header.prototype.topic = 0;

                            /**
                             * Header connectorName.
                             * @member {string} connectorName
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @instance
                             */
                            Header.prototype.connectorName = "";

                            /**
                             * Header tpName.
                             * @member {string} tpName
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @instance
                             */
                            Header.prototype.tpName = "";

                            /**
                             * Creates a new Header instance using the specified properties.
                             * @function create
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IHeader=} [properties] Properties to set
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Header} Header instance
                             */
                            Header.create = function create(properties) {
                                return new Header(properties);
                            };

                            /**
                             * Encodes the specified Header message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.Header.verify|verify} messages.
                             * @function encode
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IHeader} message Header message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Header.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.topic);
                                if (message.connectorName != null && Object.hasOwnProperty.call(message, "connectorName"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.connectorName);
                                if (message.tpName != null && Object.hasOwnProperty.call(message, "tpName"))
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.tpName);
                                return writer;
                            };

                            /**
                             * Encodes the specified Header message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.Header.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IHeader} message Header message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Header.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Header message from the specified reader or buffer.
                             * @function decode
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Header} Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Header.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportNBData.Header();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.version = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.topic = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.connectorName = reader.string();
                                            break;
                                        }
                                    case 4: {
                                            message.tpName = reader.string();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Header message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Header} Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Header.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Header message.
                             * @function verify
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Header.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.version != null && message.hasOwnProperty("version"))
                                    if (!$util.isString(message.version))
                                        return "version: string expected";
                                if (message.topic != null && message.hasOwnProperty("topic"))
                                    switch (message.topic) {
                                    default:
                                        return "topic: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                        break;
                                    }
                                if (message.connectorName != null && message.hasOwnProperty("connectorName"))
                                    if (!$util.isString(message.connectorName))
                                        return "connectorName: string expected";
                                if (message.tpName != null && message.hasOwnProperty("tpName"))
                                    if (!$util.isString(message.tpName))
                                        return "tpName: string expected";
                                return null;
                            };

                            /**
                             * Creates a Header message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Header} Header
                             */
                            Header.fromObject = function fromObject(object) {
                                if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportNBData.Header)
                                    return object;
                                var message = new $root.aruba.iotops.partner.transport.v1.TransportNBData.Header();
                                if (object.version != null)
                                    message.version = String(object.version);
                                switch (object.topic) {
                                default:
                                    if (typeof object.topic === "number") {
                                        message.topic = object.topic;
                                        break;
                                    }
                                    break;
                                case "TOPIC_UNSPECIFIED":
                                case 0:
                                    message.topic = 0;
                                    break;
                                case "TOPIC_BLE_DATA":
                                case 1:
                                    message.topic = 1;
                                    break;
                                case "TOPIC_TELEMETRY":
                                case 2:
                                    message.topic = 2;
                                    break;
                                case "TOPIC_SERIAL_USB_DATA":
                                case 3:
                                    message.topic = 3;
                                    break;
                                case "TOPIC_AP_INVENTORY":
                                case 4:
                                    message.topic = 4;
                                    break;
                                case "TOPIC_KEEPALIVE":
                                case 5:
                                    message.topic = 5;
                                    break;
                                case "TOPIC_DEVICE_LOCATION":
                                case 6:
                                    message.topic = 6;
                                    break;
                                }
                                if (object.connectorName != null)
                                    message.connectorName = String(object.connectorName);
                                if (object.tpName != null)
                                    message.tpName = String(object.tpName);
                                return message;
                            };

                            /**
                             * Creates a plain object from a Header message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.Header} message Header
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Header.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.version = "";
                                    object.topic = options.enums === String ? "TOPIC_UNSPECIFIED" : 0;
                                    object.connectorName = "";
                                    object.tpName = "";
                                }
                                if (message.version != null && message.hasOwnProperty("version"))
                                    object.version = message.version;
                                if (message.topic != null && message.hasOwnProperty("topic"))
                                    object.topic = options.enums === String ? $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.Topic[message.topic] === undefined ? message.topic : $root.aruba.iotops.partner.transport.v1.TransportNBData.Header.Topic[message.topic] : message.topic;
                                if (message.connectorName != null && message.hasOwnProperty("connectorName"))
                                    object.connectorName = message.connectorName;
                                if (message.tpName != null && message.hasOwnProperty("tpName"))
                                    object.tpName = message.tpName;
                                return object;
                            };

                            /**
                             * Converts this Header to JSON.
                             * @function toJSON
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Header.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Header
                             * @function getTypeUrl
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Header
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportNBData.Header";
                            };

                            /**
                             * Topic enum.
                             * @name aruba.iotops.partner.transport.v1.TransportNBData.Header.Topic
                             * @enum {number}
                             * @property {number} TOPIC_UNSPECIFIED=0 TOPIC_UNSPECIFIED value
                             * @property {number} TOPIC_BLE_DATA=1 TOPIC_BLE_DATA value
                             * @property {number} TOPIC_TELEMETRY=2 TOPIC_TELEMETRY value
                             * @property {number} TOPIC_SERIAL_USB_DATA=3 TOPIC_SERIAL_USB_DATA value
                             * @property {number} TOPIC_AP_INVENTORY=4 TOPIC_AP_INVENTORY value
                             * @property {number} TOPIC_KEEPALIVE=5 TOPIC_KEEPALIVE value
                             * @property {number} TOPIC_DEVICE_LOCATION=6 TOPIC_DEVICE_LOCATION value
                             */
                            Header.Topic = (function() {
                                var valuesById = {}, values = Object.create(valuesById);
                                values[valuesById[0] = "TOPIC_UNSPECIFIED"] = 0;
                                values[valuesById[1] = "TOPIC_BLE_DATA"] = 1;
                                values[valuesById[2] = "TOPIC_TELEMETRY"] = 2;
                                values[valuesById[3] = "TOPIC_SERIAL_USB_DATA"] = 3;
                                values[valuesById[4] = "TOPIC_AP_INVENTORY"] = 4;
                                values[valuesById[5] = "TOPIC_KEEPALIVE"] = 5;
                                values[valuesById[6] = "TOPIC_DEVICE_LOCATION"] = 6;
                                return values;
                            })();

                            return Header;
                        })();

                        TransportNBData.Body = (function() {

                            /**
                             * Properties of a Body.
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                             * @interface IBody
                             * @property {Array.<aruba.iotops.partner.transport.v1.IBleData>|null} [bleRawData] Body bleRawData
                             * @property {Array.<aruba.iotops.partner.transport.v1.ITelemetry>|null} [telemetry] Body telemetry
                             * @property {Array.<aruba.iotops.partner.transport.v1.ISerialNBUSBData>|null} [serialNbUsbData] Body serialNbUsbData
                             * @property {aruba.iotops.partner.transport.v1.IInventory|null} [inventory] Body inventory
                             * @property {aruba.iotops.common.v1.IDeviceLocation|null} [deviceLocation] Body deviceLocation
                             */

                            /**
                             * Constructs a new Body.
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData
                             * @classdesc Represents a Body.
                             * @implements IBody
                             * @constructor
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IBody=} [properties] Properties to set
                             */
                            function Body(properties) {
                                this.bleRawData = [];
                                this.telemetry = [];
                                this.serialNbUsbData = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Body bleRawData.
                             * @member {Array.<aruba.iotops.partner.transport.v1.IBleData>} bleRawData
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             */
                            Body.prototype.bleRawData = $util.emptyArray;

                            /**
                             * Body telemetry.
                             * @member {Array.<aruba.iotops.partner.transport.v1.ITelemetry>} telemetry
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             */
                            Body.prototype.telemetry = $util.emptyArray;

                            /**
                             * Body serialNbUsbData.
                             * @member {Array.<aruba.iotops.partner.transport.v1.ISerialNBUSBData>} serialNbUsbData
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             */
                            Body.prototype.serialNbUsbData = $util.emptyArray;

                            /**
                             * Body inventory.
                             * @member {aruba.iotops.partner.transport.v1.IInventory|null|undefined} inventory
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             */
                            Body.prototype.inventory = null;

                            /**
                             * Body deviceLocation.
                             * @member {aruba.iotops.common.v1.IDeviceLocation|null|undefined} deviceLocation
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             */
                            Body.prototype.deviceLocation = null;

                            /**
                             * Creates a new Body instance using the specified properties.
                             * @function create
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IBody=} [properties] Properties to set
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Body} Body instance
                             */
                            Body.create = function create(properties) {
                                return new Body(properties);
                            };

                            /**
                             * Encodes the specified Body message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.Body.verify|verify} messages.
                             * @function encode
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IBody} message Body message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Body.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.bleRawData != null && message.bleRawData.length)
                                    for (var i = 0; i < message.bleRawData.length; ++i)
                                        $root.aruba.iotops.partner.transport.v1.BleData.encode(message.bleRawData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.telemetry != null && message.telemetry.length)
                                    for (var i = 0; i < message.telemetry.length; ++i)
                                        $root.aruba.iotops.partner.transport.v1.Telemetry.encode(message.telemetry[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.serialNbUsbData != null && message.serialNbUsbData.length)
                                    for (var i = 0; i < message.serialNbUsbData.length; ++i)
                                        $root.aruba.iotops.partner.transport.v1.SerialNBUSBData.encode(message.serialNbUsbData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                                    $root.aruba.iotops.partner.transport.v1.Inventory.encode(message.inventory, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                if (message.deviceLocation != null && Object.hasOwnProperty.call(message, "deviceLocation"))
                                    $root.aruba.iotops.common.v1.DeviceLocation.encode(message.deviceLocation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified Body message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportNBData.Body.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.IBody} message Body message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Body.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Body message from the specified reader or buffer.
                             * @function decode
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Body} Body
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Body.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportNBData.Body();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            if (!(message.bleRawData && message.bleRawData.length))
                                                message.bleRawData = [];
                                            message.bleRawData.push($root.aruba.iotops.partner.transport.v1.BleData.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    case 2: {
                                            if (!(message.telemetry && message.telemetry.length))
                                                message.telemetry = [];
                                            message.telemetry.push($root.aruba.iotops.partner.transport.v1.Telemetry.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    case 3: {
                                            if (!(message.serialNbUsbData && message.serialNbUsbData.length))
                                                message.serialNbUsbData = [];
                                            message.serialNbUsbData.push($root.aruba.iotops.partner.transport.v1.SerialNBUSBData.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    case 4: {
                                            message.inventory = $root.aruba.iotops.partner.transport.v1.Inventory.decode(reader, reader.uint32());
                                            break;
                                        }
                                    case 5: {
                                            message.deviceLocation = $root.aruba.iotops.common.v1.DeviceLocation.decode(reader, reader.uint32());
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Body message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Body} Body
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Body.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Body message.
                             * @function verify
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Body.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.bleRawData != null && message.hasOwnProperty("bleRawData")) {
                                    if (!Array.isArray(message.bleRawData))
                                        return "bleRawData: array expected";
                                    for (var i = 0; i < message.bleRawData.length; ++i) {
                                        var error = $root.aruba.iotops.partner.transport.v1.BleData.verify(message.bleRawData[i]);
                                        if (error)
                                            return "bleRawData." + error;
                                    }
                                }
                                if (message.telemetry != null && message.hasOwnProperty("telemetry")) {
                                    if (!Array.isArray(message.telemetry))
                                        return "telemetry: array expected";
                                    for (var i = 0; i < message.telemetry.length; ++i) {
                                        var error = $root.aruba.iotops.partner.transport.v1.Telemetry.verify(message.telemetry[i]);
                                        if (error)
                                            return "telemetry." + error;
                                    }
                                }
                                if (message.serialNbUsbData != null && message.hasOwnProperty("serialNbUsbData")) {
                                    if (!Array.isArray(message.serialNbUsbData))
                                        return "serialNbUsbData: array expected";
                                    for (var i = 0; i < message.serialNbUsbData.length; ++i) {
                                        var error = $root.aruba.iotops.partner.transport.v1.SerialNBUSBData.verify(message.serialNbUsbData[i]);
                                        if (error)
                                            return "serialNbUsbData." + error;
                                    }
                                }
                                if (message.inventory != null && message.hasOwnProperty("inventory")) {
                                    var error = $root.aruba.iotops.partner.transport.v1.Inventory.verify(message.inventory);
                                    if (error)
                                        return "inventory." + error;
                                }
                                if (message.deviceLocation != null && message.hasOwnProperty("deviceLocation")) {
                                    var error = $root.aruba.iotops.common.v1.DeviceLocation.verify(message.deviceLocation);
                                    if (error)
                                        return "deviceLocation." + error;
                                }
                                return null;
                            };

                            /**
                             * Creates a Body message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {aruba.iotops.partner.transport.v1.TransportNBData.Body} Body
                             */
                            Body.fromObject = function fromObject(object) {
                                if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportNBData.Body)
                                    return object;
                                var message = new $root.aruba.iotops.partner.transport.v1.TransportNBData.Body();
                                if (object.bleRawData) {
                                    if (!Array.isArray(object.bleRawData))
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.bleRawData: array expected");
                                    message.bleRawData = [];
                                    for (var i = 0; i < object.bleRawData.length; ++i) {
                                        if (typeof object.bleRawData[i] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.bleRawData: object expected");
                                        message.bleRawData[i] = $root.aruba.iotops.partner.transport.v1.BleData.fromObject(object.bleRawData[i]);
                                    }
                                }
                                if (object.telemetry) {
                                    if (!Array.isArray(object.telemetry))
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.telemetry: array expected");
                                    message.telemetry = [];
                                    for (var i = 0; i < object.telemetry.length; ++i) {
                                        if (typeof object.telemetry[i] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.telemetry: object expected");
                                        message.telemetry[i] = $root.aruba.iotops.partner.transport.v1.Telemetry.fromObject(object.telemetry[i]);
                                    }
                                }
                                if (object.serialNbUsbData) {
                                    if (!Array.isArray(object.serialNbUsbData))
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.serialNbUsbData: array expected");
                                    message.serialNbUsbData = [];
                                    for (var i = 0; i < object.serialNbUsbData.length; ++i) {
                                        if (typeof object.serialNbUsbData[i] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.serialNbUsbData: object expected");
                                        message.serialNbUsbData[i] = $root.aruba.iotops.partner.transport.v1.SerialNBUSBData.fromObject(object.serialNbUsbData[i]);
                                    }
                                }
                                if (object.inventory != null) {
                                    if (typeof object.inventory !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.inventory: object expected");
                                    message.inventory = $root.aruba.iotops.partner.transport.v1.Inventory.fromObject(object.inventory);
                                }
                                if (object.deviceLocation != null) {
                                    if (typeof object.deviceLocation !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportNBData.Body.deviceLocation: object expected");
                                    message.deviceLocation = $root.aruba.iotops.common.v1.DeviceLocation.fromObject(object.deviceLocation);
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a Body message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportNBData.Body} message Body
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Body.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults) {
                                    object.bleRawData = [];
                                    object.telemetry = [];
                                    object.serialNbUsbData = [];
                                }
                                if (options.defaults) {
                                    object.inventory = null;
                                    object.deviceLocation = null;
                                }
                                if (message.bleRawData && message.bleRawData.length) {
                                    object.bleRawData = [];
                                    for (var j = 0; j < message.bleRawData.length; ++j)
                                        object.bleRawData[j] = $root.aruba.iotops.partner.transport.v1.BleData.toObject(message.bleRawData[j], options);
                                }
                                if (message.telemetry && message.telemetry.length) {
                                    object.telemetry = [];
                                    for (var j = 0; j < message.telemetry.length; ++j)
                                        object.telemetry[j] = $root.aruba.iotops.partner.transport.v1.Telemetry.toObject(message.telemetry[j], options);
                                }
                                if (message.serialNbUsbData && message.serialNbUsbData.length) {
                                    object.serialNbUsbData = [];
                                    for (var j = 0; j < message.serialNbUsbData.length; ++j)
                                        object.serialNbUsbData[j] = $root.aruba.iotops.partner.transport.v1.SerialNBUSBData.toObject(message.serialNbUsbData[j], options);
                                }
                                if (message.inventory != null && message.hasOwnProperty("inventory"))
                                    object.inventory = $root.aruba.iotops.partner.transport.v1.Inventory.toObject(message.inventory, options);
                                if (message.deviceLocation != null && message.hasOwnProperty("deviceLocation"))
                                    object.deviceLocation = $root.aruba.iotops.common.v1.DeviceLocation.toObject(message.deviceLocation, options);
                                return object;
                            };

                            /**
                             * Converts this Body to JSON.
                             * @function toJSON
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Body.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Body
                             * @function getTypeUrl
                             * @memberof aruba.iotops.partner.transport.v1.TransportNBData.Body
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Body.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportNBData.Body";
                            };

                            return Body;
                        })();

                        return TransportNBData;
                    })();

                    v1.TransportSBData = (function() {

                        /**
                         * Properties of a TransportSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface ITransportSBData
                         * @property {aruba.iotops.partner.transport.v1.TransportSBData.IHeader|null} [header] TransportSBData header
                         * @property {aruba.iotops.partner.transport.v1.TransportSBData.IBody|null} [body] TransportSBData body
                         */

                        /**
                         * Constructs a new TransportSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a TransportSBData.
                         * @implements ITransportSBData
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.ITransportSBData=} [properties] Properties to set
                         */
                        function TransportSBData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TransportSBData header.
                         * @member {aruba.iotops.partner.transport.v1.TransportSBData.IHeader|null|undefined} header
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @instance
                         */
                        TransportSBData.prototype.header = null;

                        /**
                         * TransportSBData body.
                         * @member {aruba.iotops.partner.transport.v1.TransportSBData.IBody|null|undefined} body
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @instance
                         */
                        TransportSBData.prototype.body = null;

                        /**
                         * Creates a new TransportSBData instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportSBData=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.TransportSBData} TransportSBData instance
                         */
                        TransportSBData.create = function create(properties) {
                            return new TransportSBData(properties);
                        };

                        /**
                         * Encodes the specified TransportSBData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportSBData} message TransportSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransportSBData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                                $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                                $root.aruba.iotops.partner.transport.v1.TransportSBData.Body.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified TransportSBData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITransportSBData} message TransportSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransportSBData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TransportSBData message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.TransportSBData} TransportSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransportSBData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportSBData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.header = $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.body = $root.aruba.iotops.partner.transport.v1.TransportSBData.Body.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TransportSBData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.TransportSBData} TransportSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransportSBData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TransportSBData message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TransportSBData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.header != null && message.hasOwnProperty("header")) {
                                var error = $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.verify(message.header);
                                if (error)
                                    return "header." + error;
                            }
                            if (message.body != null && message.hasOwnProperty("body")) {
                                var error = $root.aruba.iotops.partner.transport.v1.TransportSBData.Body.verify(message.body);
                                if (error)
                                    return "body." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a TransportSBData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.TransportSBData} TransportSBData
                         */
                        TransportSBData.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportSBData)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.TransportSBData();
                            if (object.header != null) {
                                if (typeof object.header !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.TransportSBData.header: object expected");
                                message.header = $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.fromObject(object.header);
                            }
                            if (object.body != null) {
                                if (typeof object.body !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.TransportSBData.body: object expected");
                                message.body = $root.aruba.iotops.partner.transport.v1.TransportSBData.Body.fromObject(object.body);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a TransportSBData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.TransportSBData} message TransportSBData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TransportSBData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.header = null;
                                object.body = null;
                            }
                            if (message.header != null && message.hasOwnProperty("header"))
                                object.header = $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.toObject(message.header, options);
                            if (message.body != null && message.hasOwnProperty("body"))
                                object.body = $root.aruba.iotops.partner.transport.v1.TransportSBData.Body.toObject(message.body, options);
                            return object;
                        };

                        /**
                         * Converts this TransportSBData to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TransportSBData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for TransportSBData
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        TransportSBData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportSBData";
                        };

                        TransportSBData.Header = (function() {

                            /**
                             * Properties of a Header.
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                             * @interface IHeader
                             * @property {string|null} [version] Header version
                             * @property {aruba.iotops.partner.transport.v1.TransportSBData.Header.Topic|null} [topic] Header topic
                             */

                            /**
                             * Constructs a new Header.
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                             * @classdesc Represents a Header.
                             * @implements IHeader
                             * @constructor
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IHeader=} [properties] Properties to set
                             */
                            function Header(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Header version.
                             * @member {string} version
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @instance
                             */
                            Header.prototype.version = "";

                            /**
                             * Header topic.
                             * @member {aruba.iotops.partner.transport.v1.TransportSBData.Header.Topic} topic
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @instance
                             */
                            Header.prototype.topic = 0;

                            /**
                             * Creates a new Header instance using the specified properties.
                             * @function create
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IHeader=} [properties] Properties to set
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Header} Header instance
                             */
                            Header.create = function create(properties) {
                                return new Header(properties);
                            };

                            /**
                             * Encodes the specified Header message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.Header.verify|verify} messages.
                             * @function encode
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IHeader} message Header message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Header.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.topic);
                                return writer;
                            };

                            /**
                             * Encodes the specified Header message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.Header.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IHeader} message Header message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Header.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Header message from the specified reader or buffer.
                             * @function decode
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Header} Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Header.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportSBData.Header();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.version = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.topic = reader.int32();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Header message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Header} Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Header.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Header message.
                             * @function verify
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Header.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.version != null && message.hasOwnProperty("version"))
                                    if (!$util.isString(message.version))
                                        return "version: string expected";
                                if (message.topic != null && message.hasOwnProperty("topic"))
                                    switch (message.topic) {
                                    default:
                                        return "topic: enum value expected";
                                    case 0:
                                    case 1:
                                        break;
                                    }
                                return null;
                            };

                            /**
                             * Creates a Header message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Header} Header
                             */
                            Header.fromObject = function fromObject(object) {
                                if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportSBData.Header)
                                    return object;
                                var message = new $root.aruba.iotops.partner.transport.v1.TransportSBData.Header();
                                if (object.version != null)
                                    message.version = String(object.version);
                                switch (object.topic) {
                                default:
                                    if (typeof object.topic === "number") {
                                        message.topic = object.topic;
                                        break;
                                    }
                                    break;
                                case "TOPIC_UNSPECIFIED":
                                case 0:
                                    message.topic = 0;
                                    break;
                                case "TOPIC_SERIAL_USB_DATA":
                                case 1:
                                    message.topic = 1;
                                    break;
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a Header message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.Header} message Header
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Header.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.version = "";
                                    object.topic = options.enums === String ? "TOPIC_UNSPECIFIED" : 0;
                                }
                                if (message.version != null && message.hasOwnProperty("version"))
                                    object.version = message.version;
                                if (message.topic != null && message.hasOwnProperty("topic"))
                                    object.topic = options.enums === String ? $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.Topic[message.topic] === undefined ? message.topic : $root.aruba.iotops.partner.transport.v1.TransportSBData.Header.Topic[message.topic] : message.topic;
                                return object;
                            };

                            /**
                             * Converts this Header to JSON.
                             * @function toJSON
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Header.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Header
                             * @function getTypeUrl
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Header
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportSBData.Header";
                            };

                            /**
                             * Topic enum.
                             * @name aruba.iotops.partner.transport.v1.TransportSBData.Header.Topic
                             * @enum {number}
                             * @property {number} TOPIC_UNSPECIFIED=0 TOPIC_UNSPECIFIED value
                             * @property {number} TOPIC_SERIAL_USB_DATA=1 TOPIC_SERIAL_USB_DATA value
                             */
                            Header.Topic = (function() {
                                var valuesById = {}, values = Object.create(valuesById);
                                values[valuesById[0] = "TOPIC_UNSPECIFIED"] = 0;
                                values[valuesById[1] = "TOPIC_SERIAL_USB_DATA"] = 1;
                                return values;
                            })();

                            return Header;
                        })();

                        TransportSBData.Body = (function() {

                            /**
                             * Properties of a Body.
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                             * @interface IBody
                             * @property {Array.<aruba.iotops.partner.transport.v1.ISerialSBUSBData>|null} [serialSbUsbData] Body serialSbUsbData
                             */

                            /**
                             * Constructs a new Body.
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData
                             * @classdesc Represents a Body.
                             * @implements IBody
                             * @constructor
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IBody=} [properties] Properties to set
                             */
                            function Body(properties) {
                                this.serialSbUsbData = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Body serialSbUsbData.
                             * @member {Array.<aruba.iotops.partner.transport.v1.ISerialSBUSBData>} serialSbUsbData
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @instance
                             */
                            Body.prototype.serialSbUsbData = $util.emptyArray;

                            /**
                             * Creates a new Body instance using the specified properties.
                             * @function create
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IBody=} [properties] Properties to set
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Body} Body instance
                             */
                            Body.create = function create(properties) {
                                return new Body(properties);
                            };

                            /**
                             * Encodes the specified Body message. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.Body.verify|verify} messages.
                             * @function encode
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IBody} message Body message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Body.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.serialSbUsbData != null && message.serialSbUsbData.length)
                                    for (var i = 0; i < message.serialSbUsbData.length; ++i)
                                        $root.aruba.iotops.partner.transport.v1.SerialSBUSBData.encode(message.serialSbUsbData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified Body message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.TransportSBData.Body.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.IBody} message Body message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Body.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Body message from the specified reader or buffer.
                             * @function decode
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Body} Body
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Body.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.TransportSBData.Body();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            if (!(message.serialSbUsbData && message.serialSbUsbData.length))
                                                message.serialSbUsbData = [];
                                            message.serialSbUsbData.push($root.aruba.iotops.partner.transport.v1.SerialSBUSBData.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Body message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Body} Body
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Body.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Body message.
                             * @function verify
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Body.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.serialSbUsbData != null && message.hasOwnProperty("serialSbUsbData")) {
                                    if (!Array.isArray(message.serialSbUsbData))
                                        return "serialSbUsbData: array expected";
                                    for (var i = 0; i < message.serialSbUsbData.length; ++i) {
                                        var error = $root.aruba.iotops.partner.transport.v1.SerialSBUSBData.verify(message.serialSbUsbData[i]);
                                        if (error)
                                            return "serialSbUsbData." + error;
                                    }
                                }
                                return null;
                            };

                            /**
                             * Creates a Body message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {aruba.iotops.partner.transport.v1.TransportSBData.Body} Body
                             */
                            Body.fromObject = function fromObject(object) {
                                if (object instanceof $root.aruba.iotops.partner.transport.v1.TransportSBData.Body)
                                    return object;
                                var message = new $root.aruba.iotops.partner.transport.v1.TransportSBData.Body();
                                if (object.serialSbUsbData) {
                                    if (!Array.isArray(object.serialSbUsbData))
                                        throw TypeError(".aruba.iotops.partner.transport.v1.TransportSBData.Body.serialSbUsbData: array expected");
                                    message.serialSbUsbData = [];
                                    for (var i = 0; i < object.serialSbUsbData.length; ++i) {
                                        if (typeof object.serialSbUsbData[i] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.TransportSBData.Body.serialSbUsbData: object expected");
                                        message.serialSbUsbData[i] = $root.aruba.iotops.partner.transport.v1.SerialSBUSBData.fromObject(object.serialSbUsbData[i]);
                                    }
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a Body message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.TransportSBData.Body} message Body
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Body.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.serialSbUsbData = [];
                                if (message.serialSbUsbData && message.serialSbUsbData.length) {
                                    object.serialSbUsbData = [];
                                    for (var j = 0; j < message.serialSbUsbData.length; ++j)
                                        object.serialSbUsbData[j] = $root.aruba.iotops.partner.transport.v1.SerialSBUSBData.toObject(message.serialSbUsbData[j], options);
                                }
                                return object;
                            };

                            /**
                             * Converts this Body to JSON.
                             * @function toJSON
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Body.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Body
                             * @function getTypeUrl
                             * @memberof aruba.iotops.partner.transport.v1.TransportSBData.Body
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Body.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.TransportSBData.Body";
                            };

                            return Body;
                        })();

                        return TransportSBData;
                    })();

                    v1.Inventory = (function() {

                        /**
                         * Properties of an Inventory.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface IInventory
                         * @property {aruba.iotops.partner.transport.v1.Inventory.Type|null} [packageType] Inventory packageType
                         * @property {Array.<aruba.iotops.common.v1.IAPInventory>|null} [apInventories] Inventory apInventories
                         */

                        /**
                         * Constructs a new Inventory.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents an Inventory.
                         * @implements IInventory
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.IInventory=} [properties] Properties to set
                         */
                        function Inventory(properties) {
                            this.apInventories = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Inventory packageType.
                         * @member {aruba.iotops.partner.transport.v1.Inventory.Type} packageType
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @instance
                         */
                        Inventory.prototype.packageType = 0;

                        /**
                         * Inventory apInventories.
                         * @member {Array.<aruba.iotops.common.v1.IAPInventory>} apInventories
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @instance
                         */
                        Inventory.prototype.apInventories = $util.emptyArray;

                        /**
                         * Creates a new Inventory instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IInventory=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.Inventory} Inventory instance
                         */
                        Inventory.create = function create(properties) {
                            return new Inventory(properties);
                        };

                        /**
                         * Encodes the specified Inventory message. Does not implicitly {@link aruba.iotops.partner.transport.v1.Inventory.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IInventory} message Inventory message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Inventory.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.packageType != null && Object.hasOwnProperty.call(message, "packageType"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.packageType);
                            if (message.apInventories != null && message.apInventories.length)
                                for (var i = 0; i < message.apInventories.length; ++i)
                                    $root.aruba.iotops.common.v1.APInventory.encode(message.apInventories[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.Inventory.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IInventory} message Inventory message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Inventory message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.Inventory} Inventory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Inventory.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.Inventory();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.packageType = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.apInventories && message.apInventories.length))
                                            message.apInventories = [];
                                        message.apInventories.push($root.aruba.iotops.common.v1.APInventory.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Inventory message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.Inventory} Inventory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Inventory.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Inventory message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Inventory.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.packageType != null && message.hasOwnProperty("packageType"))
                                switch (message.packageType) {
                                default:
                                    return "packageType: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.apInventories != null && message.hasOwnProperty("apInventories")) {
                                if (!Array.isArray(message.apInventories))
                                    return "apInventories: array expected";
                                for (var i = 0; i < message.apInventories.length; ++i) {
                                    var error = $root.aruba.iotops.common.v1.APInventory.verify(message.apInventories[i]);
                                    if (error)
                                        return "apInventories." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.Inventory} Inventory
                         */
                        Inventory.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.Inventory)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.Inventory();
                            switch (object.packageType) {
                            default:
                                if (typeof object.packageType === "number") {
                                    message.packageType = object.packageType;
                                    break;
                                }
                                break;
                            case "TYPE_EVENT":
                            case 0:
                                message.packageType = 0;
                                break;
                            case "TYPE_ALL":
                            case 1:
                                message.packageType = 1;
                                break;
                            }
                            if (object.apInventories) {
                                if (!Array.isArray(object.apInventories))
                                    throw TypeError(".aruba.iotops.partner.transport.v1.Inventory.apInventories: array expected");
                                message.apInventories = [];
                                for (var i = 0; i < object.apInventories.length; ++i) {
                                    if (typeof object.apInventories[i] !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.Inventory.apInventories: object expected");
                                    message.apInventories[i] = $root.aruba.iotops.common.v1.APInventory.fromObject(object.apInventories[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.Inventory} message Inventory
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Inventory.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.apInventories = [];
                            if (options.defaults)
                                object.packageType = options.enums === String ? "TYPE_EVENT" : 0;
                            if (message.packageType != null && message.hasOwnProperty("packageType"))
                                object.packageType = options.enums === String ? $root.aruba.iotops.partner.transport.v1.Inventory.Type[message.packageType] === undefined ? message.packageType : $root.aruba.iotops.partner.transport.v1.Inventory.Type[message.packageType] : message.packageType;
                            if (message.apInventories && message.apInventories.length) {
                                object.apInventories = [];
                                for (var j = 0; j < message.apInventories.length; ++j)
                                    object.apInventories[j] = $root.aruba.iotops.common.v1.APInventory.toObject(message.apInventories[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this Inventory to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Inventory.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Inventory
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.Inventory
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.Inventory";
                        };

                        /**
                         * Type enum.
                         * @name aruba.iotops.partner.transport.v1.Inventory.Type
                         * @enum {number}
                         * @property {number} TYPE_EVENT=0 TYPE_EVENT value
                         * @property {number} TYPE_ALL=1 TYPE_ALL value
                         */
                        Inventory.Type = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "TYPE_EVENT"] = 0;
                            values[valuesById[1] = "TYPE_ALL"] = 1;
                            return values;
                        })();

                        return Inventory;
                    })();

                    v1.BleData = (function() {

                        /**
                         * Properties of a BleData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface IBleData
                         * @property {aruba.iotops.partner.transport.v1.IDeviceAddress|null} [bleDeviceAddress] BleData bleDeviceAddress
                         * @property {aruba.iotops.common.v1.BLEFrameType|null} [bleDeviceFrameType] BleData bleDeviceFrameType
                         * @property {Uint8Array|null} [bleDeviceRawData] BleData bleDeviceRawData
                         * @property {number|null} [bleDeviceRssi] BleData bleDeviceRssi
                         * @property {Uint8Array|null} [apMac] BleData apMac
                         */

                        /**
                         * Constructs a new BleData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a BleData.
                         * @implements IBleData
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.IBleData=} [properties] Properties to set
                         */
                        function BleData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BleData bleDeviceAddress.
                         * @member {aruba.iotops.partner.transport.v1.IDeviceAddress|null|undefined} bleDeviceAddress
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        BleData.prototype.bleDeviceAddress = null;

                        /**
                         * BleData bleDeviceFrameType.
                         * @member {aruba.iotops.common.v1.BLEFrameType} bleDeviceFrameType
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        BleData.prototype.bleDeviceFrameType = 0;

                        /**
                         * BleData bleDeviceRawData.
                         * @member {Uint8Array} bleDeviceRawData
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        BleData.prototype.bleDeviceRawData = $util.newBuffer([]);

                        /**
                         * BleData bleDeviceRssi.
                         * @member {number|null|undefined} bleDeviceRssi
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        BleData.prototype.bleDeviceRssi = null;

                        /**
                         * BleData apMac.
                         * @member {Uint8Array} apMac
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        BleData.prototype.apMac = $util.newBuffer([]);

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * BleData _bleDeviceRssi.
                         * @member {"bleDeviceRssi"|undefined} _bleDeviceRssi
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         */
                        Object.defineProperty(BleData.prototype, "_bleDeviceRssi", {
                            get: $util.oneOfGetter($oneOfFields = ["bleDeviceRssi"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new BleData instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBleData=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.BleData} BleData instance
                         */
                        BleData.create = function create(properties) {
                            return new BleData(properties);
                        };

                        /**
                         * Encodes the specified BleData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.BleData.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBleData} message BleData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BleData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.bleDeviceAddress != null && Object.hasOwnProperty.call(message, "bleDeviceAddress"))
                                $root.aruba.iotops.partner.transport.v1.DeviceAddress.encode(message.bleDeviceAddress, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.bleDeviceFrameType != null && Object.hasOwnProperty.call(message, "bleDeviceFrameType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bleDeviceFrameType);
                            if (message.bleDeviceRawData != null && Object.hasOwnProperty.call(message, "bleDeviceRawData"))
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.bleDeviceRawData);
                            if (message.bleDeviceRssi != null && Object.hasOwnProperty.call(message, "bleDeviceRssi"))
                                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.bleDeviceRssi);
                            if (message.apMac != null && Object.hasOwnProperty.call(message, "apMac"))
                                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.apMac);
                            return writer;
                        };

                        /**
                         * Encodes the specified BleData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.BleData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBleData} message BleData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BleData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BleData message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.BleData} BleData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BleData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.BleData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.bleDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.bleDeviceFrameType = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.bleDeviceRawData = reader.bytes();
                                        break;
                                    }
                                case 4: {
                                        message.bleDeviceRssi = reader.sint32();
                                        break;
                                    }
                                case 5: {
                                        message.apMac = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BleData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.BleData} BleData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BleData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BleData message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BleData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.bleDeviceAddress != null && message.hasOwnProperty("bleDeviceAddress")) {
                                var error = $root.aruba.iotops.partner.transport.v1.DeviceAddress.verify(message.bleDeviceAddress);
                                if (error)
                                    return "bleDeviceAddress." + error;
                            }
                            if (message.bleDeviceFrameType != null && message.hasOwnProperty("bleDeviceFrameType"))
                                switch (message.bleDeviceFrameType) {
                                default:
                                    return "bleDeviceFrameType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                    break;
                                }
                            if (message.bleDeviceRawData != null && message.hasOwnProperty("bleDeviceRawData"))
                                if (!(message.bleDeviceRawData && typeof message.bleDeviceRawData.length === "number" || $util.isString(message.bleDeviceRawData)))
                                    return "bleDeviceRawData: buffer expected";
                            if (message.bleDeviceRssi != null && message.hasOwnProperty("bleDeviceRssi")) {
                                properties._bleDeviceRssi = 1;
                                if (!$util.isInteger(message.bleDeviceRssi))
                                    return "bleDeviceRssi: integer expected";
                            }
                            if (message.apMac != null && message.hasOwnProperty("apMac"))
                                if (!(message.apMac && typeof message.apMac.length === "number" || $util.isString(message.apMac)))
                                    return "apMac: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a BleData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.BleData} BleData
                         */
                        BleData.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.BleData)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.BleData();
                            if (object.bleDeviceAddress != null) {
                                if (typeof object.bleDeviceAddress !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.BleData.bleDeviceAddress: object expected");
                                message.bleDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.fromObject(object.bleDeviceAddress);
                            }
                            switch (object.bleDeviceFrameType) {
                            default:
                                if (typeof object.bleDeviceFrameType === "number") {
                                    message.bleDeviceFrameType = object.bleDeviceFrameType;
                                    break;
                                }
                                break;
                            case "BLE_FRAME_TYPE_ADV_UNSPECIFIED":
                            case 0:
                                message.bleDeviceFrameType = 0;
                                break;
                            case "BLE_FRAME_TYPE_ADV_IND":
                            case 1:
                                message.bleDeviceFrameType = 1;
                                break;
                            case "BLE_FRAME_TYPE_ADV_DIRECT_IND":
                            case 2:
                                message.bleDeviceFrameType = 2;
                                break;
                            case "BLE_FRAME_TYPE_ADV_NONCONN_IND":
                            case 3:
                                message.bleDeviceFrameType = 3;
                                break;
                            case "BLE_FRAME_TYPE_SCAN_RSP":
                            case 4:
                                message.bleDeviceFrameType = 4;
                                break;
                            case "BLE_FRAME_TYPE_ADV_SCAN_IND":
                            case 5:
                                message.bleDeviceFrameType = 5;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_UNDIRECTED":
                            case 6:
                                message.bleDeviceFrameType = 6;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_DIRECTED":
                            case 7:
                                message.bleDeviceFrameType = 7;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_UNDIRECTED":
                            case 8:
                                message.bleDeviceFrameType = 8;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_DIRECTED":
                            case 9:
                                message.bleDeviceFrameType = 9;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_UNDIRECTED":
                            case 10:
                                message.bleDeviceFrameType = 10;
                                break;
                            case "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_DIRECTED":
                            case 11:
                                message.bleDeviceFrameType = 11;
                                break;
                            }
                            if (object.bleDeviceRawData != null)
                                if (typeof object.bleDeviceRawData === "string")
                                    $util.base64.decode(object.bleDeviceRawData, message.bleDeviceRawData = $util.newBuffer($util.base64.length(object.bleDeviceRawData)), 0);
                                else if (object.bleDeviceRawData.length >= 0)
                                    message.bleDeviceRawData = object.bleDeviceRawData;
                            if (object.bleDeviceRssi != null)
                                message.bleDeviceRssi = object.bleDeviceRssi | 0;
                            if (object.apMac != null)
                                if (typeof object.apMac === "string")
                                    $util.base64.decode(object.apMac, message.apMac = $util.newBuffer($util.base64.length(object.apMac)), 0);
                                else if (object.apMac.length >= 0)
                                    message.apMac = object.apMac;
                            return message;
                        };

                        /**
                         * Creates a plain object from a BleData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.BleData} message BleData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BleData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.bleDeviceAddress = null;
                                object.bleDeviceFrameType = options.enums === String ? "BLE_FRAME_TYPE_ADV_UNSPECIFIED" : 0;
                                if (options.bytes === String)
                                    object.bleDeviceRawData = "";
                                else {
                                    object.bleDeviceRawData = [];
                                    if (options.bytes !== Array)
                                        object.bleDeviceRawData = $util.newBuffer(object.bleDeviceRawData);
                                }
                                if (options.bytes === String)
                                    object.apMac = "";
                                else {
                                    object.apMac = [];
                                    if (options.bytes !== Array)
                                        object.apMac = $util.newBuffer(object.apMac);
                                }
                            }
                            if (message.bleDeviceAddress != null && message.hasOwnProperty("bleDeviceAddress"))
                                object.bleDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.toObject(message.bleDeviceAddress, options);
                            if (message.bleDeviceFrameType != null && message.hasOwnProperty("bleDeviceFrameType"))
                                object.bleDeviceFrameType = options.enums === String ? $root.aruba.iotops.common.v1.BLEFrameType[message.bleDeviceFrameType] === undefined ? message.bleDeviceFrameType : $root.aruba.iotops.common.v1.BLEFrameType[message.bleDeviceFrameType] : message.bleDeviceFrameType;
                            if (message.bleDeviceRawData != null && message.hasOwnProperty("bleDeviceRawData"))
                                object.bleDeviceRawData = options.bytes === String ? $util.base64.encode(message.bleDeviceRawData, 0, message.bleDeviceRawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.bleDeviceRawData) : message.bleDeviceRawData;
                            if (message.bleDeviceRssi != null && message.hasOwnProperty("bleDeviceRssi")) {
                                object.bleDeviceRssi = message.bleDeviceRssi;
                                if (options.oneofs)
                                    object._bleDeviceRssi = "bleDeviceRssi";
                            }
                            if (message.apMac != null && message.hasOwnProperty("apMac"))
                                object.apMac = options.bytes === String ? $util.base64.encode(message.apMac, 0, message.apMac.length) : options.bytes === Array ? Array.prototype.slice.call(message.apMac) : message.apMac;
                            return object;
                        };

                        /**
                         * Converts this BleData to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BleData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for BleData
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.BleData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        BleData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.BleData";
                        };

                        return BleData;
                    })();

                    v1.DeviceAddress = (function() {

                        /**
                         * Properties of a DeviceAddress.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface IDeviceAddress
                         * @property {Uint8Array|null} [iotDeviceMac] DeviceAddress iotDeviceMac
                         * @property {aruba.iotops.common.v1.BLEMacAddressType|null} [bleMacType] DeviceAddress bleMacType
                         * @property {string|null} [hwId] DeviceAddress hwId
                         */

                        /**
                         * Constructs a new DeviceAddress.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a DeviceAddress.
                         * @implements IDeviceAddress
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.IDeviceAddress=} [properties] Properties to set
                         */
                        function DeviceAddress(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DeviceAddress iotDeviceMac.
                         * @member {Uint8Array} iotDeviceMac
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @instance
                         */
                        DeviceAddress.prototype.iotDeviceMac = $util.newBuffer([]);

                        /**
                         * DeviceAddress bleMacType.
                         * @member {aruba.iotops.common.v1.BLEMacAddressType} bleMacType
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @instance
                         */
                        DeviceAddress.prototype.bleMacType = 0;

                        /**
                         * DeviceAddress hwId.
                         * @member {string} hwId
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @instance
                         */
                        DeviceAddress.prototype.hwId = "";

                        /**
                         * Creates a new DeviceAddress instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IDeviceAddress=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.DeviceAddress} DeviceAddress instance
                         */
                        DeviceAddress.create = function create(properties) {
                            return new DeviceAddress(properties);
                        };

                        /**
                         * Encodes the specified DeviceAddress message. Does not implicitly {@link aruba.iotops.partner.transport.v1.DeviceAddress.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IDeviceAddress} message DeviceAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeviceAddress.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.iotDeviceMac != null && Object.hasOwnProperty.call(message, "iotDeviceMac"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.iotDeviceMac);
                            if (message.bleMacType != null && Object.hasOwnProperty.call(message, "bleMacType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bleMacType);
                            if (message.hwId != null && Object.hasOwnProperty.call(message, "hwId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.hwId);
                            return writer;
                        };

                        /**
                         * Encodes the specified DeviceAddress message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.DeviceAddress.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IDeviceAddress} message DeviceAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeviceAddress.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a DeviceAddress message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.DeviceAddress} DeviceAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeviceAddress.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.DeviceAddress();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.iotDeviceMac = reader.bytes();
                                        break;
                                    }
                                case 2: {
                                        message.bleMacType = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.hwId = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a DeviceAddress message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.DeviceAddress} DeviceAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeviceAddress.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a DeviceAddress message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeviceAddress.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.iotDeviceMac != null && message.hasOwnProperty("iotDeviceMac"))
                                if (!(message.iotDeviceMac && typeof message.iotDeviceMac.length === "number" || $util.isString(message.iotDeviceMac)))
                                    return "iotDeviceMac: buffer expected";
                            if (message.bleMacType != null && message.hasOwnProperty("bleMacType"))
                                switch (message.bleMacType) {
                                default:
                                    return "bleMacType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                if (!$util.isString(message.hwId))
                                    return "hwId: string expected";
                            return null;
                        };

                        /**
                         * Creates a DeviceAddress message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.DeviceAddress} DeviceAddress
                         */
                        DeviceAddress.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.DeviceAddress)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.DeviceAddress();
                            if (object.iotDeviceMac != null)
                                if (typeof object.iotDeviceMac === "string")
                                    $util.base64.decode(object.iotDeviceMac, message.iotDeviceMac = $util.newBuffer($util.base64.length(object.iotDeviceMac)), 0);
                                else if (object.iotDeviceMac.length >= 0)
                                    message.iotDeviceMac = object.iotDeviceMac;
                            switch (object.bleMacType) {
                            default:
                                if (typeof object.bleMacType === "number") {
                                    message.bleMacType = object.bleMacType;
                                    break;
                                }
                                break;
                            case "BLE_MAC_ADDRESS_TYPE_UNSPECIFIED":
                            case 0:
                                message.bleMacType = 0;
                                break;
                            case "BLE_MAC_ADDRESS_TYPE_PUBLIC":
                            case 1:
                                message.bleMacType = 1;
                                break;
                            case "BLE_MAC_ADDRESS_TYPE_RANDOM_STATIC":
                            case 2:
                                message.bleMacType = 2;
                                break;
                            case "BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_NON_RESOLVABLE":
                            case 3:
                                message.bleMacType = 3;
                                break;
                            case "BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_RESOLVABLE":
                            case 4:
                                message.bleMacType = 4;
                                break;
                            }
                            if (object.hwId != null)
                                message.hwId = String(object.hwId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a DeviceAddress message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.DeviceAddress} message DeviceAddress
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeviceAddress.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.iotDeviceMac = "";
                                else {
                                    object.iotDeviceMac = [];
                                    if (options.bytes !== Array)
                                        object.iotDeviceMac = $util.newBuffer(object.iotDeviceMac);
                                }
                                object.bleMacType = options.enums === String ? "BLE_MAC_ADDRESS_TYPE_UNSPECIFIED" : 0;
                                object.hwId = "";
                            }
                            if (message.iotDeviceMac != null && message.hasOwnProperty("iotDeviceMac"))
                                object.iotDeviceMac = options.bytes === String ? $util.base64.encode(message.iotDeviceMac, 0, message.iotDeviceMac.length) : options.bytes === Array ? Array.prototype.slice.call(message.iotDeviceMac) : message.iotDeviceMac;
                            if (message.bleMacType != null && message.hasOwnProperty("bleMacType"))
                                object.bleMacType = options.enums === String ? $root.aruba.iotops.common.v1.BLEMacAddressType[message.bleMacType] === undefined ? message.bleMacType : $root.aruba.iotops.common.v1.BLEMacAddressType[message.bleMacType] : message.bleMacType;
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                object.hwId = message.hwId;
                            return object;
                        };

                        /**
                         * Converts this DeviceAddress to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeviceAddress.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for DeviceAddress
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.DeviceAddress
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeviceAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.DeviceAddress";
                        };

                        return DeviceAddress;
                    })();

                    v1.BLEBeacons = (function() {

                        /**
                         * Properties of a BLEBeacons.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface IBLEBeacons
                         * @property {aruba.iotops.common.v1.IIBeacon|null} [ibeacon] BLEBeacons ibeacon
                         * @property {aruba.iotops.common.v1.IEddystone|null} [eddystone] BLEBeacons eddystone
                         */

                        /**
                         * Constructs a new BLEBeacons.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a BLEBeacons.
                         * @implements IBLEBeacons
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.IBLEBeacons=} [properties] Properties to set
                         */
                        function BLEBeacons(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BLEBeacons ibeacon.
                         * @member {aruba.iotops.common.v1.IIBeacon|null|undefined} ibeacon
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @instance
                         */
                        BLEBeacons.prototype.ibeacon = null;

                        /**
                         * BLEBeacons eddystone.
                         * @member {aruba.iotops.common.v1.IEddystone|null|undefined} eddystone
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @instance
                         */
                        BLEBeacons.prototype.eddystone = null;

                        /**
                         * Creates a new BLEBeacons instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBLEBeacons=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.BLEBeacons} BLEBeacons instance
                         */
                        BLEBeacons.create = function create(properties) {
                            return new BLEBeacons(properties);
                        };

                        /**
                         * Encodes the specified BLEBeacons message. Does not implicitly {@link aruba.iotops.partner.transport.v1.BLEBeacons.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBLEBeacons} message BLEBeacons message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BLEBeacons.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.ibeacon != null && Object.hasOwnProperty.call(message, "ibeacon"))
                                $root.aruba.iotops.common.v1.IBeacon.encode(message.ibeacon, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.eddystone != null && Object.hasOwnProperty.call(message, "eddystone"))
                                $root.aruba.iotops.common.v1.Eddystone.encode(message.eddystone, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified BLEBeacons message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.BLEBeacons.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IBLEBeacons} message BLEBeacons message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BLEBeacons.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BLEBeacons message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.BLEBeacons} BLEBeacons
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BLEBeacons.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.BLEBeacons();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.ibeacon = $root.aruba.iotops.common.v1.IBeacon.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.eddystone = $root.aruba.iotops.common.v1.Eddystone.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BLEBeacons message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.BLEBeacons} BLEBeacons
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BLEBeacons.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BLEBeacons message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BLEBeacons.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.ibeacon != null && message.hasOwnProperty("ibeacon")) {
                                var error = $root.aruba.iotops.common.v1.IBeacon.verify(message.ibeacon);
                                if (error)
                                    return "ibeacon." + error;
                            }
                            if (message.eddystone != null && message.hasOwnProperty("eddystone")) {
                                var error = $root.aruba.iotops.common.v1.Eddystone.verify(message.eddystone);
                                if (error)
                                    return "eddystone." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a BLEBeacons message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.BLEBeacons} BLEBeacons
                         */
                        BLEBeacons.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.BLEBeacons)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.BLEBeacons();
                            if (object.ibeacon != null) {
                                if (typeof object.ibeacon !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.BLEBeacons.ibeacon: object expected");
                                message.ibeacon = $root.aruba.iotops.common.v1.IBeacon.fromObject(object.ibeacon);
                            }
                            if (object.eddystone != null) {
                                if (typeof object.eddystone !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.BLEBeacons.eddystone: object expected");
                                message.eddystone = $root.aruba.iotops.common.v1.Eddystone.fromObject(object.eddystone);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a BLEBeacons message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.BLEBeacons} message BLEBeacons
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BLEBeacons.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.ibeacon = null;
                                object.eddystone = null;
                            }
                            if (message.ibeacon != null && message.hasOwnProperty("ibeacon"))
                                object.ibeacon = $root.aruba.iotops.common.v1.IBeacon.toObject(message.ibeacon, options);
                            if (message.eddystone != null && message.hasOwnProperty("eddystone"))
                                object.eddystone = $root.aruba.iotops.common.v1.Eddystone.toObject(message.eddystone, options);
                            return object;
                        };

                        /**
                         * Converts this BLEBeacons to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BLEBeacons.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for BLEBeacons
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.BLEBeacons
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        BLEBeacons.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.BLEBeacons";
                        };

                        return BLEBeacons;
                    })();

                    v1.Telemetry = (function() {

                        /**
                         * Properties of a Telemetry.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface ITelemetry
                         * @property {aruba.iotops.partner.transport.v1.Telemetry.IMetaData|null} [metaData] Telemetry metaData
                         * @property {Array.<aruba.iotops.partner.transport.v1.IBLEBeacons>|null} [beacons] Telemetry beacons
                         * @property {aruba.iotops.common.v1.ISensor|null} [sensorValue] Telemetry sensorValue
                         */

                        /**
                         * Constructs a new Telemetry.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a Telemetry.
                         * @implements ITelemetry
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.ITelemetry=} [properties] Properties to set
                         */
                        function Telemetry(properties) {
                            this.beacons = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Telemetry metaData.
                         * @member {aruba.iotops.partner.transport.v1.Telemetry.IMetaData|null|undefined} metaData
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @instance
                         */
                        Telemetry.prototype.metaData = null;

                        /**
                         * Telemetry beacons.
                         * @member {Array.<aruba.iotops.partner.transport.v1.IBLEBeacons>} beacons
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @instance
                         */
                        Telemetry.prototype.beacons = $util.emptyArray;

                        /**
                         * Telemetry sensorValue.
                         * @member {aruba.iotops.common.v1.ISensor|null|undefined} sensorValue
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @instance
                         */
                        Telemetry.prototype.sensorValue = null;

                        /**
                         * Creates a new Telemetry instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITelemetry=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.Telemetry} Telemetry instance
                         */
                        Telemetry.create = function create(properties) {
                            return new Telemetry(properties);
                        };

                        /**
                         * Encodes the specified Telemetry message. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITelemetry} message Telemetry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Telemetry.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.metaData != null && Object.hasOwnProperty.call(message, "metaData"))
                                $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.encode(message.metaData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.beacons != null && message.beacons.length)
                                for (var i = 0; i < message.beacons.length; ++i)
                                    $root.aruba.iotops.partner.transport.v1.BLEBeacons.encode(message.beacons[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.sensorValue != null && Object.hasOwnProperty.call(message, "sensorValue"))
                                $root.aruba.iotops.common.v1.Sensor.encode(message.sensorValue, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Telemetry message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ITelemetry} message Telemetry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Telemetry.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Telemetry message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.Telemetry} Telemetry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Telemetry.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.Telemetry();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.metaData = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        if (!(message.beacons && message.beacons.length))
                                            message.beacons = [];
                                        message.beacons.push($root.aruba.iotops.partner.transport.v1.BLEBeacons.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 3: {
                                        message.sensorValue = $root.aruba.iotops.common.v1.Sensor.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Telemetry message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.Telemetry} Telemetry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Telemetry.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Telemetry message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Telemetry.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.metaData != null && message.hasOwnProperty("metaData")) {
                                var error = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.verify(message.metaData);
                                if (error)
                                    return "metaData." + error;
                            }
                            if (message.beacons != null && message.hasOwnProperty("beacons")) {
                                if (!Array.isArray(message.beacons))
                                    return "beacons: array expected";
                                for (var i = 0; i < message.beacons.length; ++i) {
                                    var error = $root.aruba.iotops.partner.transport.v1.BLEBeacons.verify(message.beacons[i]);
                                    if (error)
                                        return "beacons." + error;
                                }
                            }
                            if (message.sensorValue != null && message.hasOwnProperty("sensorValue")) {
                                var error = $root.aruba.iotops.common.v1.Sensor.verify(message.sensorValue);
                                if (error)
                                    return "sensorValue." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a Telemetry message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.Telemetry} Telemetry
                         */
                        Telemetry.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.Telemetry)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.Telemetry();
                            if (object.metaData != null) {
                                if (typeof object.metaData !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.metaData: object expected");
                                message.metaData = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.fromObject(object.metaData);
                            }
                            if (object.beacons) {
                                if (!Array.isArray(object.beacons))
                                    throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.beacons: array expected");
                                message.beacons = [];
                                for (var i = 0; i < object.beacons.length; ++i) {
                                    if (typeof object.beacons[i] !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.beacons: object expected");
                                    message.beacons[i] = $root.aruba.iotops.partner.transport.v1.BLEBeacons.fromObject(object.beacons[i]);
                                }
                            }
                            if (object.sensorValue != null) {
                                if (typeof object.sensorValue !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.sensorValue: object expected");
                                message.sensorValue = $root.aruba.iotops.common.v1.Sensor.fromObject(object.sensorValue);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Telemetry message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.Telemetry} message Telemetry
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Telemetry.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.beacons = [];
                            if (options.defaults) {
                                object.metaData = null;
                                object.sensorValue = null;
                            }
                            if (message.metaData != null && message.hasOwnProperty("metaData"))
                                object.metaData = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.toObject(message.metaData, options);
                            if (message.beacons && message.beacons.length) {
                                object.beacons = [];
                                for (var j = 0; j < message.beacons.length; ++j)
                                    object.beacons[j] = $root.aruba.iotops.partner.transport.v1.BLEBeacons.toObject(message.beacons[j], options);
                            }
                            if (message.sensorValue != null && message.hasOwnProperty("sensorValue"))
                                object.sensorValue = $root.aruba.iotops.common.v1.Sensor.toObject(message.sensorValue, options);
                            return object;
                        };

                        /**
                         * Converts this Telemetry to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Telemetry.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Telemetry
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.Telemetry
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Telemetry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.Telemetry";
                        };

                        Telemetry.MetaData = (function() {

                            /**
                             * Properties of a MetaData.
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry
                             * @interface IMetaData
                             * @property {aruba.iotops.common.v1.DeviceType|null} [deviceType] MetaData deviceType
                             * @property {aruba.iotops.partner.transport.v1.IDeviceAddress|null} [iotDeviceAddress] MetaData iotDeviceAddress
                             * @property {number|null} [aggregateInterval] MetaData aggregateInterval
                             * @property {Array.<aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter>|null} [reporters] MetaData reporters
                             * @property {Object.<string,aruba.iotops.common.v1.IDeviceClassScopedData>|null} [deviceClassScope] MetaData deviceClassScope
                             */

                            /**
                             * Constructs a new MetaData.
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry
                             * @classdesc Represents a MetaData.
                             * @implements IMetaData
                             * @constructor
                             * @param {aruba.iotops.partner.transport.v1.Telemetry.IMetaData=} [properties] Properties to set
                             */
                            function MetaData(properties) {
                                this.reporters = [];
                                this.deviceClassScope = {};
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * MetaData deviceType.
                             * @member {aruba.iotops.common.v1.DeviceType} deviceType
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             */
                            MetaData.prototype.deviceType = 0;

                            /**
                             * MetaData iotDeviceAddress.
                             * @member {aruba.iotops.partner.transport.v1.IDeviceAddress|null|undefined} iotDeviceAddress
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             */
                            MetaData.prototype.iotDeviceAddress = null;

                            /**
                             * MetaData aggregateInterval.
                             * @member {number} aggregateInterval
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             */
                            MetaData.prototype.aggregateInterval = 0;

                            /**
                             * MetaData reporters.
                             * @member {Array.<aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter>} reporters
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             */
                            MetaData.prototype.reporters = $util.emptyArray;

                            /**
                             * MetaData deviceClassScope.
                             * @member {Object.<string,aruba.iotops.common.v1.IDeviceClassScopedData>} deviceClassScope
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             */
                            MetaData.prototype.deviceClassScope = $util.emptyObject;

                            /**
                             * Creates a new MetaData instance using the specified properties.
                             * @function create
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.Telemetry.IMetaData=} [properties] Properties to set
                             * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData} MetaData instance
                             */
                            MetaData.create = function create(properties) {
                                return new MetaData(properties);
                            };

                            /**
                             * Encodes the specified MetaData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.verify|verify} messages.
                             * @function encode
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.Telemetry.IMetaData} message MetaData message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MetaData.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceType);
                                if (message.iotDeviceAddress != null && Object.hasOwnProperty.call(message, "iotDeviceAddress"))
                                    $root.aruba.iotops.partner.transport.v1.DeviceAddress.encode(message.iotDeviceAddress, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.aggregateInterval != null && Object.hasOwnProperty.call(message, "aggregateInterval"))
                                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.aggregateInterval);
                                if (message.reporters != null && message.reporters.length)
                                    for (var i = 0; i < message.reporters.length; ++i)
                                        $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.encode(message.reporters[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                                if (message.deviceClassScope != null && Object.hasOwnProperty.call(message, "deviceClassScope"))
                                    for (var keys = Object.keys(message.deviceClassScope), i = 0; i < keys.length; ++i) {
                                        writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                        $root.aruba.iotops.common.v1.DeviceClassScopedData.encode(message.deviceClassScope[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                    }
                                return writer;
                            };

                            /**
                             * Encodes the specified MetaData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.Telemetry.IMetaData} message MetaData message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MetaData.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a MetaData message from the specified reader or buffer.
                             * @function decode
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData} MetaData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MetaData.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData(), key, value;
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.deviceType = reader.int32();
                                            break;
                                        }
                                    case 2: {
                                            message.iotDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.decode(reader, reader.uint32());
                                            break;
                                        }
                                    case 5: {
                                            message.aggregateInterval = reader.uint32();
                                            break;
                                        }
                                    case 6: {
                                            if (!(message.reporters && message.reporters.length))
                                                message.reporters = [];
                                            message.reporters.push($root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    case 7: {
                                            if (message.deviceClassScope === $util.emptyObject)
                                                message.deviceClassScope = {};
                                            var end2 = reader.uint32() + reader.pos;
                                            key = "";
                                            value = null;
                                            while (reader.pos < end2) {
                                                var tag2 = reader.uint32();
                                                switch (tag2 >>> 3) {
                                                case 1:
                                                    key = reader.string();
                                                    break;
                                                case 2:
                                                    value = $root.aruba.iotops.common.v1.DeviceClassScopedData.decode(reader, reader.uint32());
                                                    break;
                                                default:
                                                    reader.skipType(tag2 & 7);
                                                    break;
                                                }
                                            }
                                            message.deviceClassScope[key] = value;
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a MetaData message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData} MetaData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MetaData.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a MetaData message.
                             * @function verify
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            MetaData.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                                    switch (message.deviceType) {
                                    default:
                                        return "deviceType: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                        break;
                                    }
                                if (message.iotDeviceAddress != null && message.hasOwnProperty("iotDeviceAddress")) {
                                    var error = $root.aruba.iotops.partner.transport.v1.DeviceAddress.verify(message.iotDeviceAddress);
                                    if (error)
                                        return "iotDeviceAddress." + error;
                                }
                                if (message.aggregateInterval != null && message.hasOwnProperty("aggregateInterval"))
                                    if (!$util.isInteger(message.aggregateInterval))
                                        return "aggregateInterval: integer expected";
                                if (message.reporters != null && message.hasOwnProperty("reporters")) {
                                    if (!Array.isArray(message.reporters))
                                        return "reporters: array expected";
                                    for (var i = 0; i < message.reporters.length; ++i) {
                                        var error = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.verify(message.reporters[i]);
                                        if (error)
                                            return "reporters." + error;
                                    }
                                }
                                if (message.deviceClassScope != null && message.hasOwnProperty("deviceClassScope")) {
                                    if (!$util.isObject(message.deviceClassScope))
                                        return "deviceClassScope: object expected";
                                    var key = Object.keys(message.deviceClassScope);
                                    for (var i = 0; i < key.length; ++i) {
                                        var error = $root.aruba.iotops.common.v1.DeviceClassScopedData.verify(message.deviceClassScope[key[i]]);
                                        if (error)
                                            return "deviceClassScope." + error;
                                    }
                                }
                                return null;
                            };

                            /**
                             * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData} MetaData
                             */
                            MetaData.fromObject = function fromObject(object) {
                                if (object instanceof $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData)
                                    return object;
                                var message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData();
                                switch (object.deviceType) {
                                default:
                                    if (typeof object.deviceType === "number") {
                                        message.deviceType = object.deviceType;
                                        break;
                                    }
                                    break;
                                case "DEVICE_TYPE_UNSPECIFIED":
                                case 0:
                                    message.deviceType = 0;
                                    break;
                                case "DEVICE_TYPE_BLE":
                                case 1:
                                    message.deviceType = 1;
                                    break;
                                case "DEVICE_TYPE_ZIGBEE":
                                case 2:
                                    message.deviceType = 2;
                                    break;
                                case "DEVICE_TYPE_USB":
                                case 3:
                                    message.deviceType = 3;
                                    break;
                                case "DEVICE_TYPE_AP":
                                case 4:
                                    message.deviceType = 4;
                                    break;
                                case "DEVICE_TYPE_SECONDARY":
                                case 5:
                                    message.deviceType = 5;
                                    break;
                                case "DEVICE_TYPE_RADIO":
                                case 6:
                                    message.deviceType = 6;
                                    break;
                                }
                                if (object.iotDeviceAddress != null) {
                                    if (typeof object.iotDeviceAddress !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.iotDeviceAddress: object expected");
                                    message.iotDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.fromObject(object.iotDeviceAddress);
                                }
                                if (object.aggregateInterval != null)
                                    message.aggregateInterval = object.aggregateInterval >>> 0;
                                if (object.reporters) {
                                    if (!Array.isArray(object.reporters))
                                        throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.reporters: array expected");
                                    message.reporters = [];
                                    for (var i = 0; i < object.reporters.length; ++i) {
                                        if (typeof object.reporters[i] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.reporters: object expected");
                                        message.reporters[i] = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.fromObject(object.reporters[i]);
                                    }
                                }
                                if (object.deviceClassScope) {
                                    if (typeof object.deviceClassScope !== "object")
                                        throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.deviceClassScope: object expected");
                                    message.deviceClassScope = {};
                                    for (var keys = Object.keys(object.deviceClassScope), i = 0; i < keys.length; ++i) {
                                        if (typeof object.deviceClassScope[keys[i]] !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.deviceClassScope: object expected");
                                        message.deviceClassScope[keys[i]] = $root.aruba.iotops.common.v1.DeviceClassScopedData.fromObject(object.deviceClassScope[keys[i]]);
                                    }
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a MetaData message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData} message MetaData
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            MetaData.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.reporters = [];
                                if (options.objects || options.defaults)
                                    object.deviceClassScope = {};
                                if (options.defaults) {
                                    object.deviceType = options.enums === String ? "DEVICE_TYPE_UNSPECIFIED" : 0;
                                    object.iotDeviceAddress = null;
                                    object.aggregateInterval = 0;
                                }
                                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                                    object.deviceType = options.enums === String ? $root.aruba.iotops.common.v1.DeviceType[message.deviceType] === undefined ? message.deviceType : $root.aruba.iotops.common.v1.DeviceType[message.deviceType] : message.deviceType;
                                if (message.iotDeviceAddress != null && message.hasOwnProperty("iotDeviceAddress"))
                                    object.iotDeviceAddress = $root.aruba.iotops.partner.transport.v1.DeviceAddress.toObject(message.iotDeviceAddress, options);
                                if (message.aggregateInterval != null && message.hasOwnProperty("aggregateInterval"))
                                    object.aggregateInterval = message.aggregateInterval;
                                if (message.reporters && message.reporters.length) {
                                    object.reporters = [];
                                    for (var j = 0; j < message.reporters.length; ++j)
                                        object.reporters[j] = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.toObject(message.reporters[j], options);
                                }
                                var keys2;
                                if (message.deviceClassScope && (keys2 = Object.keys(message.deviceClassScope)).length) {
                                    object.deviceClassScope = {};
                                    for (var j = 0; j < keys2.length; ++j)
                                        object.deviceClassScope[keys2[j]] = $root.aruba.iotops.common.v1.DeviceClassScopedData.toObject(message.deviceClassScope[keys2[j]], options);
                                }
                                return object;
                            };

                            /**
                             * Converts this MetaData to JSON.
                             * @function toJSON
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            MetaData.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for MetaData
                             * @function getTypeUrl
                             * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            MetaData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.Telemetry.MetaData";
                            };

                            MetaData.Reporter = (function() {

                                /**
                                 * Properties of a Reporter.
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                                 * @interface IReporter
                                 * @property {Uint8Array|null} [apMacAddress] Reporter apMacAddress
                                 * @property {number|null} [rssiFromDevice] Reporter rssiFromDevice
                                 * @property {number|Long|null} [lastSeenAt] Reporter lastSeenAt
                                 * @property {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats|null} [deviceStats] Reporter deviceStats
                                 */

                                /**
                                 * Constructs a new Reporter.
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData
                                 * @classdesc Represents a Reporter.
                                 * @implements IReporter
                                 * @constructor
                                 * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter=} [properties] Properties to set
                                 */
                                function Reporter(properties) {
                                    if (properties)
                                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                            if (properties[keys[i]] != null)
                                                this[keys[i]] = properties[keys[i]];
                                }

                                /**
                                 * Reporter apMacAddress.
                                 * @member {Uint8Array} apMacAddress
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 */
                                Reporter.prototype.apMacAddress = $util.newBuffer([]);

                                /**
                                 * Reporter rssiFromDevice.
                                 * @member {number|null|undefined} rssiFromDevice
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 */
                                Reporter.prototype.rssiFromDevice = null;

                                /**
                                 * Reporter lastSeenAt.
                                 * @member {number|Long} lastSeenAt
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 */
                                Reporter.prototype.lastSeenAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                                /**
                                 * Reporter deviceStats.
                                 * @member {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats|null|undefined} deviceStats
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 */
                                Reporter.prototype.deviceStats = null;

                                // OneOf field names bound to virtual getters and setters
                                var $oneOfFields;

                                /**
                                 * Reporter _rssiFromDevice.
                                 * @member {"rssiFromDevice"|undefined} _rssiFromDevice
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 */
                                Object.defineProperty(Reporter.prototype, "_rssiFromDevice", {
                                    get: $util.oneOfGetter($oneOfFields = ["rssiFromDevice"]),
                                    set: $util.oneOfSetter($oneOfFields)
                                });

                                /**
                                 * Creates a new Reporter instance using the specified properties.
                                 * @function create
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter=} [properties] Properties to set
                                 * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter} Reporter instance
                                 */
                                Reporter.create = function create(properties) {
                                    return new Reporter(properties);
                                };

                                /**
                                 * Encodes the specified Reporter message. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.verify|verify} messages.
                                 * @function encode
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter} message Reporter message or plain object to encode
                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                 * @returns {$protobuf.Writer} Writer
                                 */
                                Reporter.encode = function encode(message, writer) {
                                    if (!writer)
                                        writer = $Writer.create();
                                    if (message.apMacAddress != null && Object.hasOwnProperty.call(message, "apMacAddress"))
                                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.apMacAddress);
                                    if (message.rssiFromDevice != null && Object.hasOwnProperty.call(message, "rssiFromDevice"))
                                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.rssiFromDevice);
                                    if (message.lastSeenAt != null && Object.hasOwnProperty.call(message, "lastSeenAt"))
                                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.lastSeenAt);
                                    if (message.deviceStats != null && Object.hasOwnProperty.call(message, "deviceStats"))
                                        $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.encode(message.deviceStats, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                    return writer;
                                };

                                /**
                                 * Encodes the specified Reporter message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.verify|verify} messages.
                                 * @function encodeDelimited
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.IReporter} message Reporter message or plain object to encode
                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                 * @returns {$protobuf.Writer} Writer
                                 */
                                Reporter.encodeDelimited = function encodeDelimited(message, writer) {
                                    return this.encode(message, writer).ldelim();
                                };

                                /**
                                 * Decodes a Reporter message from the specified reader or buffer.
                                 * @function decode
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                 * @param {number} [length] Message length if known beforehand
                                 * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter} Reporter
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                Reporter.decode = function decode(reader, length) {
                                    if (!(reader instanceof $Reader))
                                        reader = $Reader.create(reader);
                                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter();
                                    while (reader.pos < end) {
                                        var tag = reader.uint32();
                                        switch (tag >>> 3) {
                                        case 1: {
                                                message.apMacAddress = reader.bytes();
                                                break;
                                            }
                                        case 2: {
                                                message.rssiFromDevice = reader.sint32();
                                                break;
                                            }
                                        case 3: {
                                                message.lastSeenAt = reader.uint64();
                                                break;
                                            }
                                        case 4: {
                                                message.deviceStats = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.decode(reader, reader.uint32());
                                                break;
                                            }
                                        default:
                                            reader.skipType(tag & 7);
                                            break;
                                        }
                                    }
                                    return message;
                                };

                                /**
                                 * Decodes a Reporter message from the specified reader or buffer, length delimited.
                                 * @function decodeDelimited
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                 * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter} Reporter
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                Reporter.decodeDelimited = function decodeDelimited(reader) {
                                    if (!(reader instanceof $Reader))
                                        reader = new $Reader(reader);
                                    return this.decode(reader, reader.uint32());
                                };

                                /**
                                 * Verifies a Reporter message.
                                 * @function verify
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {Object.<string,*>} message Plain object to verify
                                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                 */
                                Reporter.verify = function verify(message) {
                                    if (typeof message !== "object" || message === null)
                                        return "object expected";
                                    var properties = {};
                                    if (message.apMacAddress != null && message.hasOwnProperty("apMacAddress"))
                                        if (!(message.apMacAddress && typeof message.apMacAddress.length === "number" || $util.isString(message.apMacAddress)))
                                            return "apMacAddress: buffer expected";
                                    if (message.rssiFromDevice != null && message.hasOwnProperty("rssiFromDevice")) {
                                        properties._rssiFromDevice = 1;
                                        if (!$util.isInteger(message.rssiFromDevice))
                                            return "rssiFromDevice: integer expected";
                                    }
                                    if (message.lastSeenAt != null && message.hasOwnProperty("lastSeenAt"))
                                        if (!$util.isInteger(message.lastSeenAt) && !(message.lastSeenAt && $util.isInteger(message.lastSeenAt.low) && $util.isInteger(message.lastSeenAt.high)))
                                            return "lastSeenAt: integer|Long expected";
                                    if (message.deviceStats != null && message.hasOwnProperty("deviceStats")) {
                                        var error = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.verify(message.deviceStats);
                                        if (error)
                                            return "deviceStats." + error;
                                    }
                                    return null;
                                };

                                /**
                                 * Creates a Reporter message from a plain object. Also converts values to their respective internal types.
                                 * @function fromObject
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {Object.<string,*>} object Plain object
                                 * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter} Reporter
                                 */
                                Reporter.fromObject = function fromObject(object) {
                                    if (object instanceof $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter)
                                        return object;
                                    var message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter();
                                    if (object.apMacAddress != null)
                                        if (typeof object.apMacAddress === "string")
                                            $util.base64.decode(object.apMacAddress, message.apMacAddress = $util.newBuffer($util.base64.length(object.apMacAddress)), 0);
                                        else if (object.apMacAddress.length >= 0)
                                            message.apMacAddress = object.apMacAddress;
                                    if (object.rssiFromDevice != null)
                                        message.rssiFromDevice = object.rssiFromDevice | 0;
                                    if (object.lastSeenAt != null)
                                        if ($util.Long)
                                            (message.lastSeenAt = $util.Long.fromValue(object.lastSeenAt)).unsigned = true;
                                        else if (typeof object.lastSeenAt === "string")
                                            message.lastSeenAt = parseInt(object.lastSeenAt, 10);
                                        else if (typeof object.lastSeenAt === "number")
                                            message.lastSeenAt = object.lastSeenAt;
                                        else if (typeof object.lastSeenAt === "object")
                                            message.lastSeenAt = new $util.LongBits(object.lastSeenAt.low >>> 0, object.lastSeenAt.high >>> 0).toNumber(true);
                                    if (object.deviceStats != null) {
                                        if (typeof object.deviceStats !== "object")
                                            throw TypeError(".aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.deviceStats: object expected");
                                        message.deviceStats = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.fromObject(object.deviceStats);
                                    }
                                    return message;
                                };

                                /**
                                 * Creates a plain object from a Reporter message. Also converts values to other types if specified.
                                 * @function toObject
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter} message Reporter
                                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                                 * @returns {Object.<string,*>} Plain object
                                 */
                                Reporter.toObject = function toObject(message, options) {
                                    if (!options)
                                        options = {};
                                    var object = {};
                                    if (options.defaults) {
                                        if (options.bytes === String)
                                            object.apMacAddress = "";
                                        else {
                                            object.apMacAddress = [];
                                            if (options.bytes !== Array)
                                                object.apMacAddress = $util.newBuffer(object.apMacAddress);
                                        }
                                        if ($util.Long) {
                                            var long = new $util.Long(0, 0, true);
                                            object.lastSeenAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                        } else
                                            object.lastSeenAt = options.longs === String ? "0" : 0;
                                        object.deviceStats = null;
                                    }
                                    if (message.apMacAddress != null && message.hasOwnProperty("apMacAddress"))
                                        object.apMacAddress = options.bytes === String ? $util.base64.encode(message.apMacAddress, 0, message.apMacAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.apMacAddress) : message.apMacAddress;
                                    if (message.rssiFromDevice != null && message.hasOwnProperty("rssiFromDevice")) {
                                        object.rssiFromDevice = message.rssiFromDevice;
                                        if (options.oneofs)
                                            object._rssiFromDevice = "rssiFromDevice";
                                    }
                                    if (message.lastSeenAt != null && message.hasOwnProperty("lastSeenAt"))
                                        if (typeof message.lastSeenAt === "number")
                                            object.lastSeenAt = options.longs === String ? String(message.lastSeenAt) : message.lastSeenAt;
                                        else
                                            object.lastSeenAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastSeenAt) : options.longs === Number ? new $util.LongBits(message.lastSeenAt.low >>> 0, message.lastSeenAt.high >>> 0).toNumber(true) : message.lastSeenAt;
                                    if (message.deviceStats != null && message.hasOwnProperty("deviceStats"))
                                        object.deviceStats = $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.toObject(message.deviceStats, options);
                                    return object;
                                };

                                /**
                                 * Converts this Reporter to JSON.
                                 * @function toJSON
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @instance
                                 * @returns {Object.<string,*>} JSON object
                                 */
                                Reporter.prototype.toJSON = function toJSON() {
                                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                };

                                /**
                                 * Gets the default type url for Reporter
                                 * @function getTypeUrl
                                 * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                 * @static
                                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns {string} The default type url
                                 */
                                Reporter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                    if (typeUrlPrefix === undefined) {
                                        typeUrlPrefix = "type.googleapis.com";
                                    }
                                    return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter";
                                };

                                Reporter.IoTDeviceStats = (function() {

                                    /**
                                     * Properties of an IoTDeviceStats.
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                     * @interface IIoTDeviceStats
                                     * @property {number|Long|null} [upTime] IoTDeviceStats upTime
                                     * @property {number|Long|null} [advCount] IoTDeviceStats advCount
                                     * @property {number|Long|null} [sequenceNumber] IoTDeviceStats sequenceNumber
                                     * @property {number|Long|null} [frameCount] IoTDeviceStats frameCount
                                     */

                                    /**
                                     * Constructs a new IoTDeviceStats.
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter
                                     * @classdesc Represents an IoTDeviceStats.
                                     * @implements IIoTDeviceStats
                                     * @constructor
                                     * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats=} [properties] Properties to set
                                     */
                                    function IoTDeviceStats(properties) {
                                        if (properties)
                                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                                if (properties[keys[i]] != null)
                                                    this[keys[i]] = properties[keys[i]];
                                    }

                                    /**
                                     * IoTDeviceStats upTime.
                                     * @member {number|Long} upTime
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @instance
                                     */
                                    IoTDeviceStats.prototype.upTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                                    /**
                                     * IoTDeviceStats advCount.
                                     * @member {number|Long} advCount
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @instance
                                     */
                                    IoTDeviceStats.prototype.advCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                                    /**
                                     * IoTDeviceStats sequenceNumber.
                                     * @member {number|Long} sequenceNumber
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @instance
                                     */
                                    IoTDeviceStats.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                                    /**
                                     * IoTDeviceStats frameCount.
                                     * @member {number|Long} frameCount
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @instance
                                     */
                                    IoTDeviceStats.prototype.frameCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                                    /**
                                     * Creates a new IoTDeviceStats instance using the specified properties.
                                     * @function create
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats=} [properties] Properties to set
                                     * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats} IoTDeviceStats instance
                                     */
                                    IoTDeviceStats.create = function create(properties) {
                                        return new IoTDeviceStats(properties);
                                    };

                                    /**
                                     * Encodes the specified IoTDeviceStats message. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.verify|verify} messages.
                                     * @function encode
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats} message IoTDeviceStats message or plain object to encode
                                     * @param {$protobuf.Writer} [writer] Writer to encode to
                                     * @returns {$protobuf.Writer} Writer
                                     */
                                    IoTDeviceStats.encode = function encode(message, writer) {
                                        if (!writer)
                                            writer = $Writer.create();
                                        if (message.upTime != null && Object.hasOwnProperty.call(message, "upTime"))
                                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.upTime);
                                        if (message.advCount != null && Object.hasOwnProperty.call(message, "advCount"))
                                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.advCount);
                                        if (message.sequenceNumber != null && Object.hasOwnProperty.call(message, "sequenceNumber"))
                                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.sequenceNumber);
                                        if (message.frameCount != null && Object.hasOwnProperty.call(message, "frameCount"))
                                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.frameCount);
                                        return writer;
                                    };

                                    /**
                                     * Encodes the specified IoTDeviceStats message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats.verify|verify} messages.
                                     * @function encodeDelimited
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IIoTDeviceStats} message IoTDeviceStats message or plain object to encode
                                     * @param {$protobuf.Writer} [writer] Writer to encode to
                                     * @returns {$protobuf.Writer} Writer
                                     */
                                    IoTDeviceStats.encodeDelimited = function encodeDelimited(message, writer) {
                                        return this.encode(message, writer).ldelim();
                                    };

                                    /**
                                     * Decodes an IoTDeviceStats message from the specified reader or buffer.
                                     * @function decode
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                     * @param {number} [length] Message length if known beforehand
                                     * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats} IoTDeviceStats
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    IoTDeviceStats.decode = function decode(reader, length) {
                                        if (!(reader instanceof $Reader))
                                            reader = $Reader.create(reader);
                                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats();
                                        while (reader.pos < end) {
                                            var tag = reader.uint32();
                                            switch (tag >>> 3) {
                                            case 1: {
                                                    message.upTime = reader.uint64();
                                                    break;
                                                }
                                            case 2: {
                                                    message.advCount = reader.uint64();
                                                    break;
                                                }
                                            case 3: {
                                                    message.sequenceNumber = reader.uint64();
                                                    break;
                                                }
                                            case 4: {
                                                    message.frameCount = reader.uint64();
                                                    break;
                                                }
                                            default:
                                                reader.skipType(tag & 7);
                                                break;
                                            }
                                        }
                                        return message;
                                    };

                                    /**
                                     * Decodes an IoTDeviceStats message from the specified reader or buffer, length delimited.
                                     * @function decodeDelimited
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                     * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats} IoTDeviceStats
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    IoTDeviceStats.decodeDelimited = function decodeDelimited(reader) {
                                        if (!(reader instanceof $Reader))
                                            reader = new $Reader(reader);
                                        return this.decode(reader, reader.uint32());
                                    };

                                    /**
                                     * Verifies an IoTDeviceStats message.
                                     * @function verify
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {Object.<string,*>} message Plain object to verify
                                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                     */
                                    IoTDeviceStats.verify = function verify(message) {
                                        if (typeof message !== "object" || message === null)
                                            return "object expected";
                                        if (message.upTime != null && message.hasOwnProperty("upTime"))
                                            if (!$util.isInteger(message.upTime) && !(message.upTime && $util.isInteger(message.upTime.low) && $util.isInteger(message.upTime.high)))
                                                return "upTime: integer|Long expected";
                                        if (message.advCount != null && message.hasOwnProperty("advCount"))
                                            if (!$util.isInteger(message.advCount) && !(message.advCount && $util.isInteger(message.advCount.low) && $util.isInteger(message.advCount.high)))
                                                return "advCount: integer|Long expected";
                                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                                            if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                                                return "sequenceNumber: integer|Long expected";
                                        if (message.frameCount != null && message.hasOwnProperty("frameCount"))
                                            if (!$util.isInteger(message.frameCount) && !(message.frameCount && $util.isInteger(message.frameCount.low) && $util.isInteger(message.frameCount.high)))
                                                return "frameCount: integer|Long expected";
                                        return null;
                                    };

                                    /**
                                     * Creates an IoTDeviceStats message from a plain object. Also converts values to their respective internal types.
                                     * @function fromObject
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {Object.<string,*>} object Plain object
                                     * @returns {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats} IoTDeviceStats
                                     */
                                    IoTDeviceStats.fromObject = function fromObject(object) {
                                        if (object instanceof $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats)
                                            return object;
                                        var message = new $root.aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats();
                                        if (object.upTime != null)
                                            if ($util.Long)
                                                (message.upTime = $util.Long.fromValue(object.upTime)).unsigned = true;
                                            else if (typeof object.upTime === "string")
                                                message.upTime = parseInt(object.upTime, 10);
                                            else if (typeof object.upTime === "number")
                                                message.upTime = object.upTime;
                                            else if (typeof object.upTime === "object")
                                                message.upTime = new $util.LongBits(object.upTime.low >>> 0, object.upTime.high >>> 0).toNumber(true);
                                        if (object.advCount != null)
                                            if ($util.Long)
                                                (message.advCount = $util.Long.fromValue(object.advCount)).unsigned = true;
                                            else if (typeof object.advCount === "string")
                                                message.advCount = parseInt(object.advCount, 10);
                                            else if (typeof object.advCount === "number")
                                                message.advCount = object.advCount;
                                            else if (typeof object.advCount === "object")
                                                message.advCount = new $util.LongBits(object.advCount.low >>> 0, object.advCount.high >>> 0).toNumber(true);
                                        if (object.sequenceNumber != null)
                                            if ($util.Long)
                                                (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = true;
                                            else if (typeof object.sequenceNumber === "string")
                                                message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                                            else if (typeof object.sequenceNumber === "number")
                                                message.sequenceNumber = object.sequenceNumber;
                                            else if (typeof object.sequenceNumber === "object")
                                                message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber(true);
                                        if (object.frameCount != null)
                                            if ($util.Long)
                                                (message.frameCount = $util.Long.fromValue(object.frameCount)).unsigned = true;
                                            else if (typeof object.frameCount === "string")
                                                message.frameCount = parseInt(object.frameCount, 10);
                                            else if (typeof object.frameCount === "number")
                                                message.frameCount = object.frameCount;
                                            else if (typeof object.frameCount === "object")
                                                message.frameCount = new $util.LongBits(object.frameCount.low >>> 0, object.frameCount.high >>> 0).toNumber(true);
                                        return message;
                                    };

                                    /**
                                     * Creates a plain object from an IoTDeviceStats message. Also converts values to other types if specified.
                                     * @function toObject
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats} message IoTDeviceStats
                                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                                     * @returns {Object.<string,*>} Plain object
                                     */
                                    IoTDeviceStats.toObject = function toObject(message, options) {
                                        if (!options)
                                            options = {};
                                        var object = {};
                                        if (options.defaults) {
                                            if ($util.Long) {
                                                var long = new $util.Long(0, 0, true);
                                                object.upTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                            } else
                                                object.upTime = options.longs === String ? "0" : 0;
                                            if ($util.Long) {
                                                var long = new $util.Long(0, 0, true);
                                                object.advCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                            } else
                                                object.advCount = options.longs === String ? "0" : 0;
                                            if ($util.Long) {
                                                var long = new $util.Long(0, 0, true);
                                                object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                            } else
                                                object.sequenceNumber = options.longs === String ? "0" : 0;
                                            if ($util.Long) {
                                                var long = new $util.Long(0, 0, true);
                                                object.frameCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                            } else
                                                object.frameCount = options.longs === String ? "0" : 0;
                                        }
                                        if (message.upTime != null && message.hasOwnProperty("upTime"))
                                            if (typeof message.upTime === "number")
                                                object.upTime = options.longs === String ? String(message.upTime) : message.upTime;
                                            else
                                                object.upTime = options.longs === String ? $util.Long.prototype.toString.call(message.upTime) : options.longs === Number ? new $util.LongBits(message.upTime.low >>> 0, message.upTime.high >>> 0).toNumber(true) : message.upTime;
                                        if (message.advCount != null && message.hasOwnProperty("advCount"))
                                            if (typeof message.advCount === "number")
                                                object.advCount = options.longs === String ? String(message.advCount) : message.advCount;
                                            else
                                                object.advCount = options.longs === String ? $util.Long.prototype.toString.call(message.advCount) : options.longs === Number ? new $util.LongBits(message.advCount.low >>> 0, message.advCount.high >>> 0).toNumber(true) : message.advCount;
                                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                                            if (typeof message.sequenceNumber === "number")
                                                object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                                            else
                                                object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber(true) : message.sequenceNumber;
                                        if (message.frameCount != null && message.hasOwnProperty("frameCount"))
                                            if (typeof message.frameCount === "number")
                                                object.frameCount = options.longs === String ? String(message.frameCount) : message.frameCount;
                                            else
                                                object.frameCount = options.longs === String ? $util.Long.prototype.toString.call(message.frameCount) : options.longs === Number ? new $util.LongBits(message.frameCount.low >>> 0, message.frameCount.high >>> 0).toNumber(true) : message.frameCount;
                                        return object;
                                    };

                                    /**
                                     * Converts this IoTDeviceStats to JSON.
                                     * @function toJSON
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @instance
                                     * @returns {Object.<string,*>} JSON object
                                     */
                                    IoTDeviceStats.prototype.toJSON = function toJSON() {
                                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                    };

                                    /**
                                     * Gets the default type url for IoTDeviceStats
                                     * @function getTypeUrl
                                     * @memberof aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats
                                     * @static
                                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns {string} The default type url
                                     */
                                    IoTDeviceStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                        if (typeUrlPrefix === undefined) {
                                            typeUrlPrefix = "type.googleapis.com";
                                        }
                                        return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.Telemetry.MetaData.Reporter.IoTDeviceStats";
                                    };

                                    return IoTDeviceStats;
                                })();

                                return Reporter;
                            })();

                            return MetaData;
                        })();

                        return Telemetry;
                    })();

                    v1.USBAddress = (function() {

                        /**
                         * Properties of a USBAddress.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface IUSBAddress
                         * @property {string|null} [hwId] USBAddress hwId
                         * @property {number|null} [interfaceNum] USBAddress interfaceNum
                         */

                        /**
                         * Constructs a new USBAddress.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a USBAddress.
                         * @implements IUSBAddress
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.IUSBAddress=} [properties] Properties to set
                         */
                        function USBAddress(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * USBAddress hwId.
                         * @member {string} hwId
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @instance
                         */
                        USBAddress.prototype.hwId = "";

                        /**
                         * USBAddress interfaceNum.
                         * @member {number} interfaceNum
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @instance
                         */
                        USBAddress.prototype.interfaceNum = 0;

                        /**
                         * Creates a new USBAddress instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IUSBAddress=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.USBAddress} USBAddress instance
                         */
                        USBAddress.create = function create(properties) {
                            return new USBAddress(properties);
                        };

                        /**
                         * Encodes the specified USBAddress message. Does not implicitly {@link aruba.iotops.partner.transport.v1.USBAddress.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IUSBAddress} message USBAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        USBAddress.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.hwId != null && Object.hasOwnProperty.call(message, "hwId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hwId);
                            if (message.interfaceNum != null && Object.hasOwnProperty.call(message, "interfaceNum"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.interfaceNum);
                            return writer;
                        };

                        /**
                         * Encodes the specified USBAddress message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.USBAddress.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.IUSBAddress} message USBAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        USBAddress.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a USBAddress message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.USBAddress} USBAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        USBAddress.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.USBAddress();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.hwId = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.interfaceNum = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a USBAddress message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.USBAddress} USBAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        USBAddress.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a USBAddress message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        USBAddress.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                if (!$util.isString(message.hwId))
                                    return "hwId: string expected";
                            if (message.interfaceNum != null && message.hasOwnProperty("interfaceNum"))
                                if (!$util.isInteger(message.interfaceNum))
                                    return "interfaceNum: integer expected";
                            return null;
                        };

                        /**
                         * Creates a USBAddress message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.USBAddress} USBAddress
                         */
                        USBAddress.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.USBAddress)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.USBAddress();
                            if (object.hwId != null)
                                message.hwId = String(object.hwId);
                            if (object.interfaceNum != null)
                                message.interfaceNum = object.interfaceNum >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a USBAddress message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.USBAddress} message USBAddress
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        USBAddress.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.hwId = "";
                                object.interfaceNum = 0;
                            }
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                object.hwId = message.hwId;
                            if (message.interfaceNum != null && message.hasOwnProperty("interfaceNum"))
                                object.interfaceNum = message.interfaceNum;
                            return object;
                        };

                        /**
                         * Converts this USBAddress to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        USBAddress.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for USBAddress
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.USBAddress
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        USBAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.USBAddress";
                        };

                        return USBAddress;
                    })();

                    v1.SerialNBUSBData = (function() {

                        /**
                         * Properties of a SerialNBUSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface ISerialNBUSBData
                         * @property {aruba.iotops.partner.transport.v1.IUSBAddress|null} [usbAddress] SerialNBUSBData usbAddress
                         * @property {Uint8Array|null} [payload] SerialNBUSBData payload
                         */

                        /**
                         * Constructs a new SerialNBUSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a SerialNBUSBData.
                         * @implements ISerialNBUSBData
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.ISerialNBUSBData=} [properties] Properties to set
                         */
                        function SerialNBUSBData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * SerialNBUSBData usbAddress.
                         * @member {aruba.iotops.partner.transport.v1.IUSBAddress|null|undefined} usbAddress
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @instance
                         */
                        SerialNBUSBData.prototype.usbAddress = null;

                        /**
                         * SerialNBUSBData payload.
                         * @member {Uint8Array} payload
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @instance
                         */
                        SerialNBUSBData.prototype.payload = $util.newBuffer([]);

                        /**
                         * Creates a new SerialNBUSBData instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialNBUSBData=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.SerialNBUSBData} SerialNBUSBData instance
                         */
                        SerialNBUSBData.create = function create(properties) {
                            return new SerialNBUSBData(properties);
                        };

                        /**
                         * Encodes the specified SerialNBUSBData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.SerialNBUSBData.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialNBUSBData} message SerialNBUSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SerialNBUSBData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.usbAddress != null && Object.hasOwnProperty.call(message, "usbAddress"))
                                $root.aruba.iotops.partner.transport.v1.USBAddress.encode(message.usbAddress, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                            return writer;
                        };

                        /**
                         * Encodes the specified SerialNBUSBData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.SerialNBUSBData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialNBUSBData} message SerialNBUSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SerialNBUSBData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a SerialNBUSBData message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.SerialNBUSBData} SerialNBUSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SerialNBUSBData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.SerialNBUSBData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.payload = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a SerialNBUSBData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.SerialNBUSBData} SerialNBUSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SerialNBUSBData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a SerialNBUSBData message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SerialNBUSBData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.usbAddress != null && message.hasOwnProperty("usbAddress")) {
                                var error = $root.aruba.iotops.partner.transport.v1.USBAddress.verify(message.usbAddress);
                                if (error)
                                    return "usbAddress." + error;
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                                    return "payload: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a SerialNBUSBData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.SerialNBUSBData} SerialNBUSBData
                         */
                        SerialNBUSBData.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.SerialNBUSBData)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.SerialNBUSBData();
                            if (object.usbAddress != null) {
                                if (typeof object.usbAddress !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.SerialNBUSBData.usbAddress: object expected");
                                message.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.fromObject(object.usbAddress);
                            }
                            if (object.payload != null)
                                if (typeof object.payload === "string")
                                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                                else if (object.payload.length >= 0)
                                    message.payload = object.payload;
                            return message;
                        };

                        /**
                         * Creates a plain object from a SerialNBUSBData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.SerialNBUSBData} message SerialNBUSBData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SerialNBUSBData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.usbAddress = null;
                                if (options.bytes === String)
                                    object.payload = "";
                                else {
                                    object.payload = [];
                                    if (options.bytes !== Array)
                                        object.payload = $util.newBuffer(object.payload);
                                }
                            }
                            if (message.usbAddress != null && message.hasOwnProperty("usbAddress"))
                                object.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.toObject(message.usbAddress, options);
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                            return object;
                        };

                        /**
                         * Converts this SerialNBUSBData to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SerialNBUSBData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for SerialNBUSBData
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.SerialNBUSBData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SerialNBUSBData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.SerialNBUSBData";
                        };

                        return SerialNBUSBData;
                    })();

                    v1.SerialSBUSBData = (function() {

                        /**
                         * Properties of a SerialSBUSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @interface ISerialSBUSBData
                         * @property {aruba.iotops.partner.transport.v1.IUSBAddress|null} [usbAddress] SerialSBUSBData usbAddress
                         * @property {Uint8Array|null} [payload] SerialSBUSBData payload
                         */

                        /**
                         * Constructs a new SerialSBUSBData.
                         * @memberof aruba.iotops.partner.transport.v1
                         * @classdesc Represents a SerialSBUSBData.
                         * @implements ISerialSBUSBData
                         * @constructor
                         * @param {aruba.iotops.partner.transport.v1.ISerialSBUSBData=} [properties] Properties to set
                         */
                        function SerialSBUSBData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * SerialSBUSBData usbAddress.
                         * @member {aruba.iotops.partner.transport.v1.IUSBAddress|null|undefined} usbAddress
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @instance
                         */
                        SerialSBUSBData.prototype.usbAddress = null;

                        /**
                         * SerialSBUSBData payload.
                         * @member {Uint8Array} payload
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @instance
                         */
                        SerialSBUSBData.prototype.payload = $util.newBuffer([]);

                        /**
                         * Creates a new SerialSBUSBData instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialSBUSBData=} [properties] Properties to set
                         * @returns {aruba.iotops.partner.transport.v1.SerialSBUSBData} SerialSBUSBData instance
                         */
                        SerialSBUSBData.create = function create(properties) {
                            return new SerialSBUSBData(properties);
                        };

                        /**
                         * Encodes the specified SerialSBUSBData message. Does not implicitly {@link aruba.iotops.partner.transport.v1.SerialSBUSBData.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialSBUSBData} message SerialSBUSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SerialSBUSBData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.usbAddress != null && Object.hasOwnProperty.call(message, "usbAddress"))
                                $root.aruba.iotops.partner.transport.v1.USBAddress.encode(message.usbAddress, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                            return writer;
                        };

                        /**
                         * Encodes the specified SerialSBUSBData message, length delimited. Does not implicitly {@link aruba.iotops.partner.transport.v1.SerialSBUSBData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.ISerialSBUSBData} message SerialSBUSBData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SerialSBUSBData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a SerialSBUSBData message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.partner.transport.v1.SerialSBUSBData} SerialSBUSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SerialSBUSBData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.partner.transport.v1.SerialSBUSBData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.payload = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a SerialSBUSBData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.partner.transport.v1.SerialSBUSBData} SerialSBUSBData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SerialSBUSBData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a SerialSBUSBData message.
                         * @function verify
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SerialSBUSBData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.usbAddress != null && message.hasOwnProperty("usbAddress")) {
                                var error = $root.aruba.iotops.partner.transport.v1.USBAddress.verify(message.usbAddress);
                                if (error)
                                    return "usbAddress." + error;
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                                    return "payload: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a SerialSBUSBData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.partner.transport.v1.SerialSBUSBData} SerialSBUSBData
                         */
                        SerialSBUSBData.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.partner.transport.v1.SerialSBUSBData)
                                return object;
                            var message = new $root.aruba.iotops.partner.transport.v1.SerialSBUSBData();
                            if (object.usbAddress != null) {
                                if (typeof object.usbAddress !== "object")
                                    throw TypeError(".aruba.iotops.partner.transport.v1.SerialSBUSBData.usbAddress: object expected");
                                message.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.fromObject(object.usbAddress);
                            }
                            if (object.payload != null)
                                if (typeof object.payload === "string")
                                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                                else if (object.payload.length >= 0)
                                    message.payload = object.payload;
                            return message;
                        };

                        /**
                         * Creates a plain object from a SerialSBUSBData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {aruba.iotops.partner.transport.v1.SerialSBUSBData} message SerialSBUSBData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SerialSBUSBData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.usbAddress = null;
                                if (options.bytes === String)
                                    object.payload = "";
                                else {
                                    object.payload = [];
                                    if (options.bytes !== Array)
                                        object.payload = $util.newBuffer(object.payload);
                                }
                            }
                            if (message.usbAddress != null && message.hasOwnProperty("usbAddress"))
                                object.usbAddress = $root.aruba.iotops.partner.transport.v1.USBAddress.toObject(message.usbAddress, options);
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                            return object;
                        };

                        /**
                         * Converts this SerialSBUSBData to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SerialSBUSBData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for SerialSBUSBData
                         * @function getTypeUrl
                         * @memberof aruba.iotops.partner.transport.v1.SerialSBUSBData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SerialSBUSBData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.partner.transport.v1.SerialSBUSBData";
                        };

                        return SerialSBUSBData;
                    })();

                    return v1;
                })();

                return transport;
            })();

            return partner;
        })();

        iotops.common = (function() {

            /**
             * Namespace common.
             * @memberof aruba.iotops
             * @namespace
             */
            var common = {};

            common.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof aruba.iotops.common
                 * @namespace
                 */
                var v1 = {};

                v1.Location = (function() {

                    /**
                     * Properties of a Location.
                     * @memberof aruba.iotops.common.v1
                     * @interface ILocation
                     * @property {number|null} [latitude] Location latitude
                     * @property {number|null} [latitudeUncertainty] Location latitudeUncertainty
                     * @property {number|null} [longitude] Location longitude
                     * @property {number|null} [longitudeUncertainty] Location longitudeUncertainty
                     * @property {number|null} [unitsPerMeter] Location unitsPerMeter
                     * @property {number|null} [x] Location x
                     * @property {number|null} [y] Location y
                     * @property {string|null} [floorId] Location floorId
                     * @property {number|null} [floorNumber] Location floorNumber
                     * @property {number|null} [elevation] Location elevation
                     * @property {number|null} [elevationUncertainty] Location elevationUncertainty
                     */

                    /**
                     * Constructs a new Location.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {aruba.iotops.common.v1.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Location latitude.
                     * @member {number|null|undefined} latitude
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.latitude = null;

                    /**
                     * Location latitudeUncertainty.
                     * @member {number|null|undefined} latitudeUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.latitudeUncertainty = null;

                    /**
                     * Location longitude.
                     * @member {number|null|undefined} longitude
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.longitude = null;

                    /**
                     * Location longitudeUncertainty.
                     * @member {number|null|undefined} longitudeUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.longitudeUncertainty = null;

                    /**
                     * Location unitsPerMeter.
                     * @member {number|null|undefined} unitsPerMeter
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.unitsPerMeter = null;

                    /**
                     * Location x.
                     * @member {number|null|undefined} x
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.x = null;

                    /**
                     * Location y.
                     * @member {number|null|undefined} y
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.y = null;

                    /**
                     * Location floorId.
                     * @member {string|null|undefined} floorId
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.floorId = null;

                    /**
                     * Location floorNumber.
                     * @member {number|null|undefined} floorNumber
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.floorNumber = null;

                    /**
                     * Location elevation.
                     * @member {number|null|undefined} elevation
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.elevation = null;

                    /**
                     * Location elevationUncertainty.
                     * @member {number|null|undefined} elevationUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Location.prototype.elevationUncertainty = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Location _latitude.
                     * @member {"latitude"|undefined} _latitude
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_latitude", {
                        get: $util.oneOfGetter($oneOfFields = ["latitude"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _latitudeUncertainty.
                     * @member {"latitudeUncertainty"|undefined} _latitudeUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_latitudeUncertainty", {
                        get: $util.oneOfGetter($oneOfFields = ["latitudeUncertainty"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _longitude.
                     * @member {"longitude"|undefined} _longitude
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_longitude", {
                        get: $util.oneOfGetter($oneOfFields = ["longitude"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _longitudeUncertainty.
                     * @member {"longitudeUncertainty"|undefined} _longitudeUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_longitudeUncertainty", {
                        get: $util.oneOfGetter($oneOfFields = ["longitudeUncertainty"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _unitsPerMeter.
                     * @member {"unitsPerMeter"|undefined} _unitsPerMeter
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_unitsPerMeter", {
                        get: $util.oneOfGetter($oneOfFields = ["unitsPerMeter"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _x.
                     * @member {"x"|undefined} _x
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_x", {
                        get: $util.oneOfGetter($oneOfFields = ["x"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _y.
                     * @member {"y"|undefined} _y
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_y", {
                        get: $util.oneOfGetter($oneOfFields = ["y"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _floorId.
                     * @member {"floorId"|undefined} _floorId
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_floorId", {
                        get: $util.oneOfGetter($oneOfFields = ["floorId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _floorNumber.
                     * @member {"floorNumber"|undefined} _floorNumber
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_floorNumber", {
                        get: $util.oneOfGetter($oneOfFields = ["floorNumber"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _elevation.
                     * @member {"elevation"|undefined} _elevation
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_elevation", {
                        get: $util.oneOfGetter($oneOfFields = ["elevation"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Location _elevationUncertainty.
                     * @member {"elevationUncertainty"|undefined} _elevationUncertainty
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     */
                    Object.defineProperty(Location.prototype, "_elevationUncertainty", {
                        get: $util.oneOfGetter($oneOfFields = ["elevationUncertainty"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {aruba.iotops.common.v1.ILocation=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };

                    /**
                     * Encodes the specified Location message. Does not implicitly {@link aruba.iotops.common.v1.Location.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {aruba.iotops.common.v1.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                            writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                        if (message.latitudeUncertainty != null && Object.hasOwnProperty.call(message, "latitudeUncertainty"))
                            writer.uint32(/* id 2, wireType 1 =*/17).double(message.latitudeUncertainty);
                        if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                            writer.uint32(/* id 3, wireType 1 =*/25).double(message.longitude);
                        if (message.longitudeUncertainty != null && Object.hasOwnProperty.call(message, "longitudeUncertainty"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.longitudeUncertainty);
                        if (message.unitsPerMeter != null && Object.hasOwnProperty.call(message, "unitsPerMeter"))
                            writer.uint32(/* id 5, wireType 5 =*/45).float(message.unitsPerMeter);
                        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                            writer.uint32(/* id 6, wireType 5 =*/53).float(message.x);
                        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                            writer.uint32(/* id 7, wireType 5 =*/61).float(message.y);
                        if (message.floorId != null && Object.hasOwnProperty.call(message, "floorId"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.floorId);
                        if (message.floorNumber != null && Object.hasOwnProperty.call(message, "floorNumber"))
                            writer.uint32(/* id 9, wireType 5 =*/77).float(message.floorNumber);
                        if (message.elevation != null && Object.hasOwnProperty.call(message, "elevation"))
                            writer.uint32(/* id 10, wireType 1 =*/81).double(message.elevation);
                        if (message.elevationUncertainty != null && Object.hasOwnProperty.call(message, "elevationUncertainty"))
                            writer.uint32(/* id 11, wireType 1 =*/89).double(message.elevationUncertainty);
                        return writer;
                    };

                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {aruba.iotops.common.v1.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.latitude = reader.double();
                                    break;
                                }
                            case 2: {
                                    message.latitudeUncertainty = reader.double();
                                    break;
                                }
                            case 3: {
                                    message.longitude = reader.double();
                                    break;
                                }
                            case 4: {
                                    message.longitudeUncertainty = reader.double();
                                    break;
                                }
                            case 5: {
                                    message.unitsPerMeter = reader.float();
                                    break;
                                }
                            case 6: {
                                    message.x = reader.float();
                                    break;
                                }
                            case 7: {
                                    message.y = reader.float();
                                    break;
                                }
                            case 8: {
                                    message.floorId = reader.string();
                                    break;
                                }
                            case 9: {
                                    message.floorNumber = reader.float();
                                    break;
                                }
                            case 10: {
                                    message.elevation = reader.double();
                                    break;
                                }
                            case 11: {
                                    message.elevationUncertainty = reader.double();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.latitude != null && message.hasOwnProperty("latitude")) {
                            properties._latitude = 1;
                            if (typeof message.latitude !== "number")
                                return "latitude: number expected";
                        }
                        if (message.latitudeUncertainty != null && message.hasOwnProperty("latitudeUncertainty")) {
                            properties._latitudeUncertainty = 1;
                            if (typeof message.latitudeUncertainty !== "number")
                                return "latitudeUncertainty: number expected";
                        }
                        if (message.longitude != null && message.hasOwnProperty("longitude")) {
                            properties._longitude = 1;
                            if (typeof message.longitude !== "number")
                                return "longitude: number expected";
                        }
                        if (message.longitudeUncertainty != null && message.hasOwnProperty("longitudeUncertainty")) {
                            properties._longitudeUncertainty = 1;
                            if (typeof message.longitudeUncertainty !== "number")
                                return "longitudeUncertainty: number expected";
                        }
                        if (message.unitsPerMeter != null && message.hasOwnProperty("unitsPerMeter")) {
                            properties._unitsPerMeter = 1;
                            if (typeof message.unitsPerMeter !== "number")
                                return "unitsPerMeter: number expected";
                        }
                        if (message.x != null && message.hasOwnProperty("x")) {
                            properties._x = 1;
                            if (typeof message.x !== "number")
                                return "x: number expected";
                        }
                        if (message.y != null && message.hasOwnProperty("y")) {
                            properties._y = 1;
                            if (typeof message.y !== "number")
                                return "y: number expected";
                        }
                        if (message.floorId != null && message.hasOwnProperty("floorId")) {
                            properties._floorId = 1;
                            if (!$util.isString(message.floorId))
                                return "floorId: string expected";
                        }
                        if (message.floorNumber != null && message.hasOwnProperty("floorNumber")) {
                            properties._floorNumber = 1;
                            if (typeof message.floorNumber !== "number")
                                return "floorNumber: number expected";
                        }
                        if (message.elevation != null && message.hasOwnProperty("elevation")) {
                            properties._elevation = 1;
                            if (typeof message.elevation !== "number")
                                return "elevation: number expected";
                        }
                        if (message.elevationUncertainty != null && message.hasOwnProperty("elevationUncertainty")) {
                            properties._elevationUncertainty = 1;
                            if (typeof message.elevationUncertainty !== "number")
                                return "elevationUncertainty: number expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.Location)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.Location();
                        if (object.latitude != null)
                            message.latitude = Number(object.latitude);
                        if (object.latitudeUncertainty != null)
                            message.latitudeUncertainty = Number(object.latitudeUncertainty);
                        if (object.longitude != null)
                            message.longitude = Number(object.longitude);
                        if (object.longitudeUncertainty != null)
                            message.longitudeUncertainty = Number(object.longitudeUncertainty);
                        if (object.unitsPerMeter != null)
                            message.unitsPerMeter = Number(object.unitsPerMeter);
                        if (object.x != null)
                            message.x = Number(object.x);
                        if (object.y != null)
                            message.y = Number(object.y);
                        if (object.floorId != null)
                            message.floorId = String(object.floorId);
                        if (object.floorNumber != null)
                            message.floorNumber = Number(object.floorNumber);
                        if (object.elevation != null)
                            message.elevation = Number(object.elevation);
                        if (object.elevationUncertainty != null)
                            message.elevationUncertainty = Number(object.elevationUncertainty);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {aruba.iotops.common.v1.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.latitude != null && message.hasOwnProperty("latitude")) {
                            object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                            if (options.oneofs)
                                object._latitude = "latitude";
                        }
                        if (message.latitudeUncertainty != null && message.hasOwnProperty("latitudeUncertainty")) {
                            object.latitudeUncertainty = options.json && !isFinite(message.latitudeUncertainty) ? String(message.latitudeUncertainty) : message.latitudeUncertainty;
                            if (options.oneofs)
                                object._latitudeUncertainty = "latitudeUncertainty";
                        }
                        if (message.longitude != null && message.hasOwnProperty("longitude")) {
                            object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                            if (options.oneofs)
                                object._longitude = "longitude";
                        }
                        if (message.longitudeUncertainty != null && message.hasOwnProperty("longitudeUncertainty")) {
                            object.longitudeUncertainty = options.json && !isFinite(message.longitudeUncertainty) ? String(message.longitudeUncertainty) : message.longitudeUncertainty;
                            if (options.oneofs)
                                object._longitudeUncertainty = "longitudeUncertainty";
                        }
                        if (message.unitsPerMeter != null && message.hasOwnProperty("unitsPerMeter")) {
                            object.unitsPerMeter = options.json && !isFinite(message.unitsPerMeter) ? String(message.unitsPerMeter) : message.unitsPerMeter;
                            if (options.oneofs)
                                object._unitsPerMeter = "unitsPerMeter";
                        }
                        if (message.x != null && message.hasOwnProperty("x")) {
                            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                            if (options.oneofs)
                                object._x = "x";
                        }
                        if (message.y != null && message.hasOwnProperty("y")) {
                            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                            if (options.oneofs)
                                object._y = "y";
                        }
                        if (message.floorId != null && message.hasOwnProperty("floorId")) {
                            object.floorId = message.floorId;
                            if (options.oneofs)
                                object._floorId = "floorId";
                        }
                        if (message.floorNumber != null && message.hasOwnProperty("floorNumber")) {
                            object.floorNumber = options.json && !isFinite(message.floorNumber) ? String(message.floorNumber) : message.floorNumber;
                            if (options.oneofs)
                                object._floorNumber = "floorNumber";
                        }
                        if (message.elevation != null && message.hasOwnProperty("elevation")) {
                            object.elevation = options.json && !isFinite(message.elevation) ? String(message.elevation) : message.elevation;
                            if (options.oneofs)
                                object._elevation = "elevation";
                        }
                        if (message.elevationUncertainty != null && message.hasOwnProperty("elevationUncertainty")) {
                            object.elevationUncertainty = options.json && !isFinite(message.elevationUncertainty) ? String(message.elevationUncertainty) : message.elevationUncertainty;
                            if (options.oneofs)
                                object._elevationUncertainty = "elevationUncertainty";
                        }
                        return object;
                    };

                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.Location";
                    };

                    return Location;
                })();

                v1.DeviceLocation = (function() {

                    /**
                     * Properties of a DeviceLocation.
                     * @memberof aruba.iotops.common.v1
                     * @interface IDeviceLocation
                     * @property {Array.<aruba.iotops.common.v1.DeviceLocation.IDevice>|null} [devices] DeviceLocation devices
                     */

                    /**
                     * Constructs a new DeviceLocation.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a DeviceLocation.
                     * @implements IDeviceLocation
                     * @constructor
                     * @param {aruba.iotops.common.v1.IDeviceLocation=} [properties] Properties to set
                     */
                    function DeviceLocation(properties) {
                        this.devices = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeviceLocation devices.
                     * @member {Array.<aruba.iotops.common.v1.DeviceLocation.IDevice>} devices
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @instance
                     */
                    DeviceLocation.prototype.devices = $util.emptyArray;

                    /**
                     * Creates a new DeviceLocation instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceLocation=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.DeviceLocation} DeviceLocation instance
                     */
                    DeviceLocation.create = function create(properties) {
                        return new DeviceLocation(properties);
                    };

                    /**
                     * Encodes the specified DeviceLocation message. Does not implicitly {@link aruba.iotops.common.v1.DeviceLocation.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceLocation} message DeviceLocation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeviceLocation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.devices != null && message.devices.length)
                            for (var i = 0; i < message.devices.length; ++i)
                                $root.aruba.iotops.common.v1.DeviceLocation.Device.encode(message.devices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeviceLocation message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.DeviceLocation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceLocation} message DeviceLocation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeviceLocation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeviceLocation message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.DeviceLocation} DeviceLocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeviceLocation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.DeviceLocation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.devices && message.devices.length))
                                        message.devices = [];
                                    message.devices.push($root.aruba.iotops.common.v1.DeviceLocation.Device.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeviceLocation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.DeviceLocation} DeviceLocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeviceLocation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeviceLocation message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeviceLocation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.devices != null && message.hasOwnProperty("devices")) {
                            if (!Array.isArray(message.devices))
                                return "devices: array expected";
                            for (var i = 0; i < message.devices.length; ++i) {
                                var error = $root.aruba.iotops.common.v1.DeviceLocation.Device.verify(message.devices[i]);
                                if (error)
                                    return "devices." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DeviceLocation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.DeviceLocation} DeviceLocation
                     */
                    DeviceLocation.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.DeviceLocation)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.DeviceLocation();
                        if (object.devices) {
                            if (!Array.isArray(object.devices))
                                throw TypeError(".aruba.iotops.common.v1.DeviceLocation.devices: array expected");
                            message.devices = [];
                            for (var i = 0; i < object.devices.length; ++i) {
                                if (typeof object.devices[i] !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.DeviceLocation.devices: object expected");
                                message.devices[i] = $root.aruba.iotops.common.v1.DeviceLocation.Device.fromObject(object.devices[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeviceLocation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {aruba.iotops.common.v1.DeviceLocation} message DeviceLocation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeviceLocation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.devices = [];
                        if (message.devices && message.devices.length) {
                            object.devices = [];
                            for (var j = 0; j < message.devices.length; ++j)
                                object.devices[j] = $root.aruba.iotops.common.v1.DeviceLocation.Device.toObject(message.devices[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DeviceLocation to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeviceLocation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for DeviceLocation
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.DeviceLocation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    DeviceLocation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.DeviceLocation";
                    };

                    DeviceLocation.Device = (function() {

                        /**
                         * Properties of a Device.
                         * @memberof aruba.iotops.common.v1.DeviceLocation
                         * @interface IDevice
                         * @property {string|null} [uuid] Device uuid
                         * @property {string|null} [hwId] Device hwId
                         * @property {aruba.iotops.common.v1.ILocation|null} [location] Device location
                         * @property {number|Long|null} [calculatedTimestamp] Device calculatedTimestamp
                         */

                        /**
                         * Constructs a new Device.
                         * @memberof aruba.iotops.common.v1.DeviceLocation
                         * @classdesc Represents a Device.
                         * @implements IDevice
                         * @constructor
                         * @param {aruba.iotops.common.v1.DeviceLocation.IDevice=} [properties] Properties to set
                         */
                        function Device(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Device uuid.
                         * @member {string} uuid
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @instance
                         */
                        Device.prototype.uuid = "";

                        /**
                         * Device hwId.
                         * @member {string} hwId
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @instance
                         */
                        Device.prototype.hwId = "";

                        /**
                         * Device location.
                         * @member {aruba.iotops.common.v1.ILocation|null|undefined} location
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @instance
                         */
                        Device.prototype.location = null;

                        /**
                         * Device calculatedTimestamp.
                         * @member {number|Long} calculatedTimestamp
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @instance
                         */
                        Device.prototype.calculatedTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new Device instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {aruba.iotops.common.v1.DeviceLocation.IDevice=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.DeviceLocation.Device} Device instance
                         */
                        Device.create = function create(properties) {
                            return new Device(properties);
                        };

                        /**
                         * Encodes the specified Device message. Does not implicitly {@link aruba.iotops.common.v1.DeviceLocation.Device.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {aruba.iotops.common.v1.DeviceLocation.IDevice} message Device message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Device.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                            if (message.hwId != null && Object.hasOwnProperty.call(message, "hwId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hwId);
                            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                                $root.aruba.iotops.common.v1.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.calculatedTimestamp != null && Object.hasOwnProperty.call(message, "calculatedTimestamp"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.calculatedTimestamp);
                            return writer;
                        };

                        /**
                         * Encodes the specified Device message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.DeviceLocation.Device.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {aruba.iotops.common.v1.DeviceLocation.IDevice} message Device message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Device.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Device message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.DeviceLocation.Device} Device
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Device.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.DeviceLocation.Device();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.uuid = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.hwId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.location = $root.aruba.iotops.common.v1.Location.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.calculatedTimestamp = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Device message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.DeviceLocation.Device} Device
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Device.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Device message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Device.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.uuid != null && message.hasOwnProperty("uuid"))
                                if (!$util.isString(message.uuid))
                                    return "uuid: string expected";
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                if (!$util.isString(message.hwId))
                                    return "hwId: string expected";
                            if (message.location != null && message.hasOwnProperty("location")) {
                                var error = $root.aruba.iotops.common.v1.Location.verify(message.location);
                                if (error)
                                    return "location." + error;
                            }
                            if (message.calculatedTimestamp != null && message.hasOwnProperty("calculatedTimestamp"))
                                if (!$util.isInteger(message.calculatedTimestamp) && !(message.calculatedTimestamp && $util.isInteger(message.calculatedTimestamp.low) && $util.isInteger(message.calculatedTimestamp.high)))
                                    return "calculatedTimestamp: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a Device message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.DeviceLocation.Device} Device
                         */
                        Device.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.DeviceLocation.Device)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.DeviceLocation.Device();
                            if (object.uuid != null)
                                message.uuid = String(object.uuid);
                            if (object.hwId != null)
                                message.hwId = String(object.hwId);
                            if (object.location != null) {
                                if (typeof object.location !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.DeviceLocation.Device.location: object expected");
                                message.location = $root.aruba.iotops.common.v1.Location.fromObject(object.location);
                            }
                            if (object.calculatedTimestamp != null)
                                if ($util.Long)
                                    (message.calculatedTimestamp = $util.Long.fromValue(object.calculatedTimestamp)).unsigned = false;
                                else if (typeof object.calculatedTimestamp === "string")
                                    message.calculatedTimestamp = parseInt(object.calculatedTimestamp, 10);
                                else if (typeof object.calculatedTimestamp === "number")
                                    message.calculatedTimestamp = object.calculatedTimestamp;
                                else if (typeof object.calculatedTimestamp === "object")
                                    message.calculatedTimestamp = new $util.LongBits(object.calculatedTimestamp.low >>> 0, object.calculatedTimestamp.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a Device message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {aruba.iotops.common.v1.DeviceLocation.Device} message Device
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Device.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.uuid = "";
                                object.hwId = "";
                                object.location = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.calculatedTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.calculatedTimestamp = options.longs === String ? "0" : 0;
                            }
                            if (message.uuid != null && message.hasOwnProperty("uuid"))
                                object.uuid = message.uuid;
                            if (message.hwId != null && message.hasOwnProperty("hwId"))
                                object.hwId = message.hwId;
                            if (message.location != null && message.hasOwnProperty("location"))
                                object.location = $root.aruba.iotops.common.v1.Location.toObject(message.location, options);
                            if (message.calculatedTimestamp != null && message.hasOwnProperty("calculatedTimestamp"))
                                if (typeof message.calculatedTimestamp === "number")
                                    object.calculatedTimestamp = options.longs === String ? String(message.calculatedTimestamp) : message.calculatedTimestamp;
                                else
                                    object.calculatedTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.calculatedTimestamp) : options.longs === Number ? new $util.LongBits(message.calculatedTimestamp.low >>> 0, message.calculatedTimestamp.high >>> 0).toNumber() : message.calculatedTimestamp;
                            return object;
                        };

                        /**
                         * Converts this Device to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Device.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Device
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.DeviceLocation.Device
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Device.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.DeviceLocation.Device";
                        };

                        return Device;
                    })();

                    return DeviceLocation;
                })();

                v1.APInventory = (function() {

                    /**
                     * Properties of a APInventory.
                     * @memberof aruba.iotops.common.v1
                     * @interface IAPInventory
                     * @property {Uint8Array|null} [mac] APInventory mac
                     * @property {aruba.iotops.common.v1.HealthStatus|null} [status] APInventory status
                     * @property {string|null} [ipv4] APInventory ipv4
                     * @property {string|null} [ipv6] APInventory ipv6
                     * @property {string|null} [hwType] APInventory hwType
                     * @property {string|null} [swVersion] APInventory swVersion
                     * @property {string|null} [swBuild] APInventory swBuild
                     * @property {Array.<aruba.iotops.common.v1.IIotRadioInventory>|null} [radioInventory] APInventory radioInventory
                     * @property {Array.<aruba.iotops.common.v1.IUSBDeviceInventory>|null} [usbInventory] APInventory usbInventory
                     * @property {aruba.iotops.common.v1.ILocation|null} [location] APInventory location
                     */

                    /**
                     * Constructs a new APInventory.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a APInventory.
                     * @implements IAPInventory
                     * @constructor
                     * @param {aruba.iotops.common.v1.IAPInventory=} [properties] Properties to set
                     */
                    function APInventory(properties) {
                        this.radioInventory = [];
                        this.usbInventory = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * APInventory mac.
                     * @member {Uint8Array} mac
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.mac = $util.newBuffer([]);

                    /**
                     * APInventory status.
                     * @member {aruba.iotops.common.v1.HealthStatus} status
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.status = 0;

                    /**
                     * APInventory ipv4.
                     * @member {string|null|undefined} ipv4
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.ipv4 = null;

                    /**
                     * APInventory ipv6.
                     * @member {string|null|undefined} ipv6
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.ipv6 = null;

                    /**
                     * APInventory hwType.
                     * @member {string|null|undefined} hwType
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.hwType = null;

                    /**
                     * APInventory swVersion.
                     * @member {string|null|undefined} swVersion
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.swVersion = null;

                    /**
                     * APInventory swBuild.
                     * @member {string|null|undefined} swBuild
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.swBuild = null;

                    /**
                     * APInventory radioInventory.
                     * @member {Array.<aruba.iotops.common.v1.IIotRadioInventory>} radioInventory
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.radioInventory = $util.emptyArray;

                    /**
                     * APInventory usbInventory.
                     * @member {Array.<aruba.iotops.common.v1.IUSBDeviceInventory>} usbInventory
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.usbInventory = $util.emptyArray;

                    /**
                     * APInventory location.
                     * @member {aruba.iotops.common.v1.ILocation|null|undefined} location
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    APInventory.prototype.location = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * APInventory _ipv4.
                     * @member {"ipv4"|undefined} _ipv4
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    Object.defineProperty(APInventory.prototype, "_ipv4", {
                        get: $util.oneOfGetter($oneOfFields = ["ipv4"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * APInventory _ipv6.
                     * @member {"ipv6"|undefined} _ipv6
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    Object.defineProperty(APInventory.prototype, "_ipv6", {
                        get: $util.oneOfGetter($oneOfFields = ["ipv6"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * APInventory _hwType.
                     * @member {"hwType"|undefined} _hwType
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    Object.defineProperty(APInventory.prototype, "_hwType", {
                        get: $util.oneOfGetter($oneOfFields = ["hwType"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * APInventory _swVersion.
                     * @member {"swVersion"|undefined} _swVersion
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    Object.defineProperty(APInventory.prototype, "_swVersion", {
                        get: $util.oneOfGetter($oneOfFields = ["swVersion"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * APInventory _swBuild.
                     * @member {"swBuild"|undefined} _swBuild
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     */
                    Object.defineProperty(APInventory.prototype, "_swBuild", {
                        get: $util.oneOfGetter($oneOfFields = ["swBuild"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new APInventory instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IAPInventory=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.APInventory} APInventory instance
                     */
                    APInventory.create = function create(properties) {
                        return new APInventory(properties);
                    };

                    /**
                     * Encodes the specified APInventory message. Does not implicitly {@link aruba.iotops.common.v1.APInventory.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IAPInventory} message APInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    APInventory.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.mac != null && Object.hasOwnProperty.call(message, "mac"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                        if (message.ipv4 != null && Object.hasOwnProperty.call(message, "ipv4"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ipv4);
                        if (message.ipv6 != null && Object.hasOwnProperty.call(message, "ipv6"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ipv6);
                        if (message.hwType != null && Object.hasOwnProperty.call(message, "hwType"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.hwType);
                        if (message.swVersion != null && Object.hasOwnProperty.call(message, "swVersion"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.swVersion);
                        if (message.swBuild != null && Object.hasOwnProperty.call(message, "swBuild"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.swBuild);
                        if (message.radioInventory != null && message.radioInventory.length)
                            for (var i = 0; i < message.radioInventory.length; ++i)
                                $root.aruba.iotops.common.v1.IotRadioInventory.encode(message.radioInventory[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.usbInventory != null && message.usbInventory.length)
                            for (var i = 0; i < message.usbInventory.length; ++i)
                                $root.aruba.iotops.common.v1.USBDeviceInventory.encode(message.usbInventory[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                            $root.aruba.iotops.common.v1.Location.encode(message.location, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified APInventory message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.APInventory.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IAPInventory} message APInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    APInventory.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a APInventory message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.APInventory} APInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    APInventory.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.APInventory();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.mac = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.status = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.ipv4 = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.ipv6 = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.hwType = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.swVersion = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.swBuild = reader.string();
                                    break;
                                }
                            case 8: {
                                    if (!(message.radioInventory && message.radioInventory.length))
                                        message.radioInventory = [];
                                    message.radioInventory.push($root.aruba.iotops.common.v1.IotRadioInventory.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 9: {
                                    if (!(message.usbInventory && message.usbInventory.length))
                                        message.usbInventory = [];
                                    message.usbInventory.push($root.aruba.iotops.common.v1.USBDeviceInventory.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 10: {
                                    message.location = $root.aruba.iotops.common.v1.Location.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a APInventory message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.APInventory} APInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    APInventory.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a APInventory message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    APInventory.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.mac != null && message.hasOwnProperty("mac"))
                            if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                                return "mac: buffer expected";
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                            properties._ipv4 = 1;
                            if (!$util.isString(message.ipv4))
                                return "ipv4: string expected";
                        }
                        if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                            properties._ipv6 = 1;
                            if (!$util.isString(message.ipv6))
                                return "ipv6: string expected";
                        }
                        if (message.hwType != null && message.hasOwnProperty("hwType")) {
                            properties._hwType = 1;
                            if (!$util.isString(message.hwType))
                                return "hwType: string expected";
                        }
                        if (message.swVersion != null && message.hasOwnProperty("swVersion")) {
                            properties._swVersion = 1;
                            if (!$util.isString(message.swVersion))
                                return "swVersion: string expected";
                        }
                        if (message.swBuild != null && message.hasOwnProperty("swBuild")) {
                            properties._swBuild = 1;
                            if (!$util.isString(message.swBuild))
                                return "swBuild: string expected";
                        }
                        if (message.radioInventory != null && message.hasOwnProperty("radioInventory")) {
                            if (!Array.isArray(message.radioInventory))
                                return "radioInventory: array expected";
                            for (var i = 0; i < message.radioInventory.length; ++i) {
                                var error = $root.aruba.iotops.common.v1.IotRadioInventory.verify(message.radioInventory[i]);
                                if (error)
                                    return "radioInventory." + error;
                            }
                        }
                        if (message.usbInventory != null && message.hasOwnProperty("usbInventory")) {
                            if (!Array.isArray(message.usbInventory))
                                return "usbInventory: array expected";
                            for (var i = 0; i < message.usbInventory.length; ++i) {
                                var error = $root.aruba.iotops.common.v1.USBDeviceInventory.verify(message.usbInventory[i]);
                                if (error)
                                    return "usbInventory." + error;
                            }
                        }
                        if (message.location != null && message.hasOwnProperty("location")) {
                            var error = $root.aruba.iotops.common.v1.Location.verify(message.location);
                            if (error)
                                return "location." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a APInventory message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.APInventory} APInventory
                     */
                    APInventory.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.APInventory)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.APInventory();
                        if (object.mac != null)
                            if (typeof object.mac === "string")
                                $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                            else if (object.mac.length >= 0)
                                message.mac = object.mac;
                        switch (object.status) {
                        default:
                            if (typeof object.status === "number") {
                                message.status = object.status;
                                break;
                            }
                            break;
                        case "HEALTH_STATUS_UNSPECIFIED":
                        case 0:
                            message.status = 0;
                            break;
                        case "HEALTH_STATUS_HEALTHY":
                        case 1:
                            message.status = 1;
                            break;
                        case "HEALTH_STATUS_DEGRADED":
                        case 2:
                            message.status = 2;
                            break;
                        case "HEALTH_STATUS_UNAVAILABLE":
                        case 3:
                            message.status = 3;
                            break;
                        }
                        if (object.ipv4 != null)
                            message.ipv4 = String(object.ipv4);
                        if (object.ipv6 != null)
                            message.ipv6 = String(object.ipv6);
                        if (object.hwType != null)
                            message.hwType = String(object.hwType);
                        if (object.swVersion != null)
                            message.swVersion = String(object.swVersion);
                        if (object.swBuild != null)
                            message.swBuild = String(object.swBuild);
                        if (object.radioInventory) {
                            if (!Array.isArray(object.radioInventory))
                                throw TypeError(".aruba.iotops.common.v1.APInventory.radioInventory: array expected");
                            message.radioInventory = [];
                            for (var i = 0; i < object.radioInventory.length; ++i) {
                                if (typeof object.radioInventory[i] !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.APInventory.radioInventory: object expected");
                                message.radioInventory[i] = $root.aruba.iotops.common.v1.IotRadioInventory.fromObject(object.radioInventory[i]);
                            }
                        }
                        if (object.usbInventory) {
                            if (!Array.isArray(object.usbInventory))
                                throw TypeError(".aruba.iotops.common.v1.APInventory.usbInventory: array expected");
                            message.usbInventory = [];
                            for (var i = 0; i < object.usbInventory.length; ++i) {
                                if (typeof object.usbInventory[i] !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.APInventory.usbInventory: object expected");
                                message.usbInventory[i] = $root.aruba.iotops.common.v1.USBDeviceInventory.fromObject(object.usbInventory[i]);
                            }
                        }
                        if (object.location != null) {
                            if (typeof object.location !== "object")
                                throw TypeError(".aruba.iotops.common.v1.APInventory.location: object expected");
                            message.location = $root.aruba.iotops.common.v1.Location.fromObject(object.location);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a APInventory message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {aruba.iotops.common.v1.APInventory} message APInventory
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    APInventory.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.radioInventory = [];
                            object.usbInventory = [];
                        }
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.mac = "";
                            else {
                                object.mac = [];
                                if (options.bytes !== Array)
                                    object.mac = $util.newBuffer(object.mac);
                            }
                            object.status = options.enums === String ? "HEALTH_STATUS_UNSPECIFIED" : 0;
                            object.location = null;
                        }
                        if (message.mac != null && message.hasOwnProperty("mac"))
                            object.mac = options.bytes === String ? $util.base64.encode(message.mac, 0, message.mac.length) : options.bytes === Array ? Array.prototype.slice.call(message.mac) : message.mac;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.aruba.iotops.common.v1.HealthStatus[message.status] === undefined ? message.status : $root.aruba.iotops.common.v1.HealthStatus[message.status] : message.status;
                        if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                            object.ipv4 = message.ipv4;
                            if (options.oneofs)
                                object._ipv4 = "ipv4";
                        }
                        if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                            object.ipv6 = message.ipv6;
                            if (options.oneofs)
                                object._ipv6 = "ipv6";
                        }
                        if (message.hwType != null && message.hasOwnProperty("hwType")) {
                            object.hwType = message.hwType;
                            if (options.oneofs)
                                object._hwType = "hwType";
                        }
                        if (message.swVersion != null && message.hasOwnProperty("swVersion")) {
                            object.swVersion = message.swVersion;
                            if (options.oneofs)
                                object._swVersion = "swVersion";
                        }
                        if (message.swBuild != null && message.hasOwnProperty("swBuild")) {
                            object.swBuild = message.swBuild;
                            if (options.oneofs)
                                object._swBuild = "swBuild";
                        }
                        if (message.radioInventory && message.radioInventory.length) {
                            object.radioInventory = [];
                            for (var j = 0; j < message.radioInventory.length; ++j)
                                object.radioInventory[j] = $root.aruba.iotops.common.v1.IotRadioInventory.toObject(message.radioInventory[j], options);
                        }
                        if (message.usbInventory && message.usbInventory.length) {
                            object.usbInventory = [];
                            for (var j = 0; j < message.usbInventory.length; ++j)
                                object.usbInventory[j] = $root.aruba.iotops.common.v1.USBDeviceInventory.toObject(message.usbInventory[j], options);
                        }
                        if (message.location != null && message.hasOwnProperty("location"))
                            object.location = $root.aruba.iotops.common.v1.Location.toObject(message.location, options);
                        return object;
                    };

                    /**
                     * Converts this APInventory to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    APInventory.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for APInventory
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.APInventory
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    APInventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.APInventory";
                    };

                    return APInventory;
                })();

                v1.USBDeviceInventory = (function() {

                    /**
                     * Properties of a USBDeviceInventory.
                     * @memberof aruba.iotops.common.v1
                     * @interface IUSBDeviceInventory
                     * @property {string|null} [identifier] USBDeviceInventory identifier
                     * @property {aruba.iotops.common.v1.HealthStatus|null} [status] USBDeviceInventory status
                     * @property {aruba.iotops.common.v1.IUSBDescriptor|null} [usbDescriptor] USBDeviceInventory usbDescriptor
                     */

                    /**
                     * Constructs a new USBDeviceInventory.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a USBDeviceInventory.
                     * @implements IUSBDeviceInventory
                     * @constructor
                     * @param {aruba.iotops.common.v1.IUSBDeviceInventory=} [properties] Properties to set
                     */
                    function USBDeviceInventory(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * USBDeviceInventory identifier.
                     * @member {string} identifier
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @instance
                     */
                    USBDeviceInventory.prototype.identifier = "";

                    /**
                     * USBDeviceInventory status.
                     * @member {aruba.iotops.common.v1.HealthStatus} status
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @instance
                     */
                    USBDeviceInventory.prototype.status = 0;

                    /**
                     * USBDeviceInventory usbDescriptor.
                     * @member {aruba.iotops.common.v1.IUSBDescriptor|null|undefined} usbDescriptor
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @instance
                     */
                    USBDeviceInventory.prototype.usbDescriptor = null;

                    /**
                     * Creates a new USBDeviceInventory instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDeviceInventory=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.USBDeviceInventory} USBDeviceInventory instance
                     */
                    USBDeviceInventory.create = function create(properties) {
                        return new USBDeviceInventory(properties);
                    };

                    /**
                     * Encodes the specified USBDeviceInventory message. Does not implicitly {@link aruba.iotops.common.v1.USBDeviceInventory.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDeviceInventory} message USBDeviceInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    USBDeviceInventory.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                        if (message.usbDescriptor != null && Object.hasOwnProperty.call(message, "usbDescriptor"))
                            $root.aruba.iotops.common.v1.USBDescriptor.encode(message.usbDescriptor, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified USBDeviceInventory message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.USBDeviceInventory.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDeviceInventory} message USBDeviceInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    USBDeviceInventory.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a USBDeviceInventory message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.USBDeviceInventory} USBDeviceInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    USBDeviceInventory.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.USBDeviceInventory();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.identifier = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.status = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.usbDescriptor = $root.aruba.iotops.common.v1.USBDescriptor.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a USBDeviceInventory message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.USBDeviceInventory} USBDeviceInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    USBDeviceInventory.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a USBDeviceInventory message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    USBDeviceInventory.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.usbDescriptor != null && message.hasOwnProperty("usbDescriptor")) {
                            var error = $root.aruba.iotops.common.v1.USBDescriptor.verify(message.usbDescriptor);
                            if (error)
                                return "usbDescriptor." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a USBDeviceInventory message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.USBDeviceInventory} USBDeviceInventory
                     */
                    USBDeviceInventory.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.USBDeviceInventory)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.USBDeviceInventory();
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        switch (object.status) {
                        default:
                            if (typeof object.status === "number") {
                                message.status = object.status;
                                break;
                            }
                            break;
                        case "HEALTH_STATUS_UNSPECIFIED":
                        case 0:
                            message.status = 0;
                            break;
                        case "HEALTH_STATUS_HEALTHY":
                        case 1:
                            message.status = 1;
                            break;
                        case "HEALTH_STATUS_DEGRADED":
                        case 2:
                            message.status = 2;
                            break;
                        case "HEALTH_STATUS_UNAVAILABLE":
                        case 3:
                            message.status = 3;
                            break;
                        }
                        if (object.usbDescriptor != null) {
                            if (typeof object.usbDescriptor !== "object")
                                throw TypeError(".aruba.iotops.common.v1.USBDeviceInventory.usbDescriptor: object expected");
                            message.usbDescriptor = $root.aruba.iotops.common.v1.USBDescriptor.fromObject(object.usbDescriptor);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a USBDeviceInventory message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {aruba.iotops.common.v1.USBDeviceInventory} message USBDeviceInventory
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    USBDeviceInventory.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.identifier = "";
                            object.status = options.enums === String ? "HEALTH_STATUS_UNSPECIFIED" : 0;
                            object.usbDescriptor = null;
                        }
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.aruba.iotops.common.v1.HealthStatus[message.status] === undefined ? message.status : $root.aruba.iotops.common.v1.HealthStatus[message.status] : message.status;
                        if (message.usbDescriptor != null && message.hasOwnProperty("usbDescriptor"))
                            object.usbDescriptor = $root.aruba.iotops.common.v1.USBDescriptor.toObject(message.usbDescriptor, options);
                        return object;
                    };

                    /**
                     * Converts this USBDeviceInventory to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    USBDeviceInventory.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for USBDeviceInventory
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.USBDeviceInventory
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    USBDeviceInventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.USBDeviceInventory";
                    };

                    return USBDeviceInventory;
                })();

                v1.IotRadioInventory = (function() {

                    /**
                     * Properties of an IotRadioInventory.
                     * @memberof aruba.iotops.common.v1
                     * @interface IIotRadioInventory
                     * @property {string|null} [mac] IotRadioInventory mac
                     * @property {aruba.iotops.common.v1.IotRadioInventory.IotRadioType|null} [hardware] IotRadioInventory hardware
                     * @property {aruba.iotops.common.v1.IotRadioInventory.IotRadioFirmware|null} [firmware] IotRadioInventory firmware
                     * @property {aruba.iotops.common.v1.HealthStatus|null} [health] IotRadioInventory health
                     * @property {boolean|null} [external] IotRadioInventory external
                     * @property {string|null} [firmwareVersion] IotRadioInventory firmwareVersion
                     * @property {aruba.iotops.common.v1.IIotRadioState|null} [state] IotRadioInventory state
                     * @property {string|null} [id] IotRadioInventory id
                     */

                    /**
                     * Constructs a new IotRadioInventory.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents an IotRadioInventory.
                     * @implements IIotRadioInventory
                     * @constructor
                     * @param {aruba.iotops.common.v1.IIotRadioInventory=} [properties] Properties to set
                     */
                    function IotRadioInventory(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IotRadioInventory mac.
                     * @member {string} mac
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.mac = "";

                    /**
                     * IotRadioInventory hardware.
                     * @member {aruba.iotops.common.v1.IotRadioInventory.IotRadioType} hardware
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.hardware = 0;

                    /**
                     * IotRadioInventory firmware.
                     * @member {aruba.iotops.common.v1.IotRadioInventory.IotRadioFirmware} firmware
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.firmware = 0;

                    /**
                     * IotRadioInventory health.
                     * @member {aruba.iotops.common.v1.HealthStatus} health
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.health = 0;

                    /**
                     * IotRadioInventory external.
                     * @member {boolean} external
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.external = false;

                    /**
                     * IotRadioInventory firmwareVersion.
                     * @member {string} firmwareVersion
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.firmwareVersion = "";

                    /**
                     * IotRadioInventory state.
                     * @member {aruba.iotops.common.v1.IIotRadioState|null|undefined} state
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.state = null;

                    /**
                     * IotRadioInventory id.
                     * @member {string} id
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     */
                    IotRadioInventory.prototype.id = "";

                    /**
                     * Creates a new IotRadioInventory instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioInventory=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.IotRadioInventory} IotRadioInventory instance
                     */
                    IotRadioInventory.create = function create(properties) {
                        return new IotRadioInventory(properties);
                    };

                    /**
                     * Encodes the specified IotRadioInventory message. Does not implicitly {@link aruba.iotops.common.v1.IotRadioInventory.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioInventory} message IotRadioInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioInventory.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.mac != null && Object.hasOwnProperty.call(message, "mac"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mac);
                        if (message.hardware != null && Object.hasOwnProperty.call(message, "hardware"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hardware);
                        if (message.firmware != null && Object.hasOwnProperty.call(message, "firmware"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.firmware);
                        if (message.health != null && Object.hasOwnProperty.call(message, "health"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.health);
                        if (message.external != null && Object.hasOwnProperty.call(message, "external"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.external);
                        if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.firmwareVersion);
                        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                            $root.aruba.iotops.common.v1.IotRadioState.encode(message.state, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified IotRadioInventory message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.IotRadioInventory.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioInventory} message IotRadioInventory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioInventory.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an IotRadioInventory message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.IotRadioInventory} IotRadioInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioInventory.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.IotRadioInventory();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.mac = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.hardware = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.firmware = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.health = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.external = reader.bool();
                                    break;
                                }
                            case 6: {
                                    message.firmwareVersion = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.state = $root.aruba.iotops.common.v1.IotRadioState.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.id = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an IotRadioInventory message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.IotRadioInventory} IotRadioInventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioInventory.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IotRadioInventory message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IotRadioInventory.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.mac != null && message.hasOwnProperty("mac"))
                            if (!$util.isString(message.mac))
                                return "mac: string expected";
                        if (message.hardware != null && message.hasOwnProperty("hardware"))
                            switch (message.hardware) {
                            default:
                                return "hardware: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.firmware != null && message.hasOwnProperty("firmware"))
                            switch (message.firmware) {
                            default:
                                return "firmware: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.health != null && message.hasOwnProperty("health"))
                            switch (message.health) {
                            default:
                                return "health: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.external != null && message.hasOwnProperty("external"))
                            if (typeof message.external !== "boolean")
                                return "external: boolean expected";
                        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
                            if (!$util.isString(message.firmwareVersion))
                                return "firmwareVersion: string expected";
                        if (message.state != null && message.hasOwnProperty("state")) {
                            var error = $root.aruba.iotops.common.v1.IotRadioState.verify(message.state);
                            if (error)
                                return "state." + error;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        return null;
                    };

                    /**
                     * Creates an IotRadioInventory message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.IotRadioInventory} IotRadioInventory
                     */
                    IotRadioInventory.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.IotRadioInventory)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.IotRadioInventory();
                        if (object.mac != null)
                            message.mac = String(object.mac);
                        switch (object.hardware) {
                        default:
                            if (typeof object.hardware === "number") {
                                message.hardware = object.hardware;
                                break;
                            }
                            break;
                        case "IOT_RADIO_TYPE_UNSPECIFIED":
                        case 0:
                            message.hardware = 0;
                            break;
                        case "IOT_RADIO_TYPE_GEN1":
                        case 1:
                            message.hardware = 1;
                            break;
                        case "IOT_RADIO_TYPE_GEN2":
                        case 2:
                            message.hardware = 2;
                            break;
                        }
                        switch (object.firmware) {
                        default:
                            if (typeof object.firmware === "number") {
                                message.firmware = object.firmware;
                                break;
                            }
                            break;
                        case "IOT_RADIO_FIRMWARE_UNSPECIFIED":
                        case 0:
                            message.firmware = 0;
                            break;
                        case "IOT_RADIO_FIRMWARE_ARUBA":
                        case 1:
                            message.firmware = 1;
                            break;
                        case "IOT_RADIO_FIRMWARE_SDR":
                        case 2:
                            message.firmware = 2;
                            break;
                        }
                        switch (object.health) {
                        default:
                            if (typeof object.health === "number") {
                                message.health = object.health;
                                break;
                            }
                            break;
                        case "HEALTH_STATUS_UNSPECIFIED":
                        case 0:
                            message.health = 0;
                            break;
                        case "HEALTH_STATUS_HEALTHY":
                        case 1:
                            message.health = 1;
                            break;
                        case "HEALTH_STATUS_DEGRADED":
                        case 2:
                            message.health = 2;
                            break;
                        case "HEALTH_STATUS_UNAVAILABLE":
                        case 3:
                            message.health = 3;
                            break;
                        }
                        if (object.external != null)
                            message.external = Boolean(object.external);
                        if (object.firmwareVersion != null)
                            message.firmwareVersion = String(object.firmwareVersion);
                        if (object.state != null) {
                            if (typeof object.state !== "object")
                                throw TypeError(".aruba.iotops.common.v1.IotRadioInventory.state: object expected");
                            message.state = $root.aruba.iotops.common.v1.IotRadioState.fromObject(object.state);
                        }
                        if (object.id != null)
                            message.id = String(object.id);
                        return message;
                    };

                    /**
                     * Creates a plain object from an IotRadioInventory message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {aruba.iotops.common.v1.IotRadioInventory} message IotRadioInventory
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IotRadioInventory.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.mac = "";
                            object.hardware = options.enums === String ? "IOT_RADIO_TYPE_UNSPECIFIED" : 0;
                            object.firmware = options.enums === String ? "IOT_RADIO_FIRMWARE_UNSPECIFIED" : 0;
                            object.health = options.enums === String ? "HEALTH_STATUS_UNSPECIFIED" : 0;
                            object.external = false;
                            object.firmwareVersion = "";
                            object.state = null;
                            object.id = "";
                        }
                        if (message.mac != null && message.hasOwnProperty("mac"))
                            object.mac = message.mac;
                        if (message.hardware != null && message.hasOwnProperty("hardware"))
                            object.hardware = options.enums === String ? $root.aruba.iotops.common.v1.IotRadioInventory.IotRadioType[message.hardware] === undefined ? message.hardware : $root.aruba.iotops.common.v1.IotRadioInventory.IotRadioType[message.hardware] : message.hardware;
                        if (message.firmware != null && message.hasOwnProperty("firmware"))
                            object.firmware = options.enums === String ? $root.aruba.iotops.common.v1.IotRadioInventory.IotRadioFirmware[message.firmware] === undefined ? message.firmware : $root.aruba.iotops.common.v1.IotRadioInventory.IotRadioFirmware[message.firmware] : message.firmware;
                        if (message.health != null && message.hasOwnProperty("health"))
                            object.health = options.enums === String ? $root.aruba.iotops.common.v1.HealthStatus[message.health] === undefined ? message.health : $root.aruba.iotops.common.v1.HealthStatus[message.health] : message.health;
                        if (message.external != null && message.hasOwnProperty("external"))
                            object.external = message.external;
                        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
                            object.firmwareVersion = message.firmwareVersion;
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = $root.aruba.iotops.common.v1.IotRadioState.toObject(message.state, options);
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        return object;
                    };

                    /**
                     * Converts this IotRadioInventory to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IotRadioInventory.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for IotRadioInventory
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.IotRadioInventory
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    IotRadioInventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.IotRadioInventory";
                    };

                    /**
                     * IotRadioType enum.
                     * @name aruba.iotops.common.v1.IotRadioInventory.IotRadioType
                     * @enum {number}
                     * @property {number} IOT_RADIO_TYPE_UNSPECIFIED=0 IOT_RADIO_TYPE_UNSPECIFIED value
                     * @property {number} IOT_RADIO_TYPE_GEN1=1 IOT_RADIO_TYPE_GEN1 value
                     * @property {number} IOT_RADIO_TYPE_GEN2=2 IOT_RADIO_TYPE_GEN2 value
                     */
                    IotRadioInventory.IotRadioType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "IOT_RADIO_TYPE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "IOT_RADIO_TYPE_GEN1"] = 1;
                        values[valuesById[2] = "IOT_RADIO_TYPE_GEN2"] = 2;
                        return values;
                    })();

                    /**
                     * IotRadioFirmware enum.
                     * @name aruba.iotops.common.v1.IotRadioInventory.IotRadioFirmware
                     * @enum {number}
                     * @property {number} IOT_RADIO_FIRMWARE_UNSPECIFIED=0 IOT_RADIO_FIRMWARE_UNSPECIFIED value
                     * @property {number} IOT_RADIO_FIRMWARE_ARUBA=1 IOT_RADIO_FIRMWARE_ARUBA value
                     * @property {number} IOT_RADIO_FIRMWARE_SDR=2 IOT_RADIO_FIRMWARE_SDR value
                     */
                    IotRadioInventory.IotRadioFirmware = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "IOT_RADIO_FIRMWARE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "IOT_RADIO_FIRMWARE_ARUBA"] = 1;
                        values[valuesById[2] = "IOT_RADIO_FIRMWARE_SDR"] = 2;
                        return values;
                    })();

                    return IotRadioInventory;
                })();

                /**
                 * HealthStatus enum.
                 * @name aruba.iotops.common.v1.HealthStatus
                 * @enum {number}
                 * @property {number} HEALTH_STATUS_UNSPECIFIED=0 HEALTH_STATUS_UNSPECIFIED value
                 * @property {number} HEALTH_STATUS_HEALTHY=1 HEALTH_STATUS_HEALTHY value
                 * @property {number} HEALTH_STATUS_DEGRADED=2 HEALTH_STATUS_DEGRADED value
                 * @property {number} HEALTH_STATUS_UNAVAILABLE=3 HEALTH_STATUS_UNAVAILABLE value
                 */
                v1.HealthStatus = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "HEALTH_STATUS_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "HEALTH_STATUS_HEALTHY"] = 1;
                    values[valuesById[2] = "HEALTH_STATUS_DEGRADED"] = 2;
                    values[valuesById[3] = "HEALTH_STATUS_UNAVAILABLE"] = 3;
                    return values;
                })();

                v1.IotRadioState = (function() {

                    /**
                     * Properties of an IotRadioState.
                     * @memberof aruba.iotops.common.v1
                     * @interface IIotRadioState
                     * @property {aruba.iotops.common.v1.IotRadioState.IotRadioMode|null} [radioMode] IotRadioState radioMode
                     * @property {aruba.iotops.common.v1.IIotRadioStateBle|null} [bleState] IotRadioState bleState
                     * @property {aruba.iotops.common.v1.IIotRadioStateZigbee|null} [zbState] IotRadioState zbState
                     */

                    /**
                     * Constructs a new IotRadioState.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents an IotRadioState.
                     * @implements IIotRadioState
                     * @constructor
                     * @param {aruba.iotops.common.v1.IIotRadioState=} [properties] Properties to set
                     */
                    function IotRadioState(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IotRadioState radioMode.
                     * @member {aruba.iotops.common.v1.IotRadioState.IotRadioMode} radioMode
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @instance
                     */
                    IotRadioState.prototype.radioMode = 0;

                    /**
                     * IotRadioState bleState.
                     * @member {aruba.iotops.common.v1.IIotRadioStateBle|null|undefined} bleState
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @instance
                     */
                    IotRadioState.prototype.bleState = null;

                    /**
                     * IotRadioState zbState.
                     * @member {aruba.iotops.common.v1.IIotRadioStateZigbee|null|undefined} zbState
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @instance
                     */
                    IotRadioState.prototype.zbState = null;

                    /**
                     * Creates a new IotRadioState instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioState=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.IotRadioState} IotRadioState instance
                     */
                    IotRadioState.create = function create(properties) {
                        return new IotRadioState(properties);
                    };

                    /**
                     * Encodes the specified IotRadioState message. Does not implicitly {@link aruba.iotops.common.v1.IotRadioState.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioState} message IotRadioState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioState.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.radioMode != null && Object.hasOwnProperty.call(message, "radioMode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.radioMode);
                        if (message.bleState != null && Object.hasOwnProperty.call(message, "bleState"))
                            $root.aruba.iotops.common.v1.IotRadioStateBle.encode(message.bleState, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.zbState != null && Object.hasOwnProperty.call(message, "zbState"))
                            $root.aruba.iotops.common.v1.IotRadioStateZigbee.encode(message.zbState, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified IotRadioState message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.IotRadioState.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioState} message IotRadioState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioState.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an IotRadioState message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.IotRadioState} IotRadioState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioState.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.IotRadioState();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.radioMode = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.bleState = $root.aruba.iotops.common.v1.IotRadioStateBle.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.zbState = $root.aruba.iotops.common.v1.IotRadioStateZigbee.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an IotRadioState message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.IotRadioState} IotRadioState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioState.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IotRadioState message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IotRadioState.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.radioMode != null && message.hasOwnProperty("radioMode"))
                            switch (message.radioMode) {
                            default:
                                return "radioMode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.bleState != null && message.hasOwnProperty("bleState")) {
                            var error = $root.aruba.iotops.common.v1.IotRadioStateBle.verify(message.bleState);
                            if (error)
                                return "bleState." + error;
                        }
                        if (message.zbState != null && message.hasOwnProperty("zbState")) {
                            var error = $root.aruba.iotops.common.v1.IotRadioStateZigbee.verify(message.zbState);
                            if (error)
                                return "zbState." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an IotRadioState message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.IotRadioState} IotRadioState
                     */
                    IotRadioState.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.IotRadioState)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.IotRadioState();
                        switch (object.radioMode) {
                        default:
                            if (typeof object.radioMode === "number") {
                                message.radioMode = object.radioMode;
                                break;
                            }
                            break;
                        case "IOT_RADIO_MODE_UNSPECIFIED":
                        case 0:
                            message.radioMode = 0;
                            break;
                        case "IOT_RADIO_MODE_OFF":
                        case 1:
                            message.radioMode = 1;
                            break;
                        case "IOT_RADIO_MODE_BLE":
                        case 2:
                            message.radioMode = 2;
                            break;
                        case "IOT_RADIO_MODE_ZIGBEE":
                        case 3:
                            message.radioMode = 3;
                            break;
                        case "IOT_RADIO_MODE_BOTH":
                        case 4:
                            message.radioMode = 4;
                            break;
                        }
                        if (object.bleState != null) {
                            if (typeof object.bleState !== "object")
                                throw TypeError(".aruba.iotops.common.v1.IotRadioState.bleState: object expected");
                            message.bleState = $root.aruba.iotops.common.v1.IotRadioStateBle.fromObject(object.bleState);
                        }
                        if (object.zbState != null) {
                            if (typeof object.zbState !== "object")
                                throw TypeError(".aruba.iotops.common.v1.IotRadioState.zbState: object expected");
                            message.zbState = $root.aruba.iotops.common.v1.IotRadioStateZigbee.fromObject(object.zbState);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an IotRadioState message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {aruba.iotops.common.v1.IotRadioState} message IotRadioState
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IotRadioState.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.radioMode = options.enums === String ? "IOT_RADIO_MODE_UNSPECIFIED" : 0;
                            object.bleState = null;
                            object.zbState = null;
                        }
                        if (message.radioMode != null && message.hasOwnProperty("radioMode"))
                            object.radioMode = options.enums === String ? $root.aruba.iotops.common.v1.IotRadioState.IotRadioMode[message.radioMode] === undefined ? message.radioMode : $root.aruba.iotops.common.v1.IotRadioState.IotRadioMode[message.radioMode] : message.radioMode;
                        if (message.bleState != null && message.hasOwnProperty("bleState"))
                            object.bleState = $root.aruba.iotops.common.v1.IotRadioStateBle.toObject(message.bleState, options);
                        if (message.zbState != null && message.hasOwnProperty("zbState"))
                            object.zbState = $root.aruba.iotops.common.v1.IotRadioStateZigbee.toObject(message.zbState, options);
                        return object;
                    };

                    /**
                     * Converts this IotRadioState to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IotRadioState.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for IotRadioState
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.IotRadioState
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    IotRadioState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.IotRadioState";
                    };

                    /**
                     * IotRadioMode enum.
                     * @name aruba.iotops.common.v1.IotRadioState.IotRadioMode
                     * @enum {number}
                     * @property {number} IOT_RADIO_MODE_UNSPECIFIED=0 IOT_RADIO_MODE_UNSPECIFIED value
                     * @property {number} IOT_RADIO_MODE_OFF=1 IOT_RADIO_MODE_OFF value
                     * @property {number} IOT_RADIO_MODE_BLE=2 IOT_RADIO_MODE_BLE value
                     * @property {number} IOT_RADIO_MODE_ZIGBEE=3 IOT_RADIO_MODE_ZIGBEE value
                     * @property {number} IOT_RADIO_MODE_BOTH=4 IOT_RADIO_MODE_BOTH value
                     */
                    IotRadioState.IotRadioMode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "IOT_RADIO_MODE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "IOT_RADIO_MODE_OFF"] = 1;
                        values[valuesById[2] = "IOT_RADIO_MODE_BLE"] = 2;
                        values[valuesById[3] = "IOT_RADIO_MODE_ZIGBEE"] = 3;
                        values[valuesById[4] = "IOT_RADIO_MODE_BOTH"] = 4;
                        return values;
                    })();

                    return IotRadioState;
                })();

                v1.IotRadioStateBle = (function() {

                    /**
                     * Properties of an IotRadioStateBle.
                     * @memberof aruba.iotops.common.v1
                     * @interface IIotRadioStateBle
                     * @property {aruba.iotops.common.v1.IotRadioStateBle.BleOpMode|null} [bleOpMode] IotRadioStateBle bleOpMode
                     * @property {number|null} [bleTxPower] IotRadioStateBle bleTxPower
                     * @property {aruba.iotops.common.v1.IotRadioStateBle.BleConsole|null} [bleConsole] IotRadioStateBle bleConsole
                     * @property {Array.<aruba.iotops.common.v1.IBeacon>|null} [beacons] IotRadioStateBle beacons
                     */

                    /**
                     * Constructs a new IotRadioStateBle.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents an IotRadioStateBle.
                     * @implements IIotRadioStateBle
                     * @constructor
                     * @param {aruba.iotops.common.v1.IIotRadioStateBle=} [properties] Properties to set
                     */
                    function IotRadioStateBle(properties) {
                        this.beacons = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IotRadioStateBle bleOpMode.
                     * @member {aruba.iotops.common.v1.IotRadioStateBle.BleOpMode} bleOpMode
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @instance
                     */
                    IotRadioStateBle.prototype.bleOpMode = 0;

                    /**
                     * IotRadioStateBle bleTxPower.
                     * @member {number} bleTxPower
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @instance
                     */
                    IotRadioStateBle.prototype.bleTxPower = 0;

                    /**
                     * IotRadioStateBle bleConsole.
                     * @member {aruba.iotops.common.v1.IotRadioStateBle.BleConsole} bleConsole
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @instance
                     */
                    IotRadioStateBle.prototype.bleConsole = 0;

                    /**
                     * IotRadioStateBle beacons.
                     * @member {Array.<aruba.iotops.common.v1.IBeacon>} beacons
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @instance
                     */
                    IotRadioStateBle.prototype.beacons = $util.emptyArray;

                    /**
                     * Creates a new IotRadioStateBle instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateBle=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.IotRadioStateBle} IotRadioStateBle instance
                     */
                    IotRadioStateBle.create = function create(properties) {
                        return new IotRadioStateBle(properties);
                    };

                    /**
                     * Encodes the specified IotRadioStateBle message. Does not implicitly {@link aruba.iotops.common.v1.IotRadioStateBle.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateBle} message IotRadioStateBle message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioStateBle.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bleOpMode != null && Object.hasOwnProperty.call(message, "bleOpMode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bleOpMode);
                        if (message.bleTxPower != null && Object.hasOwnProperty.call(message, "bleTxPower"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bleTxPower);
                        if (message.bleConsole != null && Object.hasOwnProperty.call(message, "bleConsole"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bleConsole);
                        if (message.beacons != null && message.beacons.length)
                            for (var i = 0; i < message.beacons.length; ++i)
                                $root.aruba.iotops.common.v1.Beacon.encode(message.beacons[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified IotRadioStateBle message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.IotRadioStateBle.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateBle} message IotRadioStateBle message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioStateBle.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an IotRadioStateBle message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.IotRadioStateBle} IotRadioStateBle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioStateBle.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.IotRadioStateBle();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.bleOpMode = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.bleTxPower = reader.uint32();
                                    break;
                                }
                            case 3: {
                                    message.bleConsole = reader.int32();
                                    break;
                                }
                            case 4: {
                                    if (!(message.beacons && message.beacons.length))
                                        message.beacons = [];
                                    message.beacons.push($root.aruba.iotops.common.v1.Beacon.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an IotRadioStateBle message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.IotRadioStateBle} IotRadioStateBle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioStateBle.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IotRadioStateBle message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IotRadioStateBle.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.bleOpMode != null && message.hasOwnProperty("bleOpMode"))
                            switch (message.bleOpMode) {
                            default:
                                return "bleOpMode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.bleTxPower != null && message.hasOwnProperty("bleTxPower"))
                            if (!$util.isInteger(message.bleTxPower))
                                return "bleTxPower: integer expected";
                        if (message.bleConsole != null && message.hasOwnProperty("bleConsole"))
                            switch (message.bleConsole) {
                            default:
                                return "bleConsole: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.beacons != null && message.hasOwnProperty("beacons")) {
                            if (!Array.isArray(message.beacons))
                                return "beacons: array expected";
                            for (var i = 0; i < message.beacons.length; ++i) {
                                var error = $root.aruba.iotops.common.v1.Beacon.verify(message.beacons[i]);
                                if (error)
                                    return "beacons." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an IotRadioStateBle message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.IotRadioStateBle} IotRadioStateBle
                     */
                    IotRadioStateBle.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.IotRadioStateBle)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.IotRadioStateBle();
                        switch (object.bleOpMode) {
                        default:
                            if (typeof object.bleOpMode === "number") {
                                message.bleOpMode = object.bleOpMode;
                                break;
                            }
                            break;
                        case "BLE_OP_MODE_UNSPECIFIED":
                        case 0:
                            message.bleOpMode = 0;
                            break;
                        case "BLE_OP_MODE_DISABLED":
                        case 1:
                            message.bleOpMode = 1;
                            break;
                        case "BLE_OP_MODE_SCANNING":
                        case 2:
                            message.bleOpMode = 2;
                            break;
                        case "BLE_OP_MODE_BEACONING":
                        case 3:
                            message.bleOpMode = 3;
                            break;
                        case "BLE_OP_MODE_BOTH":
                        case 4:
                            message.bleOpMode = 4;
                            break;
                        }
                        if (object.bleTxPower != null)
                            message.bleTxPower = object.bleTxPower >>> 0;
                        switch (object.bleConsole) {
                        default:
                            if (typeof object.bleConsole === "number") {
                                message.bleConsole = object.bleConsole;
                                break;
                            }
                            break;
                        case "BLE_CONSOLE_UNSPECIFIED":
                        case 0:
                            message.bleConsole = 0;
                            break;
                        case "BLE_CONSOLE_OFF":
                        case 1:
                            message.bleConsole = 1;
                            break;
                        case "BLE_CONSOLE_ON":
                        case 2:
                            message.bleConsole = 2;
                            break;
                        case "BLE_CONSOLE_DYNAMIC":
                        case 3:
                            message.bleConsole = 3;
                            break;
                        }
                        if (object.beacons) {
                            if (!Array.isArray(object.beacons))
                                throw TypeError(".aruba.iotops.common.v1.IotRadioStateBle.beacons: array expected");
                            message.beacons = [];
                            for (var i = 0; i < object.beacons.length; ++i) {
                                if (typeof object.beacons[i] !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.IotRadioStateBle.beacons: object expected");
                                message.beacons[i] = $root.aruba.iotops.common.v1.Beacon.fromObject(object.beacons[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an IotRadioStateBle message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {aruba.iotops.common.v1.IotRadioStateBle} message IotRadioStateBle
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IotRadioStateBle.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.beacons = [];
                        if (options.defaults) {
                            object.bleOpMode = options.enums === String ? "BLE_OP_MODE_UNSPECIFIED" : 0;
                            object.bleTxPower = 0;
                            object.bleConsole = options.enums === String ? "BLE_CONSOLE_UNSPECIFIED" : 0;
                        }
                        if (message.bleOpMode != null && message.hasOwnProperty("bleOpMode"))
                            object.bleOpMode = options.enums === String ? $root.aruba.iotops.common.v1.IotRadioStateBle.BleOpMode[message.bleOpMode] === undefined ? message.bleOpMode : $root.aruba.iotops.common.v1.IotRadioStateBle.BleOpMode[message.bleOpMode] : message.bleOpMode;
                        if (message.bleTxPower != null && message.hasOwnProperty("bleTxPower"))
                            object.bleTxPower = message.bleTxPower;
                        if (message.bleConsole != null && message.hasOwnProperty("bleConsole"))
                            object.bleConsole = options.enums === String ? $root.aruba.iotops.common.v1.IotRadioStateBle.BleConsole[message.bleConsole] === undefined ? message.bleConsole : $root.aruba.iotops.common.v1.IotRadioStateBle.BleConsole[message.bleConsole] : message.bleConsole;
                        if (message.beacons && message.beacons.length) {
                            object.beacons = [];
                            for (var j = 0; j < message.beacons.length; ++j)
                                object.beacons[j] = $root.aruba.iotops.common.v1.Beacon.toObject(message.beacons[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this IotRadioStateBle to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IotRadioStateBle.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for IotRadioStateBle
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.IotRadioStateBle
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    IotRadioStateBle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.IotRadioStateBle";
                    };

                    /**
                     * BleOpMode enum.
                     * @name aruba.iotops.common.v1.IotRadioStateBle.BleOpMode
                     * @enum {number}
                     * @property {number} BLE_OP_MODE_UNSPECIFIED=0 BLE_OP_MODE_UNSPECIFIED value
                     * @property {number} BLE_OP_MODE_DISABLED=1 BLE_OP_MODE_DISABLED value
                     * @property {number} BLE_OP_MODE_SCANNING=2 BLE_OP_MODE_SCANNING value
                     * @property {number} BLE_OP_MODE_BEACONING=3 BLE_OP_MODE_BEACONING value
                     * @property {number} BLE_OP_MODE_BOTH=4 BLE_OP_MODE_BOTH value
                     */
                    IotRadioStateBle.BleOpMode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "BLE_OP_MODE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "BLE_OP_MODE_DISABLED"] = 1;
                        values[valuesById[2] = "BLE_OP_MODE_SCANNING"] = 2;
                        values[valuesById[3] = "BLE_OP_MODE_BEACONING"] = 3;
                        values[valuesById[4] = "BLE_OP_MODE_BOTH"] = 4;
                        return values;
                    })();

                    /**
                     * BleConsole enum.
                     * @name aruba.iotops.common.v1.IotRadioStateBle.BleConsole
                     * @enum {number}
                     * @property {number} BLE_CONSOLE_UNSPECIFIED=0 BLE_CONSOLE_UNSPECIFIED value
                     * @property {number} BLE_CONSOLE_OFF=1 BLE_CONSOLE_OFF value
                     * @property {number} BLE_CONSOLE_ON=2 BLE_CONSOLE_ON value
                     * @property {number} BLE_CONSOLE_DYNAMIC=3 BLE_CONSOLE_DYNAMIC value
                     */
                    IotRadioStateBle.BleConsole = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "BLE_CONSOLE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "BLE_CONSOLE_OFF"] = 1;
                        values[valuesById[2] = "BLE_CONSOLE_ON"] = 2;
                        values[valuesById[3] = "BLE_CONSOLE_DYNAMIC"] = 3;
                        return values;
                    })();

                    return IotRadioStateBle;
                })();

                v1.IotRadioStateZigbee = (function() {

                    /**
                     * Properties of an IotRadioStateZigbee.
                     * @memberof aruba.iotops.common.v1
                     * @interface IIotRadioStateZigbee
                     * @property {number|null} [zbOpMode] IotRadioStateZigbee zbOpMode
                     * @property {number|null} [zbTxPower] IotRadioStateZigbee zbTxPower
                     * @property {number|null} [zbChannel] IotRadioStateZigbee zbChannel
                     * @property {boolean|null} [zbSecurity] IotRadioStateZigbee zbSecurity
                     * @property {boolean|null} [zbPermitJoin] IotRadioStateZigbee zbPermitJoin
                     * @property {number|null} [zbPanId] IotRadioStateZigbee zbPanId
                     */

                    /**
                     * Constructs a new IotRadioStateZigbee.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents an IotRadioStateZigbee.
                     * @implements IIotRadioStateZigbee
                     * @constructor
                     * @param {aruba.iotops.common.v1.IIotRadioStateZigbee=} [properties] Properties to set
                     */
                    function IotRadioStateZigbee(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IotRadioStateZigbee zbOpMode.
                     * @member {number} zbOpMode
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbOpMode = 0;

                    /**
                     * IotRadioStateZigbee zbTxPower.
                     * @member {number} zbTxPower
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbTxPower = 0;

                    /**
                     * IotRadioStateZigbee zbChannel.
                     * @member {number} zbChannel
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbChannel = 0;

                    /**
                     * IotRadioStateZigbee zbSecurity.
                     * @member {boolean} zbSecurity
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbSecurity = false;

                    /**
                     * IotRadioStateZigbee zbPermitJoin.
                     * @member {boolean} zbPermitJoin
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbPermitJoin = false;

                    /**
                     * IotRadioStateZigbee zbPanId.
                     * @member {number} zbPanId
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     */
                    IotRadioStateZigbee.prototype.zbPanId = 0;

                    /**
                     * Creates a new IotRadioStateZigbee instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateZigbee=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.IotRadioStateZigbee} IotRadioStateZigbee instance
                     */
                    IotRadioStateZigbee.create = function create(properties) {
                        return new IotRadioStateZigbee(properties);
                    };

                    /**
                     * Encodes the specified IotRadioStateZigbee message. Does not implicitly {@link aruba.iotops.common.v1.IotRadioStateZigbee.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateZigbee} message IotRadioStateZigbee message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioStateZigbee.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.zbOpMode != null && Object.hasOwnProperty.call(message, "zbOpMode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.zbOpMode);
                        if (message.zbTxPower != null && Object.hasOwnProperty.call(message, "zbTxPower"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.zbTxPower);
                        if (message.zbChannel != null && Object.hasOwnProperty.call(message, "zbChannel"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.zbChannel);
                        if (message.zbSecurity != null && Object.hasOwnProperty.call(message, "zbSecurity"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.zbSecurity);
                        if (message.zbPermitJoin != null && Object.hasOwnProperty.call(message, "zbPermitJoin"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.zbPermitJoin);
                        if (message.zbPanId != null && Object.hasOwnProperty.call(message, "zbPanId"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.zbPanId);
                        return writer;
                    };

                    /**
                     * Encodes the specified IotRadioStateZigbee message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.IotRadioStateZigbee.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {aruba.iotops.common.v1.IIotRadioStateZigbee} message IotRadioStateZigbee message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IotRadioStateZigbee.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an IotRadioStateZigbee message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.IotRadioStateZigbee} IotRadioStateZigbee
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioStateZigbee.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.IotRadioStateZigbee();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.zbOpMode = reader.uint32();
                                    break;
                                }
                            case 2: {
                                    message.zbTxPower = reader.uint32();
                                    break;
                                }
                            case 3: {
                                    message.zbChannel = reader.uint32();
                                    break;
                                }
                            case 4: {
                                    message.zbSecurity = reader.bool();
                                    break;
                                }
                            case 5: {
                                    message.zbPermitJoin = reader.bool();
                                    break;
                                }
                            case 6: {
                                    message.zbPanId = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an IotRadioStateZigbee message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.IotRadioStateZigbee} IotRadioStateZigbee
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IotRadioStateZigbee.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IotRadioStateZigbee message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IotRadioStateZigbee.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.zbOpMode != null && message.hasOwnProperty("zbOpMode"))
                            if (!$util.isInteger(message.zbOpMode))
                                return "zbOpMode: integer expected";
                        if (message.zbTxPower != null && message.hasOwnProperty("zbTxPower"))
                            if (!$util.isInteger(message.zbTxPower))
                                return "zbTxPower: integer expected";
                        if (message.zbChannel != null && message.hasOwnProperty("zbChannel"))
                            if (!$util.isInteger(message.zbChannel))
                                return "zbChannel: integer expected";
                        if (message.zbSecurity != null && message.hasOwnProperty("zbSecurity"))
                            if (typeof message.zbSecurity !== "boolean")
                                return "zbSecurity: boolean expected";
                        if (message.zbPermitJoin != null && message.hasOwnProperty("zbPermitJoin"))
                            if (typeof message.zbPermitJoin !== "boolean")
                                return "zbPermitJoin: boolean expected";
                        if (message.zbPanId != null && message.hasOwnProperty("zbPanId"))
                            if (!$util.isInteger(message.zbPanId))
                                return "zbPanId: integer expected";
                        return null;
                    };

                    /**
                     * Creates an IotRadioStateZigbee message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.IotRadioStateZigbee} IotRadioStateZigbee
                     */
                    IotRadioStateZigbee.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.IotRadioStateZigbee)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.IotRadioStateZigbee();
                        if (object.zbOpMode != null)
                            message.zbOpMode = object.zbOpMode >>> 0;
                        if (object.zbTxPower != null)
                            message.zbTxPower = object.zbTxPower >>> 0;
                        if (object.zbChannel != null)
                            message.zbChannel = object.zbChannel >>> 0;
                        if (object.zbSecurity != null)
                            message.zbSecurity = Boolean(object.zbSecurity);
                        if (object.zbPermitJoin != null)
                            message.zbPermitJoin = Boolean(object.zbPermitJoin);
                        if (object.zbPanId != null)
                            message.zbPanId = object.zbPanId >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an IotRadioStateZigbee message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {aruba.iotops.common.v1.IotRadioStateZigbee} message IotRadioStateZigbee
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IotRadioStateZigbee.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.zbOpMode = 0;
                            object.zbTxPower = 0;
                            object.zbChannel = 0;
                            object.zbSecurity = false;
                            object.zbPermitJoin = false;
                            object.zbPanId = 0;
                        }
                        if (message.zbOpMode != null && message.hasOwnProperty("zbOpMode"))
                            object.zbOpMode = message.zbOpMode;
                        if (message.zbTxPower != null && message.hasOwnProperty("zbTxPower"))
                            object.zbTxPower = message.zbTxPower;
                        if (message.zbChannel != null && message.hasOwnProperty("zbChannel"))
                            object.zbChannel = message.zbChannel;
                        if (message.zbSecurity != null && message.hasOwnProperty("zbSecurity"))
                            object.zbSecurity = message.zbSecurity;
                        if (message.zbPermitJoin != null && message.hasOwnProperty("zbPermitJoin"))
                            object.zbPermitJoin = message.zbPermitJoin;
                        if (message.zbPanId != null && message.hasOwnProperty("zbPanId"))
                            object.zbPanId = message.zbPanId;
                        return object;
                    };

                    /**
                     * Converts this IotRadioStateZigbee to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IotRadioStateZigbee.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for IotRadioStateZigbee
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.IotRadioStateZigbee
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    IotRadioStateZigbee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.IotRadioStateZigbee";
                    };

                    return IotRadioStateZigbee;
                })();

                v1.Beacon = (function() {

                    /**
                     * Properties of a Beacon.
                     * @memberof aruba.iotops.common.v1
                     * @interface IBeacon
                     * @property {number|null} [advFormat] Beacon advFormat
                     * @property {number|null} [interval] Beacon interval
                     * @property {aruba.iotops.common.v1.Beacon.IIBeacon|null} [ibeacon] Beacon ibeacon
                     * @property {aruba.iotops.common.v1.Beacon.ICustomBeacon|null} [customBeacon] Beacon customBeacon
                     */

                    /**
                     * Constructs a new Beacon.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a Beacon.
                     * @implements IBeacon
                     * @constructor
                     * @param {aruba.iotops.common.v1.IBeacon=} [properties] Properties to set
                     */
                    function Beacon(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Beacon advFormat.
                     * @member {number} advFormat
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @instance
                     */
                    Beacon.prototype.advFormat = 0;

                    /**
                     * Beacon interval.
                     * @member {number} interval
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @instance
                     */
                    Beacon.prototype.interval = 0;

                    /**
                     * Beacon ibeacon.
                     * @member {aruba.iotops.common.v1.Beacon.IIBeacon|null|undefined} ibeacon
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @instance
                     */
                    Beacon.prototype.ibeacon = null;

                    /**
                     * Beacon customBeacon.
                     * @member {aruba.iotops.common.v1.Beacon.ICustomBeacon|null|undefined} customBeacon
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @instance
                     */
                    Beacon.prototype.customBeacon = null;

                    /**
                     * Creates a new Beacon instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {aruba.iotops.common.v1.IBeacon=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.Beacon} Beacon instance
                     */
                    Beacon.create = function create(properties) {
                        return new Beacon(properties);
                    };

                    /**
                     * Encodes the specified Beacon message. Does not implicitly {@link aruba.iotops.common.v1.Beacon.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {aruba.iotops.common.v1.IBeacon} message Beacon message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Beacon.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.advFormat != null && Object.hasOwnProperty.call(message, "advFormat"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.advFormat);
                        if (message.interval != null && Object.hasOwnProperty.call(message, "interval"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.interval);
                        if (message.ibeacon != null && Object.hasOwnProperty.call(message, "ibeacon"))
                            $root.aruba.iotops.common.v1.Beacon.IBeacon.encode(message.ibeacon, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.customBeacon != null && Object.hasOwnProperty.call(message, "customBeacon"))
                            $root.aruba.iotops.common.v1.Beacon.CustomBeacon.encode(message.customBeacon, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Beacon message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Beacon.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {aruba.iotops.common.v1.IBeacon} message Beacon message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Beacon.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Beacon message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.Beacon} Beacon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Beacon.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Beacon();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.advFormat = reader.uint32();
                                    break;
                                }
                            case 2: {
                                    message.interval = reader.uint32();
                                    break;
                                }
                            case 4: {
                                    message.ibeacon = $root.aruba.iotops.common.v1.Beacon.IBeacon.decode(reader, reader.uint32());
                                    break;
                                }
                            case 5: {
                                    message.customBeacon = $root.aruba.iotops.common.v1.Beacon.CustomBeacon.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Beacon message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.Beacon} Beacon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Beacon.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Beacon message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Beacon.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.advFormat != null && message.hasOwnProperty("advFormat"))
                            if (!$util.isInteger(message.advFormat))
                                return "advFormat: integer expected";
                        if (message.interval != null && message.hasOwnProperty("interval"))
                            if (!$util.isInteger(message.interval))
                                return "interval: integer expected";
                        if (message.ibeacon != null && message.hasOwnProperty("ibeacon")) {
                            var error = $root.aruba.iotops.common.v1.Beacon.IBeacon.verify(message.ibeacon);
                            if (error)
                                return "ibeacon." + error;
                        }
                        if (message.customBeacon != null && message.hasOwnProperty("customBeacon")) {
                            var error = $root.aruba.iotops.common.v1.Beacon.CustomBeacon.verify(message.customBeacon);
                            if (error)
                                return "customBeacon." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Beacon message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.Beacon} Beacon
                     */
                    Beacon.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.Beacon)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.Beacon();
                        if (object.advFormat != null)
                            message.advFormat = object.advFormat >>> 0;
                        if (object.interval != null)
                            message.interval = object.interval >>> 0;
                        if (object.ibeacon != null) {
                            if (typeof object.ibeacon !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Beacon.ibeacon: object expected");
                            message.ibeacon = $root.aruba.iotops.common.v1.Beacon.IBeacon.fromObject(object.ibeacon);
                        }
                        if (object.customBeacon != null) {
                            if (typeof object.customBeacon !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Beacon.customBeacon: object expected");
                            message.customBeacon = $root.aruba.iotops.common.v1.Beacon.CustomBeacon.fromObject(object.customBeacon);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Beacon message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {aruba.iotops.common.v1.Beacon} message Beacon
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Beacon.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.advFormat = 0;
                            object.interval = 0;
                            object.ibeacon = null;
                            object.customBeacon = null;
                        }
                        if (message.advFormat != null && message.hasOwnProperty("advFormat"))
                            object.advFormat = message.advFormat;
                        if (message.interval != null && message.hasOwnProperty("interval"))
                            object.interval = message.interval;
                        if (message.ibeacon != null && message.hasOwnProperty("ibeacon"))
                            object.ibeacon = $root.aruba.iotops.common.v1.Beacon.IBeacon.toObject(message.ibeacon, options);
                        if (message.customBeacon != null && message.hasOwnProperty("customBeacon"))
                            object.customBeacon = $root.aruba.iotops.common.v1.Beacon.CustomBeacon.toObject(message.customBeacon, options);
                        return object;
                    };

                    /**
                     * Converts this Beacon to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Beacon.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Beacon
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.Beacon
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Beacon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.Beacon";
                    };

                    Beacon.IBeacon = (function() {

                        /**
                         * Properties of a IBeacon.
                         * @memberof aruba.iotops.common.v1.Beacon
                         * @interface IIBeacon
                         * @property {string|null} [uuid] IBeacon uuid
                         * @property {number|null} [major] IBeacon major
                         * @property {number|null} [minor] IBeacon minor
                         */

                        /**
                         * Constructs a new IBeacon.
                         * @memberof aruba.iotops.common.v1.Beacon
                         * @classdesc Represents a IBeacon.
                         * @implements IIBeacon
                         * @constructor
                         * @param {aruba.iotops.common.v1.Beacon.IIBeacon=} [properties] Properties to set
                         */
                        function IBeacon(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * IBeacon uuid.
                         * @member {string} uuid
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @instance
                         */
                        IBeacon.prototype.uuid = "";

                        /**
                         * IBeacon major.
                         * @member {number} major
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @instance
                         */
                        IBeacon.prototype.major = 0;

                        /**
                         * IBeacon minor.
                         * @member {number} minor
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @instance
                         */
                        IBeacon.prototype.minor = 0;

                        /**
                         * Creates a new IBeacon instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.IIBeacon=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Beacon.IBeacon} IBeacon instance
                         */
                        IBeacon.create = function create(properties) {
                            return new IBeacon(properties);
                        };

                        /**
                         * Encodes the specified IBeacon message. Does not implicitly {@link aruba.iotops.common.v1.Beacon.IBeacon.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.IIBeacon} message IBeacon message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        IBeacon.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                            if (message.major != null && Object.hasOwnProperty.call(message, "major"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.major);
                            if (message.minor != null && Object.hasOwnProperty.call(message, "minor"))
                                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minor);
                            return writer;
                        };

                        /**
                         * Encodes the specified IBeacon message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Beacon.IBeacon.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.IIBeacon} message IBeacon message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        IBeacon.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a IBeacon message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Beacon.IBeacon} IBeacon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        IBeacon.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Beacon.IBeacon();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.uuid = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.major = reader.uint32();
                                        break;
                                    }
                                case 3: {
                                        message.minor = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a IBeacon message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Beacon.IBeacon} IBeacon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        IBeacon.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a IBeacon message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        IBeacon.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.uuid != null && message.hasOwnProperty("uuid"))
                                if (!$util.isString(message.uuid))
                                    return "uuid: string expected";
                            if (message.major != null && message.hasOwnProperty("major"))
                                if (!$util.isInteger(message.major))
                                    return "major: integer expected";
                            if (message.minor != null && message.hasOwnProperty("minor"))
                                if (!$util.isInteger(message.minor))
                                    return "minor: integer expected";
                            return null;
                        };

                        /**
                         * Creates a IBeacon message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Beacon.IBeacon} IBeacon
                         */
                        IBeacon.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Beacon.IBeacon)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Beacon.IBeacon();
                            if (object.uuid != null)
                                message.uuid = String(object.uuid);
                            if (object.major != null)
                                message.major = object.major >>> 0;
                            if (object.minor != null)
                                message.minor = object.minor >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a IBeacon message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.IBeacon} message IBeacon
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        IBeacon.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.uuid = "";
                                object.major = 0;
                                object.minor = 0;
                            }
                            if (message.uuid != null && message.hasOwnProperty("uuid"))
                                object.uuid = message.uuid;
                            if (message.major != null && message.hasOwnProperty("major"))
                                object.major = message.major;
                            if (message.minor != null && message.hasOwnProperty("minor"))
                                object.minor = message.minor;
                            return object;
                        };

                        /**
                         * Converts this IBeacon to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        IBeacon.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for IBeacon
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Beacon.IBeacon
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        IBeacon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Beacon.IBeacon";
                        };

                        return IBeacon;
                    })();

                    Beacon.CustomBeacon = (function() {

                        /**
                         * Properties of a CustomBeacon.
                         * @memberof aruba.iotops.common.v1.Beacon
                         * @interface ICustomBeacon
                         * @property {Uint8Array|null} [payload] CustomBeacon payload
                         */

                        /**
                         * Constructs a new CustomBeacon.
                         * @memberof aruba.iotops.common.v1.Beacon
                         * @classdesc Represents a CustomBeacon.
                         * @implements ICustomBeacon
                         * @constructor
                         * @param {aruba.iotops.common.v1.Beacon.ICustomBeacon=} [properties] Properties to set
                         */
                        function CustomBeacon(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CustomBeacon payload.
                         * @member {Uint8Array} payload
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @instance
                         */
                        CustomBeacon.prototype.payload = $util.newBuffer([]);

                        /**
                         * Creates a new CustomBeacon instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.ICustomBeacon=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Beacon.CustomBeacon} CustomBeacon instance
                         */
                        CustomBeacon.create = function create(properties) {
                            return new CustomBeacon(properties);
                        };

                        /**
                         * Encodes the specified CustomBeacon message. Does not implicitly {@link aruba.iotops.common.v1.Beacon.CustomBeacon.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.ICustomBeacon} message CustomBeacon message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CustomBeacon.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload);
                            return writer;
                        };

                        /**
                         * Encodes the specified CustomBeacon message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Beacon.CustomBeacon.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.ICustomBeacon} message CustomBeacon message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CustomBeacon.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a CustomBeacon message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Beacon.CustomBeacon} CustomBeacon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CustomBeacon.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Beacon.CustomBeacon();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.payload = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a CustomBeacon message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Beacon.CustomBeacon} CustomBeacon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CustomBeacon.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a CustomBeacon message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CustomBeacon.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                                    return "payload: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a CustomBeacon message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Beacon.CustomBeacon} CustomBeacon
                         */
                        CustomBeacon.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Beacon.CustomBeacon)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Beacon.CustomBeacon();
                            if (object.payload != null)
                                if (typeof object.payload === "string")
                                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                                else if (object.payload.length >= 0)
                                    message.payload = object.payload;
                            return message;
                        };

                        /**
                         * Creates a plain object from a CustomBeacon message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {aruba.iotops.common.v1.Beacon.CustomBeacon} message CustomBeacon
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CustomBeacon.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                if (options.bytes === String)
                                    object.payload = "";
                                else {
                                    object.payload = [];
                                    if (options.bytes !== Array)
                                        object.payload = $util.newBuffer(object.payload);
                                }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                            return object;
                        };

                        /**
                         * Converts this CustomBeacon to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CustomBeacon.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for CustomBeacon
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Beacon.CustomBeacon
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CustomBeacon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Beacon.CustomBeacon";
                        };

                        return CustomBeacon;
                    })();

                    return Beacon;
                })();

                v1.USBDescriptor = (function() {

                    /**
                     * Properties of a USBDescriptor.
                     * @memberof aruba.iotops.common.v1
                     * @interface IUSBDescriptor
                     * @property {number|null} [vendorId] USBDescriptor vendorId
                     * @property {number|null} [productId] USBDescriptor productId
                     * @property {number|null} [bcdDevice] USBDescriptor bcdDevice
                     * @property {string|null} [manufacturer] USBDescriptor manufacturer
                     * @property {string|null} [product] USBDescriptor product
                     * @property {string|null} [version] USBDescriptor version
                     */

                    /**
                     * Constructs a new USBDescriptor.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a USBDescriptor.
                     * @implements IUSBDescriptor
                     * @constructor
                     * @param {aruba.iotops.common.v1.IUSBDescriptor=} [properties] Properties to set
                     */
                    function USBDescriptor(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * USBDescriptor vendorId.
                     * @member {number} vendorId
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.vendorId = 0;

                    /**
                     * USBDescriptor productId.
                     * @member {number} productId
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.productId = 0;

                    /**
                     * USBDescriptor bcdDevice.
                     * @member {number} bcdDevice
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.bcdDevice = 0;

                    /**
                     * USBDescriptor manufacturer.
                     * @member {string} manufacturer
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.manufacturer = "";

                    /**
                     * USBDescriptor product.
                     * @member {string} product
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.product = "";

                    /**
                     * USBDescriptor version.
                     * @member {string} version
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     */
                    USBDescriptor.prototype.version = "";

                    /**
                     * Creates a new USBDescriptor instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDescriptor=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.USBDescriptor} USBDescriptor instance
                     */
                    USBDescriptor.create = function create(properties) {
                        return new USBDescriptor(properties);
                    };

                    /**
                     * Encodes the specified USBDescriptor message. Does not implicitly {@link aruba.iotops.common.v1.USBDescriptor.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDescriptor} message USBDescriptor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    USBDescriptor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.vendorId != null && Object.hasOwnProperty.call(message, "vendorId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.vendorId);
                        if (message.productId != null && Object.hasOwnProperty.call(message, "productId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.productId);
                        if (message.bcdDevice != null && Object.hasOwnProperty.call(message, "bcdDevice"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bcdDevice);
                        if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.manufacturer);
                        if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.product);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.version);
                        return writer;
                    };

                    /**
                     * Encodes the specified USBDescriptor message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.USBDescriptor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {aruba.iotops.common.v1.IUSBDescriptor} message USBDescriptor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    USBDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a USBDescriptor message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.USBDescriptor} USBDescriptor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    USBDescriptor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.USBDescriptor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.vendorId = reader.uint32();
                                    break;
                                }
                            case 2: {
                                    message.productId = reader.uint32();
                                    break;
                                }
                            case 3: {
                                    message.bcdDevice = reader.uint32();
                                    break;
                                }
                            case 4: {
                                    message.manufacturer = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.product = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.version = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a USBDescriptor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.USBDescriptor} USBDescriptor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    USBDescriptor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a USBDescriptor message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    USBDescriptor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.vendorId != null && message.hasOwnProperty("vendorId"))
                            if (!$util.isInteger(message.vendorId))
                                return "vendorId: integer expected";
                        if (message.productId != null && message.hasOwnProperty("productId"))
                            if (!$util.isInteger(message.productId))
                                return "productId: integer expected";
                        if (message.bcdDevice != null && message.hasOwnProperty("bcdDevice"))
                            if (!$util.isInteger(message.bcdDevice))
                                return "bcdDevice: integer expected";
                        if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                            if (!$util.isString(message.manufacturer))
                                return "manufacturer: string expected";
                        if (message.product != null && message.hasOwnProperty("product"))
                            if (!$util.isString(message.product))
                                return "product: string expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        return null;
                    };

                    /**
                     * Creates a USBDescriptor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.USBDescriptor} USBDescriptor
                     */
                    USBDescriptor.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.USBDescriptor)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.USBDescriptor();
                        if (object.vendorId != null)
                            message.vendorId = object.vendorId >>> 0;
                        if (object.productId != null)
                            message.productId = object.productId >>> 0;
                        if (object.bcdDevice != null)
                            message.bcdDevice = object.bcdDevice >>> 0;
                        if (object.manufacturer != null)
                            message.manufacturer = String(object.manufacturer);
                        if (object.product != null)
                            message.product = String(object.product);
                        if (object.version != null)
                            message.version = String(object.version);
                        return message;
                    };

                    /**
                     * Creates a plain object from a USBDescriptor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {aruba.iotops.common.v1.USBDescriptor} message USBDescriptor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    USBDescriptor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.vendorId = 0;
                            object.productId = 0;
                            object.bcdDevice = 0;
                            object.manufacturer = "";
                            object.product = "";
                            object.version = "";
                        }
                        if (message.vendorId != null && message.hasOwnProperty("vendorId"))
                            object.vendorId = message.vendorId;
                        if (message.productId != null && message.hasOwnProperty("productId"))
                            object.productId = message.productId;
                        if (message.bcdDevice != null && message.hasOwnProperty("bcdDevice"))
                            object.bcdDevice = message.bcdDevice;
                        if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                            object.manufacturer = message.manufacturer;
                        if (message.product != null && message.hasOwnProperty("product"))
                            object.product = message.product;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        return object;
                    };

                    /**
                     * Converts this USBDescriptor to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    USBDescriptor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for USBDescriptor
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.USBDescriptor
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    USBDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.USBDescriptor";
                    };

                    return USBDescriptor;
                })();

                /**
                 * BLEMacAddressType enum.
                 * @name aruba.iotops.common.v1.BLEMacAddressType
                 * @enum {number}
                 * @property {number} BLE_MAC_ADDRESS_TYPE_UNSPECIFIED=0 BLE_MAC_ADDRESS_TYPE_UNSPECIFIED value
                 * @property {number} BLE_MAC_ADDRESS_TYPE_PUBLIC=1 BLE_MAC_ADDRESS_TYPE_PUBLIC value
                 * @property {number} BLE_MAC_ADDRESS_TYPE_RANDOM_STATIC=2 BLE_MAC_ADDRESS_TYPE_RANDOM_STATIC value
                 * @property {number} BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_NON_RESOLVABLE=3 BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_NON_RESOLVABLE value
                 * @property {number} BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_RESOLVABLE=4 BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_RESOLVABLE value
                 */
                v1.BLEMacAddressType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "BLE_MAC_ADDRESS_TYPE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "BLE_MAC_ADDRESS_TYPE_PUBLIC"] = 1;
                    values[valuesById[2] = "BLE_MAC_ADDRESS_TYPE_RANDOM_STATIC"] = 2;
                    values[valuesById[3] = "BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_NON_RESOLVABLE"] = 3;
                    values[valuesById[4] = "BLE_MAC_ADDRESS_TYPE_RANDOM_PRIVATE_RESOLVABLE"] = 4;
                    return values;
                })();

                /**
                 * BLEFrameType enum.
                 * @name aruba.iotops.common.v1.BLEFrameType
                 * @enum {number}
                 * @property {number} BLE_FRAME_TYPE_ADV_UNSPECIFIED=0 BLE_FRAME_TYPE_ADV_UNSPECIFIED value
                 * @property {number} BLE_FRAME_TYPE_ADV_IND=1 BLE_FRAME_TYPE_ADV_IND value
                 * @property {number} BLE_FRAME_TYPE_ADV_DIRECT_IND=2 BLE_FRAME_TYPE_ADV_DIRECT_IND value
                 * @property {number} BLE_FRAME_TYPE_ADV_NONCONN_IND=3 BLE_FRAME_TYPE_ADV_NONCONN_IND value
                 * @property {number} BLE_FRAME_TYPE_SCAN_RSP=4 BLE_FRAME_TYPE_SCAN_RSP value
                 * @property {number} BLE_FRAME_TYPE_ADV_SCAN_IND=5 BLE_FRAME_TYPE_ADV_SCAN_IND value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_UNDIRECTED=6 BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_UNDIRECTED value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_DIRECTED=7 BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_DIRECTED value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_UNDIRECTED=8 BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_UNDIRECTED value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_DIRECTED=9 BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_DIRECTED value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_UNDIRECTED=10 BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_UNDIRECTED value
                 * @property {number} BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_DIRECTED=11 BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_DIRECTED value
                 */
                v1.BLEFrameType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "BLE_FRAME_TYPE_ADV_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "BLE_FRAME_TYPE_ADV_IND"] = 1;
                    values[valuesById[2] = "BLE_FRAME_TYPE_ADV_DIRECT_IND"] = 2;
                    values[valuesById[3] = "BLE_FRAME_TYPE_ADV_NONCONN_IND"] = 3;
                    values[valuesById[4] = "BLE_FRAME_TYPE_SCAN_RSP"] = 4;
                    values[valuesById[5] = "BLE_FRAME_TYPE_ADV_SCAN_IND"] = 5;
                    values[valuesById[6] = "BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_UNDIRECTED"] = 6;
                    values[valuesById[7] = "BLE_FRAME_TYPE_EXTENDED_CONNECTABLE_NONSCANNABLE_DIRECTED"] = 7;
                    values[valuesById[8] = "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_UNDIRECTED"] = 8;
                    values[valuesById[9] = "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_SCANNABLE_DIRECTED"] = 9;
                    values[valuesById[10] = "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_UNDIRECTED"] = 10;
                    values[valuesById[11] = "BLE_FRAME_TYPE_EXTENDED_NONCONNECTABLE_NONSCANNABLE_DIRECTED"] = 11;
                    return values;
                })();

                v1.BLEAssignedNumberTypeData = (function() {

                    /**
                     * Properties of a BLEAssignedNumberTypeData.
                     * @memberof aruba.iotops.common.v1
                     * @interface IBLEAssignedNumberTypeData
                     * @property {Array.<Uint8Array>|null} [companyId] BLEAssignedNumberTypeData companyId
                     * @property {Uint8Array|null} [shortLocalName] BLEAssignedNumberTypeData shortLocalName
                     * @property {Uint8Array|null} [completeLocalName] BLEAssignedNumberTypeData completeLocalName
                     * @property {Uint8Array|null} [appearanceValue] BLEAssignedNumberTypeData appearanceValue
                     */

                    /**
                     * Constructs a new BLEAssignedNumberTypeData.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a BLEAssignedNumberTypeData.
                     * @implements IBLEAssignedNumberTypeData
                     * @constructor
                     * @param {aruba.iotops.common.v1.IBLEAssignedNumberTypeData=} [properties] Properties to set
                     */
                    function BLEAssignedNumberTypeData(properties) {
                        this.companyId = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BLEAssignedNumberTypeData companyId.
                     * @member {Array.<Uint8Array>} companyId
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @instance
                     */
                    BLEAssignedNumberTypeData.prototype.companyId = $util.emptyArray;

                    /**
                     * BLEAssignedNumberTypeData shortLocalName.
                     * @member {Uint8Array} shortLocalName
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @instance
                     */
                    BLEAssignedNumberTypeData.prototype.shortLocalName = $util.newBuffer([]);

                    /**
                     * BLEAssignedNumberTypeData completeLocalName.
                     * @member {Uint8Array} completeLocalName
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @instance
                     */
                    BLEAssignedNumberTypeData.prototype.completeLocalName = $util.newBuffer([]);

                    /**
                     * BLEAssignedNumberTypeData appearanceValue.
                     * @member {Uint8Array} appearanceValue
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @instance
                     */
                    BLEAssignedNumberTypeData.prototype.appearanceValue = $util.newBuffer([]);

                    /**
                     * Creates a new BLEAssignedNumberTypeData instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {aruba.iotops.common.v1.IBLEAssignedNumberTypeData=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.BLEAssignedNumberTypeData} BLEAssignedNumberTypeData instance
                     */
                    BLEAssignedNumberTypeData.create = function create(properties) {
                        return new BLEAssignedNumberTypeData(properties);
                    };

                    /**
                     * Encodes the specified BLEAssignedNumberTypeData message. Does not implicitly {@link aruba.iotops.common.v1.BLEAssignedNumberTypeData.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {aruba.iotops.common.v1.IBLEAssignedNumberTypeData} message BLEAssignedNumberTypeData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BLEAssignedNumberTypeData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.companyId != null && message.companyId.length)
                            for (var i = 0; i < message.companyId.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.companyId[i]);
                        if (message.shortLocalName != null && Object.hasOwnProperty.call(message, "shortLocalName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.shortLocalName);
                        if (message.completeLocalName != null && Object.hasOwnProperty.call(message, "completeLocalName"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.completeLocalName);
                        if (message.appearanceValue != null && Object.hasOwnProperty.call(message, "appearanceValue"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.appearanceValue);
                        return writer;
                    };

                    /**
                     * Encodes the specified BLEAssignedNumberTypeData message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.BLEAssignedNumberTypeData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {aruba.iotops.common.v1.IBLEAssignedNumberTypeData} message BLEAssignedNumberTypeData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BLEAssignedNumberTypeData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BLEAssignedNumberTypeData message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.BLEAssignedNumberTypeData} BLEAssignedNumberTypeData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BLEAssignedNumberTypeData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.BLEAssignedNumberTypeData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.companyId && message.companyId.length))
                                        message.companyId = [];
                                    message.companyId.push(reader.bytes());
                                    break;
                                }
                            case 2: {
                                    message.shortLocalName = reader.bytes();
                                    break;
                                }
                            case 3: {
                                    message.completeLocalName = reader.bytes();
                                    break;
                                }
                            case 4: {
                                    message.appearanceValue = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BLEAssignedNumberTypeData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.BLEAssignedNumberTypeData} BLEAssignedNumberTypeData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BLEAssignedNumberTypeData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BLEAssignedNumberTypeData message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BLEAssignedNumberTypeData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.companyId != null && message.hasOwnProperty("companyId")) {
                            if (!Array.isArray(message.companyId))
                                return "companyId: array expected";
                            for (var i = 0; i < message.companyId.length; ++i)
                                if (!(message.companyId[i] && typeof message.companyId[i].length === "number" || $util.isString(message.companyId[i])))
                                    return "companyId: buffer[] expected";
                        }
                        if (message.shortLocalName != null && message.hasOwnProperty("shortLocalName"))
                            if (!(message.shortLocalName && typeof message.shortLocalName.length === "number" || $util.isString(message.shortLocalName)))
                                return "shortLocalName: buffer expected";
                        if (message.completeLocalName != null && message.hasOwnProperty("completeLocalName"))
                            if (!(message.completeLocalName && typeof message.completeLocalName.length === "number" || $util.isString(message.completeLocalName)))
                                return "completeLocalName: buffer expected";
                        if (message.appearanceValue != null && message.hasOwnProperty("appearanceValue"))
                            if (!(message.appearanceValue && typeof message.appearanceValue.length === "number" || $util.isString(message.appearanceValue)))
                                return "appearanceValue: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a BLEAssignedNumberTypeData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.BLEAssignedNumberTypeData} BLEAssignedNumberTypeData
                     */
                    BLEAssignedNumberTypeData.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.BLEAssignedNumberTypeData)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.BLEAssignedNumberTypeData();
                        if (object.companyId) {
                            if (!Array.isArray(object.companyId))
                                throw TypeError(".aruba.iotops.common.v1.BLEAssignedNumberTypeData.companyId: array expected");
                            message.companyId = [];
                            for (var i = 0; i < object.companyId.length; ++i)
                                if (typeof object.companyId[i] === "string")
                                    $util.base64.decode(object.companyId[i], message.companyId[i] = $util.newBuffer($util.base64.length(object.companyId[i])), 0);
                                else if (object.companyId[i].length >= 0)
                                    message.companyId[i] = object.companyId[i];
                        }
                        if (object.shortLocalName != null)
                            if (typeof object.shortLocalName === "string")
                                $util.base64.decode(object.shortLocalName, message.shortLocalName = $util.newBuffer($util.base64.length(object.shortLocalName)), 0);
                            else if (object.shortLocalName.length >= 0)
                                message.shortLocalName = object.shortLocalName;
                        if (object.completeLocalName != null)
                            if (typeof object.completeLocalName === "string")
                                $util.base64.decode(object.completeLocalName, message.completeLocalName = $util.newBuffer($util.base64.length(object.completeLocalName)), 0);
                            else if (object.completeLocalName.length >= 0)
                                message.completeLocalName = object.completeLocalName;
                        if (object.appearanceValue != null)
                            if (typeof object.appearanceValue === "string")
                                $util.base64.decode(object.appearanceValue, message.appearanceValue = $util.newBuffer($util.base64.length(object.appearanceValue)), 0);
                            else if (object.appearanceValue.length >= 0)
                                message.appearanceValue = object.appearanceValue;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BLEAssignedNumberTypeData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {aruba.iotops.common.v1.BLEAssignedNumberTypeData} message BLEAssignedNumberTypeData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BLEAssignedNumberTypeData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.companyId = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.shortLocalName = "";
                            else {
                                object.shortLocalName = [];
                                if (options.bytes !== Array)
                                    object.shortLocalName = $util.newBuffer(object.shortLocalName);
                            }
                            if (options.bytes === String)
                                object.completeLocalName = "";
                            else {
                                object.completeLocalName = [];
                                if (options.bytes !== Array)
                                    object.completeLocalName = $util.newBuffer(object.completeLocalName);
                            }
                            if (options.bytes === String)
                                object.appearanceValue = "";
                            else {
                                object.appearanceValue = [];
                                if (options.bytes !== Array)
                                    object.appearanceValue = $util.newBuffer(object.appearanceValue);
                            }
                        }
                        if (message.companyId && message.companyId.length) {
                            object.companyId = [];
                            for (var j = 0; j < message.companyId.length; ++j)
                                object.companyId[j] = options.bytes === String ? $util.base64.encode(message.companyId[j], 0, message.companyId[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.companyId[j]) : message.companyId[j];
                        }
                        if (message.shortLocalName != null && message.hasOwnProperty("shortLocalName"))
                            object.shortLocalName = options.bytes === String ? $util.base64.encode(message.shortLocalName, 0, message.shortLocalName.length) : options.bytes === Array ? Array.prototype.slice.call(message.shortLocalName) : message.shortLocalName;
                        if (message.completeLocalName != null && message.hasOwnProperty("completeLocalName"))
                            object.completeLocalName = options.bytes === String ? $util.base64.encode(message.completeLocalName, 0, message.completeLocalName.length) : options.bytes === Array ? Array.prototype.slice.call(message.completeLocalName) : message.completeLocalName;
                        if (message.appearanceValue != null && message.hasOwnProperty("appearanceValue"))
                            object.appearanceValue = options.bytes === String ? $util.base64.encode(message.appearanceValue, 0, message.appearanceValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.appearanceValue) : message.appearanceValue;
                        return object;
                    };

                    /**
                     * Converts this BLEAssignedNumberTypeData to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BLEAssignedNumberTypeData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for BLEAssignedNumberTypeData
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.BLEAssignedNumberTypeData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    BLEAssignedNumberTypeData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.BLEAssignedNumberTypeData";
                    };

                    return BLEAssignedNumberTypeData;
                })();

                v1.IBeacon = (function() {

                    /**
                     * Properties of a IBeacon.
                     * @memberof aruba.iotops.common.v1
                     * @interface IIBeacon
                     * @property {string|null} [ibeaconUuid] IBeacon ibeaconUuid
                     * @property {number|null} [ibeaconMajor] IBeacon ibeaconMajor
                     * @property {number|null} [ibeaconMinor] IBeacon ibeaconMinor
                     * @property {number|null} [ibeaconPower] IBeacon ibeaconPower
                     * @property {Uint8Array|null} [beaconExtra] IBeacon beaconExtra
                     */

                    /**
                     * Constructs a new IBeacon.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a IBeacon.
                     * @implements IIBeacon
                     * @constructor
                     * @param {aruba.iotops.common.v1.IIBeacon=} [properties] Properties to set
                     */
                    function IBeacon(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IBeacon ibeaconUuid.
                     * @member {string|null|undefined} ibeaconUuid
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    IBeacon.prototype.ibeaconUuid = null;

                    /**
                     * IBeacon ibeaconMajor.
                     * @member {number|null|undefined} ibeaconMajor
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    IBeacon.prototype.ibeaconMajor = null;

                    /**
                     * IBeacon ibeaconMinor.
                     * @member {number|null|undefined} ibeaconMinor
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    IBeacon.prototype.ibeaconMinor = null;

                    /**
                     * IBeacon ibeaconPower.
                     * @member {number|null|undefined} ibeaconPower
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    IBeacon.prototype.ibeaconPower = null;

                    /**
                     * IBeacon beaconExtra.
                     * @member {Uint8Array|null|undefined} beaconExtra
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    IBeacon.prototype.beaconExtra = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * IBeacon _ibeaconUuid.
                     * @member {"ibeaconUuid"|undefined} _ibeaconUuid
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    Object.defineProperty(IBeacon.prototype, "_ibeaconUuid", {
                        get: $util.oneOfGetter($oneOfFields = ["ibeaconUuid"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * IBeacon _ibeaconMajor.
                     * @member {"ibeaconMajor"|undefined} _ibeaconMajor
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    Object.defineProperty(IBeacon.prototype, "_ibeaconMajor", {
                        get: $util.oneOfGetter($oneOfFields = ["ibeaconMajor"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * IBeacon _ibeaconMinor.
                     * @member {"ibeaconMinor"|undefined} _ibeaconMinor
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    Object.defineProperty(IBeacon.prototype, "_ibeaconMinor", {
                        get: $util.oneOfGetter($oneOfFields = ["ibeaconMinor"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * IBeacon _ibeaconPower.
                     * @member {"ibeaconPower"|undefined} _ibeaconPower
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    Object.defineProperty(IBeacon.prototype, "_ibeaconPower", {
                        get: $util.oneOfGetter($oneOfFields = ["ibeaconPower"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * IBeacon _beaconExtra.
                     * @member {"beaconExtra"|undefined} _beaconExtra
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     */
                    Object.defineProperty(IBeacon.prototype, "_beaconExtra", {
                        get: $util.oneOfGetter($oneOfFields = ["beaconExtra"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new IBeacon instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {aruba.iotops.common.v1.IIBeacon=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.IBeacon} IBeacon instance
                     */
                    IBeacon.create = function create(properties) {
                        return new IBeacon(properties);
                    };

                    /**
                     * Encodes the specified IBeacon message. Does not implicitly {@link aruba.iotops.common.v1.IBeacon.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {aruba.iotops.common.v1.IIBeacon} message IBeacon message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IBeacon.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ibeaconUuid != null && Object.hasOwnProperty.call(message, "ibeaconUuid"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ibeaconUuid);
                        if (message.ibeaconMajor != null && Object.hasOwnProperty.call(message, "ibeaconMajor"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ibeaconMajor);
                        if (message.ibeaconMinor != null && Object.hasOwnProperty.call(message, "ibeaconMinor"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ibeaconMinor);
                        if (message.ibeaconPower != null && Object.hasOwnProperty.call(message, "ibeaconPower"))
                            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.ibeaconPower);
                        if (message.beaconExtra != null && Object.hasOwnProperty.call(message, "beaconExtra"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.beaconExtra);
                        return writer;
                    };

                    /**
                     * Encodes the specified IBeacon message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.IBeacon.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {aruba.iotops.common.v1.IIBeacon} message IBeacon message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IBeacon.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a IBeacon message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.IBeacon} IBeacon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IBeacon.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.IBeacon();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.ibeaconUuid = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.ibeaconMajor = reader.uint32();
                                    break;
                                }
                            case 3: {
                                    message.ibeaconMinor = reader.uint32();
                                    break;
                                }
                            case 4: {
                                    message.ibeaconPower = reader.sint32();
                                    break;
                                }
                            case 5: {
                                    message.beaconExtra = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a IBeacon message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.IBeacon} IBeacon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IBeacon.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a IBeacon message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IBeacon.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.ibeaconUuid != null && message.hasOwnProperty("ibeaconUuid")) {
                            properties._ibeaconUuid = 1;
                            if (!$util.isString(message.ibeaconUuid))
                                return "ibeaconUuid: string expected";
                        }
                        if (message.ibeaconMajor != null && message.hasOwnProperty("ibeaconMajor")) {
                            properties._ibeaconMajor = 1;
                            if (!$util.isInteger(message.ibeaconMajor))
                                return "ibeaconMajor: integer expected";
                        }
                        if (message.ibeaconMinor != null && message.hasOwnProperty("ibeaconMinor")) {
                            properties._ibeaconMinor = 1;
                            if (!$util.isInteger(message.ibeaconMinor))
                                return "ibeaconMinor: integer expected";
                        }
                        if (message.ibeaconPower != null && message.hasOwnProperty("ibeaconPower")) {
                            properties._ibeaconPower = 1;
                            if (!$util.isInteger(message.ibeaconPower))
                                return "ibeaconPower: integer expected";
                        }
                        if (message.beaconExtra != null && message.hasOwnProperty("beaconExtra")) {
                            properties._beaconExtra = 1;
                            if (!(message.beaconExtra && typeof message.beaconExtra.length === "number" || $util.isString(message.beaconExtra)))
                                return "beaconExtra: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a IBeacon message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.IBeacon} IBeacon
                     */
                    IBeacon.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.IBeacon)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.IBeacon();
                        if (object.ibeaconUuid != null)
                            message.ibeaconUuid = String(object.ibeaconUuid);
                        if (object.ibeaconMajor != null)
                            message.ibeaconMajor = object.ibeaconMajor >>> 0;
                        if (object.ibeaconMinor != null)
                            message.ibeaconMinor = object.ibeaconMinor >>> 0;
                        if (object.ibeaconPower != null)
                            message.ibeaconPower = object.ibeaconPower | 0;
                        if (object.beaconExtra != null)
                            if (typeof object.beaconExtra === "string")
                                $util.base64.decode(object.beaconExtra, message.beaconExtra = $util.newBuffer($util.base64.length(object.beaconExtra)), 0);
                            else if (object.beaconExtra.length >= 0)
                                message.beaconExtra = object.beaconExtra;
                        return message;
                    };

                    /**
                     * Creates a plain object from a IBeacon message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {aruba.iotops.common.v1.IBeacon} message IBeacon
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IBeacon.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.ibeaconUuid != null && message.hasOwnProperty("ibeaconUuid")) {
                            object.ibeaconUuid = message.ibeaconUuid;
                            if (options.oneofs)
                                object._ibeaconUuid = "ibeaconUuid";
                        }
                        if (message.ibeaconMajor != null && message.hasOwnProperty("ibeaconMajor")) {
                            object.ibeaconMajor = message.ibeaconMajor;
                            if (options.oneofs)
                                object._ibeaconMajor = "ibeaconMajor";
                        }
                        if (message.ibeaconMinor != null && message.hasOwnProperty("ibeaconMinor")) {
                            object.ibeaconMinor = message.ibeaconMinor;
                            if (options.oneofs)
                                object._ibeaconMinor = "ibeaconMinor";
                        }
                        if (message.ibeaconPower != null && message.hasOwnProperty("ibeaconPower")) {
                            object.ibeaconPower = message.ibeaconPower;
                            if (options.oneofs)
                                object._ibeaconPower = "ibeaconPower";
                        }
                        if (message.beaconExtra != null && message.hasOwnProperty("beaconExtra")) {
                            object.beaconExtra = options.bytes === String ? $util.base64.encode(message.beaconExtra, 0, message.beaconExtra.length) : options.bytes === Array ? Array.prototype.slice.call(message.beaconExtra) : message.beaconExtra;
                            if (options.oneofs)
                                object._beaconExtra = "beaconExtra";
                        }
                        return object;
                    };

                    /**
                     * Converts this IBeacon to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IBeacon.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for IBeacon
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.IBeacon
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    IBeacon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.IBeacon";
                    };

                    return IBeacon;
                })();

                v1.Eddystone = (function() {

                    /**
                     * Properties of an Eddystone.
                     * @memberof aruba.iotops.common.v1
                     * @interface IEddystone
                     * @property {aruba.iotops.common.v1.Eddystone.IEddyUID|null} [eddystoneUid] Eddystone eddystoneUid
                     * @property {aruba.iotops.common.v1.Eddystone.IEddyURL|null} [eddystoneUrl] Eddystone eddystoneUrl
                     * @property {aruba.iotops.common.v1.Eddystone.IEddyTLM|null} [eddystoneTlm] Eddystone eddystoneTlm
                     * @property {aruba.iotops.common.v1.Eddystone.IEddyEID|null} [eddystoneEid] Eddystone eddystoneEid
                     */

                    /**
                     * Constructs a new Eddystone.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents an Eddystone.
                     * @implements IEddystone
                     * @constructor
                     * @param {aruba.iotops.common.v1.IEddystone=} [properties] Properties to set
                     */
                    function Eddystone(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Eddystone eddystoneUid.
                     * @member {aruba.iotops.common.v1.Eddystone.IEddyUID|null|undefined} eddystoneUid
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Eddystone.prototype.eddystoneUid = null;

                    /**
                     * Eddystone eddystoneUrl.
                     * @member {aruba.iotops.common.v1.Eddystone.IEddyURL|null|undefined} eddystoneUrl
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Eddystone.prototype.eddystoneUrl = null;

                    /**
                     * Eddystone eddystoneTlm.
                     * @member {aruba.iotops.common.v1.Eddystone.IEddyTLM|null|undefined} eddystoneTlm
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Eddystone.prototype.eddystoneTlm = null;

                    /**
                     * Eddystone eddystoneEid.
                     * @member {aruba.iotops.common.v1.Eddystone.IEddyEID|null|undefined} eddystoneEid
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Eddystone.prototype.eddystoneEid = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Eddystone _eddystoneUid.
                     * @member {"eddystoneUid"|undefined} _eddystoneUid
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Object.defineProperty(Eddystone.prototype, "_eddystoneUid", {
                        get: $util.oneOfGetter($oneOfFields = ["eddystoneUid"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Eddystone _eddystoneUrl.
                     * @member {"eddystoneUrl"|undefined} _eddystoneUrl
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Object.defineProperty(Eddystone.prototype, "_eddystoneUrl", {
                        get: $util.oneOfGetter($oneOfFields = ["eddystoneUrl"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Eddystone _eddystoneTlm.
                     * @member {"eddystoneTlm"|undefined} _eddystoneTlm
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Object.defineProperty(Eddystone.prototype, "_eddystoneTlm", {
                        get: $util.oneOfGetter($oneOfFields = ["eddystoneTlm"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Eddystone _eddystoneEid.
                     * @member {"eddystoneEid"|undefined} _eddystoneEid
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     */
                    Object.defineProperty(Eddystone.prototype, "_eddystoneEid", {
                        get: $util.oneOfGetter($oneOfFields = ["eddystoneEid"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Eddystone instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {aruba.iotops.common.v1.IEddystone=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.Eddystone} Eddystone instance
                     */
                    Eddystone.create = function create(properties) {
                        return new Eddystone(properties);
                    };

                    /**
                     * Encodes the specified Eddystone message. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {aruba.iotops.common.v1.IEddystone} message Eddystone message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Eddystone.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.eddystoneUid != null && Object.hasOwnProperty.call(message, "eddystoneUid"))
                            $root.aruba.iotops.common.v1.Eddystone.EddyUID.encode(message.eddystoneUid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.eddystoneUrl != null && Object.hasOwnProperty.call(message, "eddystoneUrl"))
                            $root.aruba.iotops.common.v1.Eddystone.EddyURL.encode(message.eddystoneUrl, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.eddystoneTlm != null && Object.hasOwnProperty.call(message, "eddystoneTlm"))
                            $root.aruba.iotops.common.v1.Eddystone.EddyTLM.encode(message.eddystoneTlm, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.eddystoneEid != null && Object.hasOwnProperty.call(message, "eddystoneEid"))
                            $root.aruba.iotops.common.v1.Eddystone.EddyEID.encode(message.eddystoneEid, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Eddystone message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {aruba.iotops.common.v1.IEddystone} message Eddystone message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Eddystone.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Eddystone message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.Eddystone} Eddystone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Eddystone.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Eddystone();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.eddystoneUid = $root.aruba.iotops.common.v1.Eddystone.EddyUID.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.eddystoneUrl = $root.aruba.iotops.common.v1.Eddystone.EddyURL.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.eddystoneTlm = $root.aruba.iotops.common.v1.Eddystone.EddyTLM.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.eddystoneEid = $root.aruba.iotops.common.v1.Eddystone.EddyEID.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Eddystone message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.Eddystone} Eddystone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Eddystone.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Eddystone message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Eddystone.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.eddystoneUid != null && message.hasOwnProperty("eddystoneUid")) {
                            properties._eddystoneUid = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Eddystone.EddyUID.verify(message.eddystoneUid);
                                if (error)
                                    return "eddystoneUid." + error;
                            }
                        }
                        if (message.eddystoneUrl != null && message.hasOwnProperty("eddystoneUrl")) {
                            properties._eddystoneUrl = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Eddystone.EddyURL.verify(message.eddystoneUrl);
                                if (error)
                                    return "eddystoneUrl." + error;
                            }
                        }
                        if (message.eddystoneTlm != null && message.hasOwnProperty("eddystoneTlm")) {
                            properties._eddystoneTlm = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Eddystone.EddyTLM.verify(message.eddystoneTlm);
                                if (error)
                                    return "eddystoneTlm." + error;
                            }
                        }
                        if (message.eddystoneEid != null && message.hasOwnProperty("eddystoneEid")) {
                            properties._eddystoneEid = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Eddystone.EddyEID.verify(message.eddystoneEid);
                                if (error)
                                    return "eddystoneEid." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Eddystone message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.Eddystone} Eddystone
                     */
                    Eddystone.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.Eddystone)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.Eddystone();
                        if (object.eddystoneUid != null) {
                            if (typeof object.eddystoneUid !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Eddystone.eddystoneUid: object expected");
                            message.eddystoneUid = $root.aruba.iotops.common.v1.Eddystone.EddyUID.fromObject(object.eddystoneUid);
                        }
                        if (object.eddystoneUrl != null) {
                            if (typeof object.eddystoneUrl !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Eddystone.eddystoneUrl: object expected");
                            message.eddystoneUrl = $root.aruba.iotops.common.v1.Eddystone.EddyURL.fromObject(object.eddystoneUrl);
                        }
                        if (object.eddystoneTlm != null) {
                            if (typeof object.eddystoneTlm !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Eddystone.eddystoneTlm: object expected");
                            message.eddystoneTlm = $root.aruba.iotops.common.v1.Eddystone.EddyTLM.fromObject(object.eddystoneTlm);
                        }
                        if (object.eddystoneEid != null) {
                            if (typeof object.eddystoneEid !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Eddystone.eddystoneEid: object expected");
                            message.eddystoneEid = $root.aruba.iotops.common.v1.Eddystone.EddyEID.fromObject(object.eddystoneEid);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Eddystone message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {aruba.iotops.common.v1.Eddystone} message Eddystone
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Eddystone.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.eddystoneUid != null && message.hasOwnProperty("eddystoneUid")) {
                            object.eddystoneUid = $root.aruba.iotops.common.v1.Eddystone.EddyUID.toObject(message.eddystoneUid, options);
                            if (options.oneofs)
                                object._eddystoneUid = "eddystoneUid";
                        }
                        if (message.eddystoneUrl != null && message.hasOwnProperty("eddystoneUrl")) {
                            object.eddystoneUrl = $root.aruba.iotops.common.v1.Eddystone.EddyURL.toObject(message.eddystoneUrl, options);
                            if (options.oneofs)
                                object._eddystoneUrl = "eddystoneUrl";
                        }
                        if (message.eddystoneTlm != null && message.hasOwnProperty("eddystoneTlm")) {
                            object.eddystoneTlm = $root.aruba.iotops.common.v1.Eddystone.EddyTLM.toObject(message.eddystoneTlm, options);
                            if (options.oneofs)
                                object._eddystoneTlm = "eddystoneTlm";
                        }
                        if (message.eddystoneEid != null && message.hasOwnProperty("eddystoneEid")) {
                            object.eddystoneEid = $root.aruba.iotops.common.v1.Eddystone.EddyEID.toObject(message.eddystoneEid, options);
                            if (options.oneofs)
                                object._eddystoneEid = "eddystoneEid";
                        }
                        return object;
                    };

                    /**
                     * Converts this Eddystone to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Eddystone.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Eddystone
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.Eddystone
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Eddystone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.Eddystone";
                    };

                    Eddystone.EddyUID = (function() {

                        /**
                         * Properties of an EddyUID.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @interface IEddyUID
                         * @property {number|null} [calibratedPower] EddyUID calibratedPower
                         * @property {Uint8Array|null} [eddystoneUidNid] EddyUID eddystoneUidNid
                         * @property {Uint8Array|null} [eddystoneUidBid] EddyUID eddystoneUidBid
                         */

                        /**
                         * Constructs a new EddyUID.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @classdesc Represents an EddyUID.
                         * @implements IEddyUID
                         * @constructor
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyUID=} [properties] Properties to set
                         */
                        function EddyUID(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EddyUID calibratedPower.
                         * @member {number|null|undefined} calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        EddyUID.prototype.calibratedPower = null;

                        /**
                         * EddyUID eddystoneUidNid.
                         * @member {Uint8Array|null|undefined} eddystoneUidNid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        EddyUID.prototype.eddystoneUidNid = null;

                        /**
                         * EddyUID eddystoneUidBid.
                         * @member {Uint8Array|null|undefined} eddystoneUidBid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        EddyUID.prototype.eddystoneUidBid = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * EddyUID _calibratedPower.
                         * @member {"calibratedPower"|undefined} _calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        Object.defineProperty(EddyUID.prototype, "_calibratedPower", {
                            get: $util.oneOfGetter($oneOfFields = ["calibratedPower"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyUID _eddystoneUidNid.
                         * @member {"eddystoneUidNid"|undefined} _eddystoneUidNid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        Object.defineProperty(EddyUID.prototype, "_eddystoneUidNid", {
                            get: $util.oneOfGetter($oneOfFields = ["eddystoneUidNid"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyUID _eddystoneUidBid.
                         * @member {"eddystoneUidBid"|undefined} _eddystoneUidBid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         */
                        Object.defineProperty(EddyUID.prototype, "_eddystoneUidBid", {
                            get: $util.oneOfGetter($oneOfFields = ["eddystoneUidBid"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new EddyUID instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyUID=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyUID} EddyUID instance
                         */
                        EddyUID.create = function create(properties) {
                            return new EddyUID(properties);
                        };

                        /**
                         * Encodes the specified EddyUID message. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyUID.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyUID} message EddyUID message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyUID.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.calibratedPower != null && Object.hasOwnProperty.call(message, "calibratedPower"))
                                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.calibratedPower);
                            if (message.eddystoneUidNid != null && Object.hasOwnProperty.call(message, "eddystoneUidNid"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eddystoneUidNid);
                            if (message.eddystoneUidBid != null && Object.hasOwnProperty.call(message, "eddystoneUidBid"))
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eddystoneUidBid);
                            return writer;
                        };

                        /**
                         * Encodes the specified EddyUID message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyUID.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyUID} message EddyUID message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyUID.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EddyUID message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyUID} EddyUID
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyUID.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Eddystone.EddyUID();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.calibratedPower = reader.sint32();
                                        break;
                                    }
                                case 2: {
                                        message.eddystoneUidNid = reader.bytes();
                                        break;
                                    }
                                case 3: {
                                        message.eddystoneUidBid = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EddyUID message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyUID} EddyUID
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyUID.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EddyUID message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EddyUID.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                properties._calibratedPower = 1;
                                if (!$util.isInteger(message.calibratedPower))
                                    return "calibratedPower: integer expected";
                            }
                            if (message.eddystoneUidNid != null && message.hasOwnProperty("eddystoneUidNid")) {
                                properties._eddystoneUidNid = 1;
                                if (!(message.eddystoneUidNid && typeof message.eddystoneUidNid.length === "number" || $util.isString(message.eddystoneUidNid)))
                                    return "eddystoneUidNid: buffer expected";
                            }
                            if (message.eddystoneUidBid != null && message.hasOwnProperty("eddystoneUidBid")) {
                                properties._eddystoneUidBid = 1;
                                if (!(message.eddystoneUidBid && typeof message.eddystoneUidBid.length === "number" || $util.isString(message.eddystoneUidBid)))
                                    return "eddystoneUidBid: buffer expected";
                            }
                            return null;
                        };

                        /**
                         * Creates an EddyUID message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyUID} EddyUID
                         */
                        EddyUID.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Eddystone.EddyUID)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Eddystone.EddyUID();
                            if (object.calibratedPower != null)
                                message.calibratedPower = object.calibratedPower | 0;
                            if (object.eddystoneUidNid != null)
                                if (typeof object.eddystoneUidNid === "string")
                                    $util.base64.decode(object.eddystoneUidNid, message.eddystoneUidNid = $util.newBuffer($util.base64.length(object.eddystoneUidNid)), 0);
                                else if (object.eddystoneUidNid.length >= 0)
                                    message.eddystoneUidNid = object.eddystoneUidNid;
                            if (object.eddystoneUidBid != null)
                                if (typeof object.eddystoneUidBid === "string")
                                    $util.base64.decode(object.eddystoneUidBid, message.eddystoneUidBid = $util.newBuffer($util.base64.length(object.eddystoneUidBid)), 0);
                                else if (object.eddystoneUidBid.length >= 0)
                                    message.eddystoneUidBid = object.eddystoneUidBid;
                            return message;
                        };

                        /**
                         * Creates a plain object from an EddyUID message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.EddyUID} message EddyUID
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EddyUID.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                object.calibratedPower = message.calibratedPower;
                                if (options.oneofs)
                                    object._calibratedPower = "calibratedPower";
                            }
                            if (message.eddystoneUidNid != null && message.hasOwnProperty("eddystoneUidNid")) {
                                object.eddystoneUidNid = options.bytes === String ? $util.base64.encode(message.eddystoneUidNid, 0, message.eddystoneUidNid.length) : options.bytes === Array ? Array.prototype.slice.call(message.eddystoneUidNid) : message.eddystoneUidNid;
                                if (options.oneofs)
                                    object._eddystoneUidNid = "eddystoneUidNid";
                            }
                            if (message.eddystoneUidBid != null && message.hasOwnProperty("eddystoneUidBid")) {
                                object.eddystoneUidBid = options.bytes === String ? $util.base64.encode(message.eddystoneUidBid, 0, message.eddystoneUidBid.length) : options.bytes === Array ? Array.prototype.slice.call(message.eddystoneUidBid) : message.eddystoneUidBid;
                                if (options.oneofs)
                                    object._eddystoneUidBid = "eddystoneUidBid";
                            }
                            return object;
                        };

                        /**
                         * Converts this EddyUID to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EddyUID.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for EddyUID
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyUID
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        EddyUID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Eddystone.EddyUID";
                        };

                        return EddyUID;
                    })();

                    Eddystone.EddyURL = (function() {

                        /**
                         * Properties of an EddyURL.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @interface IEddyURL
                         * @property {number|null} [calibratedPower] EddyURL calibratedPower
                         * @property {number|null} [eddystoneUrlPrefix] EddyURL eddystoneUrlPrefix
                         * @property {Uint8Array|null} [eddystoneUrlEncodedUrl] EddyURL eddystoneUrlEncodedUrl
                         */

                        /**
                         * Constructs a new EddyURL.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @classdesc Represents an EddyURL.
                         * @implements IEddyURL
                         * @constructor
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyURL=} [properties] Properties to set
                         */
                        function EddyURL(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EddyURL calibratedPower.
                         * @member {number|null|undefined} calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        EddyURL.prototype.calibratedPower = null;

                        /**
                         * EddyURL eddystoneUrlPrefix.
                         * @member {number|null|undefined} eddystoneUrlPrefix
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        EddyURL.prototype.eddystoneUrlPrefix = null;

                        /**
                         * EddyURL eddystoneUrlEncodedUrl.
                         * @member {Uint8Array|null|undefined} eddystoneUrlEncodedUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        EddyURL.prototype.eddystoneUrlEncodedUrl = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * EddyURL _calibratedPower.
                         * @member {"calibratedPower"|undefined} _calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        Object.defineProperty(EddyURL.prototype, "_calibratedPower", {
                            get: $util.oneOfGetter($oneOfFields = ["calibratedPower"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyURL _eddystoneUrlPrefix.
                         * @member {"eddystoneUrlPrefix"|undefined} _eddystoneUrlPrefix
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        Object.defineProperty(EddyURL.prototype, "_eddystoneUrlPrefix", {
                            get: $util.oneOfGetter($oneOfFields = ["eddystoneUrlPrefix"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyURL _eddystoneUrlEncodedUrl.
                         * @member {"eddystoneUrlEncodedUrl"|undefined} _eddystoneUrlEncodedUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         */
                        Object.defineProperty(EddyURL.prototype, "_eddystoneUrlEncodedUrl", {
                            get: $util.oneOfGetter($oneOfFields = ["eddystoneUrlEncodedUrl"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new EddyURL instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyURL=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyURL} EddyURL instance
                         */
                        EddyURL.create = function create(properties) {
                            return new EddyURL(properties);
                        };

                        /**
                         * Encodes the specified EddyURL message. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyURL.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyURL} message EddyURL message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyURL.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.calibratedPower != null && Object.hasOwnProperty.call(message, "calibratedPower"))
                                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.calibratedPower);
                            if (message.eddystoneUrlPrefix != null && Object.hasOwnProperty.call(message, "eddystoneUrlPrefix"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.eddystoneUrlPrefix);
                            if (message.eddystoneUrlEncodedUrl != null && Object.hasOwnProperty.call(message, "eddystoneUrlEncodedUrl"))
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eddystoneUrlEncodedUrl);
                            return writer;
                        };

                        /**
                         * Encodes the specified EddyURL message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyURL.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyURL} message EddyURL message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyURL.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EddyURL message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyURL} EddyURL
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyURL.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Eddystone.EddyURL();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.calibratedPower = reader.sint32();
                                        break;
                                    }
                                case 2: {
                                        message.eddystoneUrlPrefix = reader.uint32();
                                        break;
                                    }
                                case 3: {
                                        message.eddystoneUrlEncodedUrl = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EddyURL message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyURL} EddyURL
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyURL.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EddyURL message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EddyURL.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                properties._calibratedPower = 1;
                                if (!$util.isInteger(message.calibratedPower))
                                    return "calibratedPower: integer expected";
                            }
                            if (message.eddystoneUrlPrefix != null && message.hasOwnProperty("eddystoneUrlPrefix")) {
                                properties._eddystoneUrlPrefix = 1;
                                if (!$util.isInteger(message.eddystoneUrlPrefix))
                                    return "eddystoneUrlPrefix: integer expected";
                            }
                            if (message.eddystoneUrlEncodedUrl != null && message.hasOwnProperty("eddystoneUrlEncodedUrl")) {
                                properties._eddystoneUrlEncodedUrl = 1;
                                if (!(message.eddystoneUrlEncodedUrl && typeof message.eddystoneUrlEncodedUrl.length === "number" || $util.isString(message.eddystoneUrlEncodedUrl)))
                                    return "eddystoneUrlEncodedUrl: buffer expected";
                            }
                            return null;
                        };

                        /**
                         * Creates an EddyURL message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyURL} EddyURL
                         */
                        EddyURL.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Eddystone.EddyURL)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Eddystone.EddyURL();
                            if (object.calibratedPower != null)
                                message.calibratedPower = object.calibratedPower | 0;
                            if (object.eddystoneUrlPrefix != null)
                                message.eddystoneUrlPrefix = object.eddystoneUrlPrefix >>> 0;
                            if (object.eddystoneUrlEncodedUrl != null)
                                if (typeof object.eddystoneUrlEncodedUrl === "string")
                                    $util.base64.decode(object.eddystoneUrlEncodedUrl, message.eddystoneUrlEncodedUrl = $util.newBuffer($util.base64.length(object.eddystoneUrlEncodedUrl)), 0);
                                else if (object.eddystoneUrlEncodedUrl.length >= 0)
                                    message.eddystoneUrlEncodedUrl = object.eddystoneUrlEncodedUrl;
                            return message;
                        };

                        /**
                         * Creates a plain object from an EddyURL message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.EddyURL} message EddyURL
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EddyURL.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                object.calibratedPower = message.calibratedPower;
                                if (options.oneofs)
                                    object._calibratedPower = "calibratedPower";
                            }
                            if (message.eddystoneUrlPrefix != null && message.hasOwnProperty("eddystoneUrlPrefix")) {
                                object.eddystoneUrlPrefix = message.eddystoneUrlPrefix;
                                if (options.oneofs)
                                    object._eddystoneUrlPrefix = "eddystoneUrlPrefix";
                            }
                            if (message.eddystoneUrlEncodedUrl != null && message.hasOwnProperty("eddystoneUrlEncodedUrl")) {
                                object.eddystoneUrlEncodedUrl = options.bytes === String ? $util.base64.encode(message.eddystoneUrlEncodedUrl, 0, message.eddystoneUrlEncodedUrl.length) : options.bytes === Array ? Array.prototype.slice.call(message.eddystoneUrlEncodedUrl) : message.eddystoneUrlEncodedUrl;
                                if (options.oneofs)
                                    object._eddystoneUrlEncodedUrl = "eddystoneUrlEncodedUrl";
                            }
                            return object;
                        };

                        /**
                         * Converts this EddyURL to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EddyURL.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for EddyURL
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyURL
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        EddyURL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Eddystone.EddyURL";
                        };

                        return EddyURL;
                    })();

                    Eddystone.EddyTLM = (function() {

                        /**
                         * Properties of an EddyTLM.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @interface IEddyTLM
                         * @property {number|null} [version] EddyTLM version
                         * @property {number|null} [batteryVoltage] EddyTLM batteryVoltage
                         * @property {number|null} [beaconTemperature] EddyTLM beaconTemperature
                         * @property {number|Long|null} [advCount] EddyTLM advCount
                         * @property {number|Long|null} [secCount] EddyTLM secCount
                         */

                        /**
                         * Constructs a new EddyTLM.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @classdesc Represents an EddyTLM.
                         * @implements IEddyTLM
                         * @constructor
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyTLM=} [properties] Properties to set
                         */
                        function EddyTLM(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EddyTLM version.
                         * @member {number|null|undefined} version
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        EddyTLM.prototype.version = null;

                        /**
                         * EddyTLM batteryVoltage.
                         * @member {number|null|undefined} batteryVoltage
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        EddyTLM.prototype.batteryVoltage = null;

                        /**
                         * EddyTLM beaconTemperature.
                         * @member {number|null|undefined} beaconTemperature
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        EddyTLM.prototype.beaconTemperature = null;

                        /**
                         * EddyTLM advCount.
                         * @member {number|Long|null|undefined} advCount
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        EddyTLM.prototype.advCount = null;

                        /**
                         * EddyTLM secCount.
                         * @member {number|Long|null|undefined} secCount
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        EddyTLM.prototype.secCount = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * EddyTLM _version.
                         * @member {"version"|undefined} _version
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        Object.defineProperty(EddyTLM.prototype, "_version", {
                            get: $util.oneOfGetter($oneOfFields = ["version"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyTLM _batteryVoltage.
                         * @member {"batteryVoltage"|undefined} _batteryVoltage
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        Object.defineProperty(EddyTLM.prototype, "_batteryVoltage", {
                            get: $util.oneOfGetter($oneOfFields = ["batteryVoltage"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyTLM _beaconTemperature.
                         * @member {"beaconTemperature"|undefined} _beaconTemperature
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        Object.defineProperty(EddyTLM.prototype, "_beaconTemperature", {
                            get: $util.oneOfGetter($oneOfFields = ["beaconTemperature"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyTLM _advCount.
                         * @member {"advCount"|undefined} _advCount
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        Object.defineProperty(EddyTLM.prototype, "_advCount", {
                            get: $util.oneOfGetter($oneOfFields = ["advCount"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyTLM _secCount.
                         * @member {"secCount"|undefined} _secCount
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         */
                        Object.defineProperty(EddyTLM.prototype, "_secCount", {
                            get: $util.oneOfGetter($oneOfFields = ["secCount"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new EddyTLM instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyTLM=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyTLM} EddyTLM instance
                         */
                        EddyTLM.create = function create(properties) {
                            return new EddyTLM(properties);
                        };

                        /**
                         * Encodes the specified EddyTLM message. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyTLM.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyTLM} message EddyTLM message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyTLM.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
                            if (message.batteryVoltage != null && Object.hasOwnProperty.call(message, "batteryVoltage"))
                                writer.uint32(/* id 2, wireType 5 =*/21).float(message.batteryVoltage);
                            if (message.beaconTemperature != null && Object.hasOwnProperty.call(message, "beaconTemperature"))
                                writer.uint32(/* id 3, wireType 5 =*/29).float(message.beaconTemperature);
                            if (message.advCount != null && Object.hasOwnProperty.call(message, "advCount"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.advCount);
                            if (message.secCount != null && Object.hasOwnProperty.call(message, "secCount"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.secCount);
                            return writer;
                        };

                        /**
                         * Encodes the specified EddyTLM message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyTLM.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyTLM} message EddyTLM message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyTLM.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EddyTLM message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyTLM} EddyTLM
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyTLM.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Eddystone.EddyTLM();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.version = reader.uint32();
                                        break;
                                    }
                                case 2: {
                                        message.batteryVoltage = reader.float();
                                        break;
                                    }
                                case 3: {
                                        message.beaconTemperature = reader.float();
                                        break;
                                    }
                                case 4: {
                                        message.advCount = reader.uint64();
                                        break;
                                    }
                                case 5: {
                                        message.secCount = reader.uint64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EddyTLM message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyTLM} EddyTLM
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyTLM.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EddyTLM message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EddyTLM.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.version != null && message.hasOwnProperty("version")) {
                                properties._version = 1;
                                if (!$util.isInteger(message.version))
                                    return "version: integer expected";
                            }
                            if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage")) {
                                properties._batteryVoltage = 1;
                                if (typeof message.batteryVoltage !== "number")
                                    return "batteryVoltage: number expected";
                            }
                            if (message.beaconTemperature != null && message.hasOwnProperty("beaconTemperature")) {
                                properties._beaconTemperature = 1;
                                if (typeof message.beaconTemperature !== "number")
                                    return "beaconTemperature: number expected";
                            }
                            if (message.advCount != null && message.hasOwnProperty("advCount")) {
                                properties._advCount = 1;
                                if (!$util.isInteger(message.advCount) && !(message.advCount && $util.isInteger(message.advCount.low) && $util.isInteger(message.advCount.high)))
                                    return "advCount: integer|Long expected";
                            }
                            if (message.secCount != null && message.hasOwnProperty("secCount")) {
                                properties._secCount = 1;
                                if (!$util.isInteger(message.secCount) && !(message.secCount && $util.isInteger(message.secCount.low) && $util.isInteger(message.secCount.high)))
                                    return "secCount: integer|Long expected";
                            }
                            return null;
                        };

                        /**
                         * Creates an EddyTLM message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyTLM} EddyTLM
                         */
                        EddyTLM.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Eddystone.EddyTLM)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Eddystone.EddyTLM();
                            if (object.version != null)
                                message.version = object.version >>> 0;
                            if (object.batteryVoltage != null)
                                message.batteryVoltage = Number(object.batteryVoltage);
                            if (object.beaconTemperature != null)
                                message.beaconTemperature = Number(object.beaconTemperature);
                            if (object.advCount != null)
                                if ($util.Long)
                                    (message.advCount = $util.Long.fromValue(object.advCount)).unsigned = true;
                                else if (typeof object.advCount === "string")
                                    message.advCount = parseInt(object.advCount, 10);
                                else if (typeof object.advCount === "number")
                                    message.advCount = object.advCount;
                                else if (typeof object.advCount === "object")
                                    message.advCount = new $util.LongBits(object.advCount.low >>> 0, object.advCount.high >>> 0).toNumber(true);
                            if (object.secCount != null)
                                if ($util.Long)
                                    (message.secCount = $util.Long.fromValue(object.secCount)).unsigned = true;
                                else if (typeof object.secCount === "string")
                                    message.secCount = parseInt(object.secCount, 10);
                                else if (typeof object.secCount === "number")
                                    message.secCount = object.secCount;
                                else if (typeof object.secCount === "object")
                                    message.secCount = new $util.LongBits(object.secCount.low >>> 0, object.secCount.high >>> 0).toNumber(true);
                            return message;
                        };

                        /**
                         * Creates a plain object from an EddyTLM message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.EddyTLM} message EddyTLM
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EddyTLM.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.version != null && message.hasOwnProperty("version")) {
                                object.version = message.version;
                                if (options.oneofs)
                                    object._version = "version";
                            }
                            if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage")) {
                                object.batteryVoltage = options.json && !isFinite(message.batteryVoltage) ? String(message.batteryVoltage) : message.batteryVoltage;
                                if (options.oneofs)
                                    object._batteryVoltage = "batteryVoltage";
                            }
                            if (message.beaconTemperature != null && message.hasOwnProperty("beaconTemperature")) {
                                object.beaconTemperature = options.json && !isFinite(message.beaconTemperature) ? String(message.beaconTemperature) : message.beaconTemperature;
                                if (options.oneofs)
                                    object._beaconTemperature = "beaconTemperature";
                            }
                            if (message.advCount != null && message.hasOwnProperty("advCount")) {
                                if (typeof message.advCount === "number")
                                    object.advCount = options.longs === String ? String(message.advCount) : message.advCount;
                                else
                                    object.advCount = options.longs === String ? $util.Long.prototype.toString.call(message.advCount) : options.longs === Number ? new $util.LongBits(message.advCount.low >>> 0, message.advCount.high >>> 0).toNumber(true) : message.advCount;
                                if (options.oneofs)
                                    object._advCount = "advCount";
                            }
                            if (message.secCount != null && message.hasOwnProperty("secCount")) {
                                if (typeof message.secCount === "number")
                                    object.secCount = options.longs === String ? String(message.secCount) : message.secCount;
                                else
                                    object.secCount = options.longs === String ? $util.Long.prototype.toString.call(message.secCount) : options.longs === Number ? new $util.LongBits(message.secCount.low >>> 0, message.secCount.high >>> 0).toNumber(true) : message.secCount;
                                if (options.oneofs)
                                    object._secCount = "secCount";
                            }
                            return object;
                        };

                        /**
                         * Converts this EddyTLM to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EddyTLM.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for EddyTLM
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyTLM
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        EddyTLM.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Eddystone.EddyTLM";
                        };

                        return EddyTLM;
                    })();

                    Eddystone.EddyEID = (function() {

                        /**
                         * Properties of an EddyEID.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @interface IEddyEID
                         * @property {number|null} [calibratedPower] EddyEID calibratedPower
                         * @property {Uint8Array|null} [eddystoneEidEid] EddyEID eddystoneEidEid
                         */

                        /**
                         * Constructs a new EddyEID.
                         * @memberof aruba.iotops.common.v1.Eddystone
                         * @classdesc Represents an EddyEID.
                         * @implements IEddyEID
                         * @constructor
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyEID=} [properties] Properties to set
                         */
                        function EddyEID(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EddyEID calibratedPower.
                         * @member {number|null|undefined} calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @instance
                         */
                        EddyEID.prototype.calibratedPower = null;

                        /**
                         * EddyEID eddystoneEidEid.
                         * @member {Uint8Array|null|undefined} eddystoneEidEid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @instance
                         */
                        EddyEID.prototype.eddystoneEidEid = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * EddyEID _calibratedPower.
                         * @member {"calibratedPower"|undefined} _calibratedPower
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @instance
                         */
                        Object.defineProperty(EddyEID.prototype, "_calibratedPower", {
                            get: $util.oneOfGetter($oneOfFields = ["calibratedPower"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * EddyEID _eddystoneEidEid.
                         * @member {"eddystoneEidEid"|undefined} _eddystoneEidEid
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @instance
                         */
                        Object.defineProperty(EddyEID.prototype, "_eddystoneEidEid", {
                            get: $util.oneOfGetter($oneOfFields = ["eddystoneEidEid"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new EddyEID instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyEID=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyEID} EddyEID instance
                         */
                        EddyEID.create = function create(properties) {
                            return new EddyEID(properties);
                        };

                        /**
                         * Encodes the specified EddyEID message. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyEID.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyEID} message EddyEID message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyEID.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.calibratedPower != null && Object.hasOwnProperty.call(message, "calibratedPower"))
                                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.calibratedPower);
                            if (message.eddystoneEidEid != null && Object.hasOwnProperty.call(message, "eddystoneEidEid"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eddystoneEidEid);
                            return writer;
                        };

                        /**
                         * Encodes the specified EddyEID message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Eddystone.EddyEID.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.IEddyEID} message EddyEID message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EddyEID.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EddyEID message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyEID} EddyEID
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyEID.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Eddystone.EddyEID();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.calibratedPower = reader.sint32();
                                        break;
                                    }
                                case 2: {
                                        message.eddystoneEidEid = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EddyEID message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyEID} EddyEID
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EddyEID.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EddyEID message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EddyEID.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                properties._calibratedPower = 1;
                                if (!$util.isInteger(message.calibratedPower))
                                    return "calibratedPower: integer expected";
                            }
                            if (message.eddystoneEidEid != null && message.hasOwnProperty("eddystoneEidEid")) {
                                properties._eddystoneEidEid = 1;
                                if (!(message.eddystoneEidEid && typeof message.eddystoneEidEid.length === "number" || $util.isString(message.eddystoneEidEid)))
                                    return "eddystoneEidEid: buffer expected";
                            }
                            return null;
                        };

                        /**
                         * Creates an EddyEID message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Eddystone.EddyEID} EddyEID
                         */
                        EddyEID.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Eddystone.EddyEID)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Eddystone.EddyEID();
                            if (object.calibratedPower != null)
                                message.calibratedPower = object.calibratedPower | 0;
                            if (object.eddystoneEidEid != null)
                                if (typeof object.eddystoneEidEid === "string")
                                    $util.base64.decode(object.eddystoneEidEid, message.eddystoneEidEid = $util.newBuffer($util.base64.length(object.eddystoneEidEid)), 0);
                                else if (object.eddystoneEidEid.length >= 0)
                                    message.eddystoneEidEid = object.eddystoneEidEid;
                            return message;
                        };

                        /**
                         * Creates a plain object from an EddyEID message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {aruba.iotops.common.v1.Eddystone.EddyEID} message EddyEID
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EddyEID.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.calibratedPower != null && message.hasOwnProperty("calibratedPower")) {
                                object.calibratedPower = message.calibratedPower;
                                if (options.oneofs)
                                    object._calibratedPower = "calibratedPower";
                            }
                            if (message.eddystoneEidEid != null && message.hasOwnProperty("eddystoneEidEid")) {
                                object.eddystoneEidEid = options.bytes === String ? $util.base64.encode(message.eddystoneEidEid, 0, message.eddystoneEidEid.length) : options.bytes === Array ? Array.prototype.slice.call(message.eddystoneEidEid) : message.eddystoneEidEid;
                                if (options.oneofs)
                                    object._eddystoneEidEid = "eddystoneEidEid";
                            }
                            return object;
                        };

                        /**
                         * Converts this EddyEID to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EddyEID.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for EddyEID
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Eddystone.EddyEID
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        EddyEID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Eddystone.EddyEID";
                        };

                        return EddyEID;
                    })();

                    return Eddystone;
                })();

                v1.Sensor = (function() {

                    /**
                     * Properties of a Sensor.
                     * @memberof aruba.iotops.common.v1
                     * @interface ISensor
                     * @property {number|null} [battery] Sensor battery
                     * @property {number|null} [temperatureC] Sensor temperatureC
                     * @property {number|null} [humidity] Sensor humidity
                     * @property {number|null} [voltage] Sensor voltage
                     * @property {number|null} [illumination] Sensor illumination
                     * @property {boolean|null} [motion] Sensor motion
                     * @property {number|null} [current] Sensor current
                     * @property {number|null} [co] Sensor co
                     * @property {number|null} [co2] Sensor co2
                     * @property {number|null} [voc] Sensor voc
                     * @property {number|null} [resistance] Sensor resistance
                     * @property {number|null} [pressure] Sensor pressure
                     * @property {number|null} [distance] Sensor distance
                     * @property {number|null} [capacitance] Sensor capacitance
                     * @property {Array.<aruba.iotops.common.v1.Sensor.Alarm>|null} [alarm] Sensor alarm
                     * @property {aruba.iotops.common.v1.Sensor.IAccelerometer|null} [accelerometer] Sensor accelerometer
                     * @property {aruba.iotops.common.v1.Sensor.IInputs|null} [inputs] Sensor inputs
                     * @property {Array.<aruba.iotops.common.v1.Sensor.IExtended>|null} [extended] Sensor extended
                     */

                    /**
                     * Constructs a new Sensor.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a Sensor.
                     * @implements ISensor
                     * @constructor
                     * @param {aruba.iotops.common.v1.ISensor=} [properties] Properties to set
                     */
                    function Sensor(properties) {
                        this.alarm = [];
                        this.extended = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Sensor battery.
                     * @member {number|null|undefined} battery
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.battery = null;

                    /**
                     * Sensor temperatureC.
                     * @member {number|null|undefined} temperatureC
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.temperatureC = null;

                    /**
                     * Sensor humidity.
                     * @member {number|null|undefined} humidity
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.humidity = null;

                    /**
                     * Sensor voltage.
                     * @member {number|null|undefined} voltage
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.voltage = null;

                    /**
                     * Sensor illumination.
                     * @member {number|null|undefined} illumination
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.illumination = null;

                    /**
                     * Sensor motion.
                     * @member {boolean|null|undefined} motion
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.motion = null;

                    /**
                     * Sensor current.
                     * @member {number|null|undefined} current
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.current = null;

                    /**
                     * Sensor co.
                     * @member {number|null|undefined} co
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.co = null;

                    /**
                     * Sensor co2.
                     * @member {number|null|undefined} co2
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.co2 = null;

                    /**
                     * Sensor voc.
                     * @member {number|null|undefined} voc
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.voc = null;

                    /**
                     * Sensor resistance.
                     * @member {number|null|undefined} resistance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.resistance = null;

                    /**
                     * Sensor pressure.
                     * @member {number|null|undefined} pressure
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.pressure = null;

                    /**
                     * Sensor distance.
                     * @member {number|null|undefined} distance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.distance = null;

                    /**
                     * Sensor capacitance.
                     * @member {number|null|undefined} capacitance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.capacitance = null;

                    /**
                     * Sensor alarm.
                     * @member {Array.<aruba.iotops.common.v1.Sensor.Alarm>} alarm
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.alarm = $util.emptyArray;

                    /**
                     * Sensor accelerometer.
                     * @member {aruba.iotops.common.v1.Sensor.IAccelerometer|null|undefined} accelerometer
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.accelerometer = null;

                    /**
                     * Sensor inputs.
                     * @member {aruba.iotops.common.v1.Sensor.IInputs|null|undefined} inputs
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.inputs = null;

                    /**
                     * Sensor extended.
                     * @member {Array.<aruba.iotops.common.v1.Sensor.IExtended>} extended
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Sensor.prototype.extended = $util.emptyArray;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Sensor _battery.
                     * @member {"battery"|undefined} _battery
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_battery", {
                        get: $util.oneOfGetter($oneOfFields = ["battery"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _temperatureC.
                     * @member {"temperatureC"|undefined} _temperatureC
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_temperatureC", {
                        get: $util.oneOfGetter($oneOfFields = ["temperatureC"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _humidity.
                     * @member {"humidity"|undefined} _humidity
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_humidity", {
                        get: $util.oneOfGetter($oneOfFields = ["humidity"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _voltage.
                     * @member {"voltage"|undefined} _voltage
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_voltage", {
                        get: $util.oneOfGetter($oneOfFields = ["voltage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _illumination.
                     * @member {"illumination"|undefined} _illumination
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_illumination", {
                        get: $util.oneOfGetter($oneOfFields = ["illumination"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _motion.
                     * @member {"motion"|undefined} _motion
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_motion", {
                        get: $util.oneOfGetter($oneOfFields = ["motion"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _current.
                     * @member {"current"|undefined} _current
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_current", {
                        get: $util.oneOfGetter($oneOfFields = ["current"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _co.
                     * @member {"co"|undefined} _co
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_co", {
                        get: $util.oneOfGetter($oneOfFields = ["co"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _co2.
                     * @member {"co2"|undefined} _co2
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_co2", {
                        get: $util.oneOfGetter($oneOfFields = ["co2"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _voc.
                     * @member {"voc"|undefined} _voc
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_voc", {
                        get: $util.oneOfGetter($oneOfFields = ["voc"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _resistance.
                     * @member {"resistance"|undefined} _resistance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_resistance", {
                        get: $util.oneOfGetter($oneOfFields = ["resistance"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _pressure.
                     * @member {"pressure"|undefined} _pressure
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_pressure", {
                        get: $util.oneOfGetter($oneOfFields = ["pressure"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _distance.
                     * @member {"distance"|undefined} _distance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_distance", {
                        get: $util.oneOfGetter($oneOfFields = ["distance"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _capacitance.
                     * @member {"capacitance"|undefined} _capacitance
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_capacitance", {
                        get: $util.oneOfGetter($oneOfFields = ["capacitance"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _accelerometer.
                     * @member {"accelerometer"|undefined} _accelerometer
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_accelerometer", {
                        get: $util.oneOfGetter($oneOfFields = ["accelerometer"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Sensor _inputs.
                     * @member {"inputs"|undefined} _inputs
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     */
                    Object.defineProperty(Sensor.prototype, "_inputs", {
                        get: $util.oneOfGetter($oneOfFields = ["inputs"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Sensor instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {aruba.iotops.common.v1.ISensor=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.Sensor} Sensor instance
                     */
                    Sensor.create = function create(properties) {
                        return new Sensor(properties);
                    };

                    /**
                     * Encodes the specified Sensor message. Does not implicitly {@link aruba.iotops.common.v1.Sensor.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {aruba.iotops.common.v1.ISensor} message Sensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Sensor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.battery != null && Object.hasOwnProperty.call(message, "battery"))
                            writer.uint32(/* id 1, wireType 5 =*/13).float(message.battery);
                        if (message.temperatureC != null && Object.hasOwnProperty.call(message, "temperatureC"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.temperatureC);
                        if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.humidity);
                        if (message.voltage != null && Object.hasOwnProperty.call(message, "voltage"))
                            writer.uint32(/* id 4, wireType 5 =*/37).float(message.voltage);
                        if (message.illumination != null && Object.hasOwnProperty.call(message, "illumination"))
                            writer.uint32(/* id 5, wireType 5 =*/45).float(message.illumination);
                        if (message.motion != null && Object.hasOwnProperty.call(message, "motion"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.motion);
                        if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                            writer.uint32(/* id 7, wireType 5 =*/61).float(message.current);
                        if (message.co != null && Object.hasOwnProperty.call(message, "co"))
                            writer.uint32(/* id 8, wireType 5 =*/69).float(message.co);
                        if (message.co2 != null && Object.hasOwnProperty.call(message, "co2"))
                            writer.uint32(/* id 9, wireType 5 =*/77).float(message.co2);
                        if (message.voc != null && Object.hasOwnProperty.call(message, "voc"))
                            writer.uint32(/* id 10, wireType 5 =*/85).float(message.voc);
                        if (message.resistance != null && Object.hasOwnProperty.call(message, "resistance"))
                            writer.uint32(/* id 11, wireType 5 =*/93).float(message.resistance);
                        if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
                            writer.uint32(/* id 12, wireType 5 =*/101).float(message.pressure);
                        if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                            writer.uint32(/* id 13, wireType 5 =*/109).float(message.distance);
                        if (message.capacitance != null && Object.hasOwnProperty.call(message, "capacitance"))
                            writer.uint32(/* id 14, wireType 5 =*/117).float(message.capacitance);
                        if (message.alarm != null && message.alarm.length) {
                            writer.uint32(/* id 15, wireType 2 =*/122).fork();
                            for (var i = 0; i < message.alarm.length; ++i)
                                writer.int32(message.alarm[i]);
                            writer.ldelim();
                        }
                        if (message.accelerometer != null && Object.hasOwnProperty.call(message, "accelerometer"))
                            $root.aruba.iotops.common.v1.Sensor.Accelerometer.encode(message.accelerometer, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                        if (message.inputs != null && Object.hasOwnProperty.call(message, "inputs"))
                            $root.aruba.iotops.common.v1.Sensor.Inputs.encode(message.inputs, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                        if (message.extended != null && message.extended.length)
                            for (var i = 0; i < message.extended.length; ++i)
                                $root.aruba.iotops.common.v1.Sensor.Extended.encode(message.extended[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Sensor message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Sensor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {aruba.iotops.common.v1.ISensor} message Sensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Sensor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Sensor message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.Sensor} Sensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Sensor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Sensor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.battery = reader.float();
                                    break;
                                }
                            case 2: {
                                    message.temperatureC = reader.float();
                                    break;
                                }
                            case 3: {
                                    message.humidity = reader.float();
                                    break;
                                }
                            case 4: {
                                    message.voltage = reader.float();
                                    break;
                                }
                            case 5: {
                                    message.illumination = reader.float();
                                    break;
                                }
                            case 6: {
                                    message.motion = reader.bool();
                                    break;
                                }
                            case 7: {
                                    message.current = reader.float();
                                    break;
                                }
                            case 8: {
                                    message.co = reader.float();
                                    break;
                                }
                            case 9: {
                                    message.co2 = reader.float();
                                    break;
                                }
                            case 10: {
                                    message.voc = reader.float();
                                    break;
                                }
                            case 11: {
                                    message.resistance = reader.float();
                                    break;
                                }
                            case 12: {
                                    message.pressure = reader.float();
                                    break;
                                }
                            case 13: {
                                    message.distance = reader.float();
                                    break;
                                }
                            case 14: {
                                    message.capacitance = reader.float();
                                    break;
                                }
                            case 15: {
                                    if (!(message.alarm && message.alarm.length))
                                        message.alarm = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.alarm.push(reader.int32());
                                    } else
                                        message.alarm.push(reader.int32());
                                    break;
                                }
                            case 16: {
                                    message.accelerometer = $root.aruba.iotops.common.v1.Sensor.Accelerometer.decode(reader, reader.uint32());
                                    break;
                                }
                            case 17: {
                                    message.inputs = $root.aruba.iotops.common.v1.Sensor.Inputs.decode(reader, reader.uint32());
                                    break;
                                }
                            case 18: {
                                    if (!(message.extended && message.extended.length))
                                        message.extended = [];
                                    message.extended.push($root.aruba.iotops.common.v1.Sensor.Extended.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Sensor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.Sensor} Sensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Sensor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Sensor message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Sensor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.battery != null && message.hasOwnProperty("battery")) {
                            properties._battery = 1;
                            if (typeof message.battery !== "number")
                                return "battery: number expected";
                        }
                        if (message.temperatureC != null && message.hasOwnProperty("temperatureC")) {
                            properties._temperatureC = 1;
                            if (typeof message.temperatureC !== "number")
                                return "temperatureC: number expected";
                        }
                        if (message.humidity != null && message.hasOwnProperty("humidity")) {
                            properties._humidity = 1;
                            if (typeof message.humidity !== "number")
                                return "humidity: number expected";
                        }
                        if (message.voltage != null && message.hasOwnProperty("voltage")) {
                            properties._voltage = 1;
                            if (typeof message.voltage !== "number")
                                return "voltage: number expected";
                        }
                        if (message.illumination != null && message.hasOwnProperty("illumination")) {
                            properties._illumination = 1;
                            if (typeof message.illumination !== "number")
                                return "illumination: number expected";
                        }
                        if (message.motion != null && message.hasOwnProperty("motion")) {
                            properties._motion = 1;
                            if (typeof message.motion !== "boolean")
                                return "motion: boolean expected";
                        }
                        if (message.current != null && message.hasOwnProperty("current")) {
                            properties._current = 1;
                            if (typeof message.current !== "number")
                                return "current: number expected";
                        }
                        if (message.co != null && message.hasOwnProperty("co")) {
                            properties._co = 1;
                            if (typeof message.co !== "number")
                                return "co: number expected";
                        }
                        if (message.co2 != null && message.hasOwnProperty("co2")) {
                            properties._co2 = 1;
                            if (typeof message.co2 !== "number")
                                return "co2: number expected";
                        }
                        if (message.voc != null && message.hasOwnProperty("voc")) {
                            properties._voc = 1;
                            if (typeof message.voc !== "number")
                                return "voc: number expected";
                        }
                        if (message.resistance != null && message.hasOwnProperty("resistance")) {
                            properties._resistance = 1;
                            if (typeof message.resistance !== "number")
                                return "resistance: number expected";
                        }
                        if (message.pressure != null && message.hasOwnProperty("pressure")) {
                            properties._pressure = 1;
                            if (typeof message.pressure !== "number")
                                return "pressure: number expected";
                        }
                        if (message.distance != null && message.hasOwnProperty("distance")) {
                            properties._distance = 1;
                            if (typeof message.distance !== "number")
                                return "distance: number expected";
                        }
                        if (message.capacitance != null && message.hasOwnProperty("capacitance")) {
                            properties._capacitance = 1;
                            if (typeof message.capacitance !== "number")
                                return "capacitance: number expected";
                        }
                        if (message.alarm != null && message.hasOwnProperty("alarm")) {
                            if (!Array.isArray(message.alarm))
                                return "alarm: array expected";
                            for (var i = 0; i < message.alarm.length; ++i)
                                switch (message.alarm[i]) {
                                default:
                                    return "alarm: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    break;
                                }
                        }
                        if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
                            properties._accelerometer = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Sensor.Accelerometer.verify(message.accelerometer);
                                if (error)
                                    return "accelerometer." + error;
                            }
                        }
                        if (message.inputs != null && message.hasOwnProperty("inputs")) {
                            properties._inputs = 1;
                            {
                                var error = $root.aruba.iotops.common.v1.Sensor.Inputs.verify(message.inputs);
                                if (error)
                                    return "inputs." + error;
                            }
                        }
                        if (message.extended != null && message.hasOwnProperty("extended")) {
                            if (!Array.isArray(message.extended))
                                return "extended: array expected";
                            for (var i = 0; i < message.extended.length; ++i) {
                                var error = $root.aruba.iotops.common.v1.Sensor.Extended.verify(message.extended[i]);
                                if (error)
                                    return "extended." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Sensor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.Sensor} Sensor
                     */
                    Sensor.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.Sensor)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.Sensor();
                        if (object.battery != null)
                            message.battery = Number(object.battery);
                        if (object.temperatureC != null)
                            message.temperatureC = Number(object.temperatureC);
                        if (object.humidity != null)
                            message.humidity = Number(object.humidity);
                        if (object.voltage != null)
                            message.voltage = Number(object.voltage);
                        if (object.illumination != null)
                            message.illumination = Number(object.illumination);
                        if (object.motion != null)
                            message.motion = Boolean(object.motion);
                        if (object.current != null)
                            message.current = Number(object.current);
                        if (object.co != null)
                            message.co = Number(object.co);
                        if (object.co2 != null)
                            message.co2 = Number(object.co2);
                        if (object.voc != null)
                            message.voc = Number(object.voc);
                        if (object.resistance != null)
                            message.resistance = Number(object.resistance);
                        if (object.pressure != null)
                            message.pressure = Number(object.pressure);
                        if (object.distance != null)
                            message.distance = Number(object.distance);
                        if (object.capacitance != null)
                            message.capacitance = Number(object.capacitance);
                        if (object.alarm) {
                            if (!Array.isArray(object.alarm))
                                throw TypeError(".aruba.iotops.common.v1.Sensor.alarm: array expected");
                            message.alarm = [];
                            for (var i = 0; i < object.alarm.length; ++i)
                                switch (object.alarm[i]) {
                                default:
                                    if (typeof object.alarm[i] === "number") {
                                        message.alarm[i] = object.alarm[i];
                                        break;
                                    }
                                case "ALARM_UNSPECIFIED":
                                case 0:
                                    message.alarm[i] = 0;
                                    break;
                                case "ALARM_WATER":
                                case 1:
                                    message.alarm[i] = 1;
                                    break;
                                case "ALARM_SMOKE":
                                case 2:
                                    message.alarm[i] = 2;
                                    break;
                                case "ALARM_FIRE":
                                case 3:
                                    message.alarm[i] = 3;
                                    break;
                                case "ALARM_GLASS_BREAK":
                                case 4:
                                    message.alarm[i] = 4;
                                    break;
                                case "ALARM_INTRUSION":
                                case 5:
                                    message.alarm[i] = 5;
                                    break;
                                }
                        }
                        if (object.accelerometer != null) {
                            if (typeof object.accelerometer !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Sensor.accelerometer: object expected");
                            message.accelerometer = $root.aruba.iotops.common.v1.Sensor.Accelerometer.fromObject(object.accelerometer);
                        }
                        if (object.inputs != null) {
                            if (typeof object.inputs !== "object")
                                throw TypeError(".aruba.iotops.common.v1.Sensor.inputs: object expected");
                            message.inputs = $root.aruba.iotops.common.v1.Sensor.Inputs.fromObject(object.inputs);
                        }
                        if (object.extended) {
                            if (!Array.isArray(object.extended))
                                throw TypeError(".aruba.iotops.common.v1.Sensor.extended: array expected");
                            message.extended = [];
                            for (var i = 0; i < object.extended.length; ++i) {
                                if (typeof object.extended[i] !== "object")
                                    throw TypeError(".aruba.iotops.common.v1.Sensor.extended: object expected");
                                message.extended[i] = $root.aruba.iotops.common.v1.Sensor.Extended.fromObject(object.extended[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Sensor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {aruba.iotops.common.v1.Sensor} message Sensor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Sensor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.alarm = [];
                            object.extended = [];
                        }
                        if (message.battery != null && message.hasOwnProperty("battery")) {
                            object.battery = options.json && !isFinite(message.battery) ? String(message.battery) : message.battery;
                            if (options.oneofs)
                                object._battery = "battery";
                        }
                        if (message.temperatureC != null && message.hasOwnProperty("temperatureC")) {
                            object.temperatureC = options.json && !isFinite(message.temperatureC) ? String(message.temperatureC) : message.temperatureC;
                            if (options.oneofs)
                                object._temperatureC = "temperatureC";
                        }
                        if (message.humidity != null && message.hasOwnProperty("humidity")) {
                            object.humidity = options.json && !isFinite(message.humidity) ? String(message.humidity) : message.humidity;
                            if (options.oneofs)
                                object._humidity = "humidity";
                        }
                        if (message.voltage != null && message.hasOwnProperty("voltage")) {
                            object.voltage = options.json && !isFinite(message.voltage) ? String(message.voltage) : message.voltage;
                            if (options.oneofs)
                                object._voltage = "voltage";
                        }
                        if (message.illumination != null && message.hasOwnProperty("illumination")) {
                            object.illumination = options.json && !isFinite(message.illumination) ? String(message.illumination) : message.illumination;
                            if (options.oneofs)
                                object._illumination = "illumination";
                        }
                        if (message.motion != null && message.hasOwnProperty("motion")) {
                            object.motion = message.motion;
                            if (options.oneofs)
                                object._motion = "motion";
                        }
                        if (message.current != null && message.hasOwnProperty("current")) {
                            object.current = options.json && !isFinite(message.current) ? String(message.current) : message.current;
                            if (options.oneofs)
                                object._current = "current";
                        }
                        if (message.co != null && message.hasOwnProperty("co")) {
                            object.co = options.json && !isFinite(message.co) ? String(message.co) : message.co;
                            if (options.oneofs)
                                object._co = "co";
                        }
                        if (message.co2 != null && message.hasOwnProperty("co2")) {
                            object.co2 = options.json && !isFinite(message.co2) ? String(message.co2) : message.co2;
                            if (options.oneofs)
                                object._co2 = "co2";
                        }
                        if (message.voc != null && message.hasOwnProperty("voc")) {
                            object.voc = options.json && !isFinite(message.voc) ? String(message.voc) : message.voc;
                            if (options.oneofs)
                                object._voc = "voc";
                        }
                        if (message.resistance != null && message.hasOwnProperty("resistance")) {
                            object.resistance = options.json && !isFinite(message.resistance) ? String(message.resistance) : message.resistance;
                            if (options.oneofs)
                                object._resistance = "resistance";
                        }
                        if (message.pressure != null && message.hasOwnProperty("pressure")) {
                            object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
                            if (options.oneofs)
                                object._pressure = "pressure";
                        }
                        if (message.distance != null && message.hasOwnProperty("distance")) {
                            object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                            if (options.oneofs)
                                object._distance = "distance";
                        }
                        if (message.capacitance != null && message.hasOwnProperty("capacitance")) {
                            object.capacitance = options.json && !isFinite(message.capacitance) ? String(message.capacitance) : message.capacitance;
                            if (options.oneofs)
                                object._capacitance = "capacitance";
                        }
                        if (message.alarm && message.alarm.length) {
                            object.alarm = [];
                            for (var j = 0; j < message.alarm.length; ++j)
                                object.alarm[j] = options.enums === String ? $root.aruba.iotops.common.v1.Sensor.Alarm[message.alarm[j]] === undefined ? message.alarm[j] : $root.aruba.iotops.common.v1.Sensor.Alarm[message.alarm[j]] : message.alarm[j];
                        }
                        if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
                            object.accelerometer = $root.aruba.iotops.common.v1.Sensor.Accelerometer.toObject(message.accelerometer, options);
                            if (options.oneofs)
                                object._accelerometer = "accelerometer";
                        }
                        if (message.inputs != null && message.hasOwnProperty("inputs")) {
                            object.inputs = $root.aruba.iotops.common.v1.Sensor.Inputs.toObject(message.inputs, options);
                            if (options.oneofs)
                                object._inputs = "inputs";
                        }
                        if (message.extended && message.extended.length) {
                            object.extended = [];
                            for (var j = 0; j < message.extended.length; ++j)
                                object.extended[j] = $root.aruba.iotops.common.v1.Sensor.Extended.toObject(message.extended[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Sensor to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Sensor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Sensor
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.Sensor
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Sensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.Sensor";
                    };

                    /**
                     * Alarm enum.
                     * @name aruba.iotops.common.v1.Sensor.Alarm
                     * @enum {number}
                     * @property {number} ALARM_UNSPECIFIED=0 ALARM_UNSPECIFIED value
                     * @property {number} ALARM_WATER=1 ALARM_WATER value
                     * @property {number} ALARM_SMOKE=2 ALARM_SMOKE value
                     * @property {number} ALARM_FIRE=3 ALARM_FIRE value
                     * @property {number} ALARM_GLASS_BREAK=4 ALARM_GLASS_BREAK value
                     * @property {number} ALARM_INTRUSION=5 ALARM_INTRUSION value
                     */
                    Sensor.Alarm = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ALARM_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "ALARM_WATER"] = 1;
                        values[valuesById[2] = "ALARM_SMOKE"] = 2;
                        values[valuesById[3] = "ALARM_FIRE"] = 3;
                        values[valuesById[4] = "ALARM_GLASS_BREAK"] = 4;
                        values[valuesById[5] = "ALARM_INTRUSION"] = 5;
                        return values;
                    })();

                    Sensor.Accelerometer = (function() {

                        /**
                         * Properties of an Accelerometer.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @interface IAccelerometer
                         * @property {number|null} [x] Accelerometer x
                         * @property {number|null} [y] Accelerometer y
                         * @property {number|null} [z] Accelerometer z
                         * @property {aruba.iotops.common.v1.Sensor.Accelerometer.AccelStatus|null} [accelStatus] Accelerometer accelStatus
                         */

                        /**
                         * Constructs a new Accelerometer.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @classdesc Represents an Accelerometer.
                         * @implements IAccelerometer
                         * @constructor
                         * @param {aruba.iotops.common.v1.Sensor.IAccelerometer=} [properties] Properties to set
                         */
                        function Accelerometer(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Accelerometer x.
                         * @member {number|null|undefined} x
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Accelerometer.prototype.x = null;

                        /**
                         * Accelerometer y.
                         * @member {number|null|undefined} y
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Accelerometer.prototype.y = null;

                        /**
                         * Accelerometer z.
                         * @member {number|null|undefined} z
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Accelerometer.prototype.z = null;

                        /**
                         * Accelerometer accelStatus.
                         * @member {aruba.iotops.common.v1.Sensor.Accelerometer.AccelStatus|null|undefined} accelStatus
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Accelerometer.prototype.accelStatus = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Accelerometer _x.
                         * @member {"x"|undefined} _x
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Object.defineProperty(Accelerometer.prototype, "_x", {
                            get: $util.oneOfGetter($oneOfFields = ["x"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Accelerometer _y.
                         * @member {"y"|undefined} _y
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Object.defineProperty(Accelerometer.prototype, "_y", {
                            get: $util.oneOfGetter($oneOfFields = ["y"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Accelerometer _z.
                         * @member {"z"|undefined} _z
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Object.defineProperty(Accelerometer.prototype, "_z", {
                            get: $util.oneOfGetter($oneOfFields = ["z"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Accelerometer _accelStatus.
                         * @member {"accelStatus"|undefined} _accelStatus
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         */
                        Object.defineProperty(Accelerometer.prototype, "_accelStatus", {
                            get: $util.oneOfGetter($oneOfFields = ["accelStatus"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Accelerometer instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IAccelerometer=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Sensor.Accelerometer} Accelerometer instance
                         */
                        Accelerometer.create = function create(properties) {
                            return new Accelerometer(properties);
                        };

                        /**
                         * Encodes the specified Accelerometer message. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Accelerometer.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IAccelerometer} message Accelerometer message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Accelerometer.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
                            if (message.accelStatus != null && Object.hasOwnProperty.call(message, "accelStatus"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.accelStatus);
                            return writer;
                        };

                        /**
                         * Encodes the specified Accelerometer message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Accelerometer.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IAccelerometer} message Accelerometer message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Accelerometer.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Accelerometer message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Sensor.Accelerometer} Accelerometer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Accelerometer.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Sensor.Accelerometer();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.x = reader.float();
                                        break;
                                    }
                                case 2: {
                                        message.y = reader.float();
                                        break;
                                    }
                                case 3: {
                                        message.z = reader.float();
                                        break;
                                    }
                                case 4: {
                                        message.accelStatus = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Accelerometer message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Sensor.Accelerometer} Accelerometer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Accelerometer.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Accelerometer message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Accelerometer.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.x != null && message.hasOwnProperty("x")) {
                                properties._x = 1;
                                if (typeof message.x !== "number")
                                    return "x: number expected";
                            }
                            if (message.y != null && message.hasOwnProperty("y")) {
                                properties._y = 1;
                                if (typeof message.y !== "number")
                                    return "y: number expected";
                            }
                            if (message.z != null && message.hasOwnProperty("z")) {
                                properties._z = 1;
                                if (typeof message.z !== "number")
                                    return "z: number expected";
                            }
                            if (message.accelStatus != null && message.hasOwnProperty("accelStatus")) {
                                properties._accelStatus = 1;
                                switch (message.accelStatus) {
                                default:
                                    return "accelStatus: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates an Accelerometer message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Sensor.Accelerometer} Accelerometer
                         */
                        Accelerometer.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Sensor.Accelerometer)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Sensor.Accelerometer();
                            if (object.x != null)
                                message.x = Number(object.x);
                            if (object.y != null)
                                message.y = Number(object.y);
                            if (object.z != null)
                                message.z = Number(object.z);
                            switch (object.accelStatus) {
                            default:
                                if (typeof object.accelStatus === "number") {
                                    message.accelStatus = object.accelStatus;
                                    break;
                                }
                                break;
                            case "ACCEL_STATUS_UNSPECIFIED":
                            case 0:
                                message.accelStatus = 0;
                                break;
                            case "ACCEL_STATUS_OK":
                            case 1:
                                message.accelStatus = 1;
                                break;
                            case "ACCEL_STATUS_OUT_OF_RANGE":
                            case 2:
                                message.accelStatus = 2;
                                break;
                            case "ACCEL_STATUS_THRESHOLD1":
                            case 3:
                                message.accelStatus = 3;
                                break;
                            case "ACCEL_STATUS_THRESHOLD2":
                            case 4:
                                message.accelStatus = 4;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an Accelerometer message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.Accelerometer} message Accelerometer
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Accelerometer.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.x != null && message.hasOwnProperty("x")) {
                                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                                if (options.oneofs)
                                    object._x = "x";
                            }
                            if (message.y != null && message.hasOwnProperty("y")) {
                                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                                if (options.oneofs)
                                    object._y = "y";
                            }
                            if (message.z != null && message.hasOwnProperty("z")) {
                                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                                if (options.oneofs)
                                    object._z = "z";
                            }
                            if (message.accelStatus != null && message.hasOwnProperty("accelStatus")) {
                                object.accelStatus = options.enums === String ? $root.aruba.iotops.common.v1.Sensor.Accelerometer.AccelStatus[message.accelStatus] === undefined ? message.accelStatus : $root.aruba.iotops.common.v1.Sensor.Accelerometer.AccelStatus[message.accelStatus] : message.accelStatus;
                                if (options.oneofs)
                                    object._accelStatus = "accelStatus";
                            }
                            return object;
                        };

                        /**
                         * Converts this Accelerometer to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Accelerometer.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Accelerometer
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Sensor.Accelerometer
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Accelerometer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Sensor.Accelerometer";
                        };

                        /**
                         * AccelStatus enum.
                         * @name aruba.iotops.common.v1.Sensor.Accelerometer.AccelStatus
                         * @enum {number}
                         * @property {number} ACCEL_STATUS_UNSPECIFIED=0 ACCEL_STATUS_UNSPECIFIED value
                         * @property {number} ACCEL_STATUS_OK=1 ACCEL_STATUS_OK value
                         * @property {number} ACCEL_STATUS_OUT_OF_RANGE=2 ACCEL_STATUS_OUT_OF_RANGE value
                         * @property {number} ACCEL_STATUS_THRESHOLD1=3 ACCEL_STATUS_THRESHOLD1 value
                         * @property {number} ACCEL_STATUS_THRESHOLD2=4 ACCEL_STATUS_THRESHOLD2 value
                         */
                        Accelerometer.AccelStatus = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "ACCEL_STATUS_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "ACCEL_STATUS_OK"] = 1;
                            values[valuesById[2] = "ACCEL_STATUS_OUT_OF_RANGE"] = 2;
                            values[valuesById[3] = "ACCEL_STATUS_THRESHOLD1"] = 3;
                            values[valuesById[4] = "ACCEL_STATUS_THRESHOLD2"] = 4;
                            return values;
                        })();

                        return Accelerometer;
                    })();

                    Sensor.Inputs = (function() {

                        /**
                         * Properties of an Inputs.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @interface IInputs
                         * @property {Array.<aruba.iotops.common.v1.Sensor.Inputs.SwitchState>|null} [switchIndexes] Inputs switchIndexes
                         */

                        /**
                         * Constructs a new Inputs.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @classdesc Represents an Inputs.
                         * @implements IInputs
                         * @constructor
                         * @param {aruba.iotops.common.v1.Sensor.IInputs=} [properties] Properties to set
                         */
                        function Inputs(properties) {
                            this.switchIndexes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Inputs switchIndexes.
                         * @member {Array.<aruba.iotops.common.v1.Sensor.Inputs.SwitchState>} switchIndexes
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @instance
                         */
                        Inputs.prototype.switchIndexes = $util.emptyArray;

                        /**
                         * Creates a new Inputs instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IInputs=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Sensor.Inputs} Inputs instance
                         */
                        Inputs.create = function create(properties) {
                            return new Inputs(properties);
                        };

                        /**
                         * Encodes the specified Inputs message. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Inputs.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IInputs} message Inputs message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Inputs.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.switchIndexes != null && message.switchIndexes.length) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                                for (var i = 0; i < message.switchIndexes.length; ++i)
                                    writer.int32(message.switchIndexes[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };

                        /**
                         * Encodes the specified Inputs message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Inputs.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IInputs} message Inputs message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Inputs.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Inputs message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Sensor.Inputs} Inputs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Inputs.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Sensor.Inputs();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.switchIndexes && message.switchIndexes.length))
                                            message.switchIndexes = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.switchIndexes.push(reader.int32());
                                        } else
                                            message.switchIndexes.push(reader.int32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Inputs message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Sensor.Inputs} Inputs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Inputs.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Inputs message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Inputs.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.switchIndexes != null && message.hasOwnProperty("switchIndexes")) {
                                if (!Array.isArray(message.switchIndexes))
                                    return "switchIndexes: array expected";
                                for (var i = 0; i < message.switchIndexes.length; ++i)
                                    switch (message.switchIndexes[i]) {
                                    default:
                                        return "switchIndexes: enum value[] expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                        break;
                                    }
                            }
                            return null;
                        };

                        /**
                         * Creates an Inputs message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Sensor.Inputs} Inputs
                         */
                        Inputs.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Sensor.Inputs)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Sensor.Inputs();
                            if (object.switchIndexes) {
                                if (!Array.isArray(object.switchIndexes))
                                    throw TypeError(".aruba.iotops.common.v1.Sensor.Inputs.switchIndexes: array expected");
                                message.switchIndexes = [];
                                for (var i = 0; i < object.switchIndexes.length; ++i)
                                    switch (object.switchIndexes[i]) {
                                    default:
                                        if (typeof object.switchIndexes[i] === "number") {
                                            message.switchIndexes[i] = object.switchIndexes[i];
                                            break;
                                        }
                                    case "SWITCH_STATE_UNSPECIFIED":
                                    case 0:
                                        message.switchIndexes[i] = 0;
                                        break;
                                    case "SWITCH_STATE_UNKNOWN":
                                    case 1:
                                        message.switchIndexes[i] = 1;
                                        break;
                                    case "SWITCH_STATE_ON":
                                    case 2:
                                        message.switchIndexes[i] = 2;
                                        break;
                                    case "SWITCH_STATE_OFF":
                                    case 3:
                                        message.switchIndexes[i] = 3;
                                        break;
                                    }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an Inputs message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.Inputs} message Inputs
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Inputs.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.switchIndexes = [];
                            if (message.switchIndexes && message.switchIndexes.length) {
                                object.switchIndexes = [];
                                for (var j = 0; j < message.switchIndexes.length; ++j)
                                    object.switchIndexes[j] = options.enums === String ? $root.aruba.iotops.common.v1.Sensor.Inputs.SwitchState[message.switchIndexes[j]] === undefined ? message.switchIndexes[j] : $root.aruba.iotops.common.v1.Sensor.Inputs.SwitchState[message.switchIndexes[j]] : message.switchIndexes[j];
                            }
                            return object;
                        };

                        /**
                         * Converts this Inputs to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Inputs.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Inputs
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Sensor.Inputs
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Inputs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Sensor.Inputs";
                        };

                        /**
                         * SwitchState enum.
                         * @name aruba.iotops.common.v1.Sensor.Inputs.SwitchState
                         * @enum {number}
                         * @property {number} SWITCH_STATE_UNSPECIFIED=0 SWITCH_STATE_UNSPECIFIED value
                         * @property {number} SWITCH_STATE_UNKNOWN=1 SWITCH_STATE_UNKNOWN value
                         * @property {number} SWITCH_STATE_ON=2 SWITCH_STATE_ON value
                         * @property {number} SWITCH_STATE_OFF=3 SWITCH_STATE_OFF value
                         */
                        Inputs.SwitchState = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "SWITCH_STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "SWITCH_STATE_UNKNOWN"] = 1;
                            values[valuesById[2] = "SWITCH_STATE_ON"] = 2;
                            values[valuesById[3] = "SWITCH_STATE_OFF"] = 3;
                            return values;
                        })();

                        return Inputs;
                    })();

                    Sensor.Extended = (function() {

                        /**
                         * Properties of an Extended.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @interface IExtended
                         * @property {string|null} [extendFieldKey] Extended extendFieldKey
                         * @property {Uint8Array|null} [extendFieldValue] Extended extendFieldValue
                         */

                        /**
                         * Constructs a new Extended.
                         * @memberof aruba.iotops.common.v1.Sensor
                         * @classdesc Represents an Extended.
                         * @implements IExtended
                         * @constructor
                         * @param {aruba.iotops.common.v1.Sensor.IExtended=} [properties] Properties to set
                         */
                        function Extended(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Extended extendFieldKey.
                         * @member {string} extendFieldKey
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @instance
                         */
                        Extended.prototype.extendFieldKey = "";

                        /**
                         * Extended extendFieldValue.
                         * @member {Uint8Array} extendFieldValue
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @instance
                         */
                        Extended.prototype.extendFieldValue = $util.newBuffer([]);

                        /**
                         * Creates a new Extended instance using the specified properties.
                         * @function create
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IExtended=} [properties] Properties to set
                         * @returns {aruba.iotops.common.v1.Sensor.Extended} Extended instance
                         */
                        Extended.create = function create(properties) {
                            return new Extended(properties);
                        };

                        /**
                         * Encodes the specified Extended message. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Extended.verify|verify} messages.
                         * @function encode
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IExtended} message Extended message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Extended.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.extendFieldKey != null && Object.hasOwnProperty.call(message, "extendFieldKey"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.extendFieldKey);
                            if (message.extendFieldValue != null && Object.hasOwnProperty.call(message, "extendFieldValue"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.extendFieldValue);
                            return writer;
                        };

                        /**
                         * Encodes the specified Extended message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.Sensor.Extended.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.IExtended} message Extended message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Extended.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Extended message from the specified reader or buffer.
                         * @function decode
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {aruba.iotops.common.v1.Sensor.Extended} Extended
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Extended.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.Sensor.Extended();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.extendFieldKey = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.extendFieldValue = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Extended message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {aruba.iotops.common.v1.Sensor.Extended} Extended
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Extended.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Extended message.
                         * @function verify
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Extended.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.extendFieldKey != null && message.hasOwnProperty("extendFieldKey"))
                                if (!$util.isString(message.extendFieldKey))
                                    return "extendFieldKey: string expected";
                            if (message.extendFieldValue != null && message.hasOwnProperty("extendFieldValue"))
                                if (!(message.extendFieldValue && typeof message.extendFieldValue.length === "number" || $util.isString(message.extendFieldValue)))
                                    return "extendFieldValue: buffer expected";
                            return null;
                        };

                        /**
                         * Creates an Extended message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {aruba.iotops.common.v1.Sensor.Extended} Extended
                         */
                        Extended.fromObject = function fromObject(object) {
                            if (object instanceof $root.aruba.iotops.common.v1.Sensor.Extended)
                                return object;
                            var message = new $root.aruba.iotops.common.v1.Sensor.Extended();
                            if (object.extendFieldKey != null)
                                message.extendFieldKey = String(object.extendFieldKey);
                            if (object.extendFieldValue != null)
                                if (typeof object.extendFieldValue === "string")
                                    $util.base64.decode(object.extendFieldValue, message.extendFieldValue = $util.newBuffer($util.base64.length(object.extendFieldValue)), 0);
                                else if (object.extendFieldValue.length >= 0)
                                    message.extendFieldValue = object.extendFieldValue;
                            return message;
                        };

                        /**
                         * Creates a plain object from an Extended message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {aruba.iotops.common.v1.Sensor.Extended} message Extended
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Extended.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.extendFieldKey = "";
                                if (options.bytes === String)
                                    object.extendFieldValue = "";
                                else {
                                    object.extendFieldValue = [];
                                    if (options.bytes !== Array)
                                        object.extendFieldValue = $util.newBuffer(object.extendFieldValue);
                                }
                            }
                            if (message.extendFieldKey != null && message.hasOwnProperty("extendFieldKey"))
                                object.extendFieldKey = message.extendFieldKey;
                            if (message.extendFieldValue != null && message.hasOwnProperty("extendFieldValue"))
                                object.extendFieldValue = options.bytes === String ? $util.base64.encode(message.extendFieldValue, 0, message.extendFieldValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendFieldValue) : message.extendFieldValue;
                            return object;
                        };

                        /**
                         * Converts this Extended to JSON.
                         * @function toJSON
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Extended.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Extended
                         * @function getTypeUrl
                         * @memberof aruba.iotops.common.v1.Sensor.Extended
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Extended.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/aruba.iotops.common.v1.Sensor.Extended";
                        };

                        return Extended;
                    })();

                    return Sensor;
                })();

                v1.DeviceClassScopedData = (function() {

                    /**
                     * Properties of a DeviceClassScopedData.
                     * @memberof aruba.iotops.common.v1
                     * @interface IDeviceClassScopedData
                     * @property {string|null} [deviceId] DeviceClassScopedData deviceId
                     */

                    /**
                     * Constructs a new DeviceClassScopedData.
                     * @memberof aruba.iotops.common.v1
                     * @classdesc Represents a DeviceClassScopedData.
                     * @implements IDeviceClassScopedData
                     * @constructor
                     * @param {aruba.iotops.common.v1.IDeviceClassScopedData=} [properties] Properties to set
                     */
                    function DeviceClassScopedData(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeviceClassScopedData deviceId.
                     * @member {string} deviceId
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @instance
                     */
                    DeviceClassScopedData.prototype.deviceId = "";

                    /**
                     * Creates a new DeviceClassScopedData instance using the specified properties.
                     * @function create
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceClassScopedData=} [properties] Properties to set
                     * @returns {aruba.iotops.common.v1.DeviceClassScopedData} DeviceClassScopedData instance
                     */
                    DeviceClassScopedData.create = function create(properties) {
                        return new DeviceClassScopedData(properties);
                    };

                    /**
                     * Encodes the specified DeviceClassScopedData message. Does not implicitly {@link aruba.iotops.common.v1.DeviceClassScopedData.verify|verify} messages.
                     * @function encode
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceClassScopedData} message DeviceClassScopedData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeviceClassScopedData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeviceClassScopedData message, length delimited. Does not implicitly {@link aruba.iotops.common.v1.DeviceClassScopedData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {aruba.iotops.common.v1.IDeviceClassScopedData} message DeviceClassScopedData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeviceClassScopedData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeviceClassScopedData message from the specified reader or buffer.
                     * @function decode
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {aruba.iotops.common.v1.DeviceClassScopedData} DeviceClassScopedData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeviceClassScopedData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba.iotops.common.v1.DeviceClassScopedData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.deviceId = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeviceClassScopedData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {aruba.iotops.common.v1.DeviceClassScopedData} DeviceClassScopedData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeviceClassScopedData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeviceClassScopedData message.
                     * @function verify
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeviceClassScopedData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                            if (!$util.isString(message.deviceId))
                                return "deviceId: string expected";
                        return null;
                    };

                    /**
                     * Creates a DeviceClassScopedData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {aruba.iotops.common.v1.DeviceClassScopedData} DeviceClassScopedData
                     */
                    DeviceClassScopedData.fromObject = function fromObject(object) {
                        if (object instanceof $root.aruba.iotops.common.v1.DeviceClassScopedData)
                            return object;
                        var message = new $root.aruba.iotops.common.v1.DeviceClassScopedData();
                        if (object.deviceId != null)
                            message.deviceId = String(object.deviceId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeviceClassScopedData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {aruba.iotops.common.v1.DeviceClassScopedData} message DeviceClassScopedData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeviceClassScopedData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.deviceId = "";
                        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                            object.deviceId = message.deviceId;
                        return object;
                    };

                    /**
                     * Converts this DeviceClassScopedData to JSON.
                     * @function toJSON
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeviceClassScopedData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for DeviceClassScopedData
                     * @function getTypeUrl
                     * @memberof aruba.iotops.common.v1.DeviceClassScopedData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    DeviceClassScopedData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/aruba.iotops.common.v1.DeviceClassScopedData";
                    };

                    return DeviceClassScopedData;
                })();

                /**
                 * DeviceType enum.
                 * @name aruba.iotops.common.v1.DeviceType
                 * @enum {number}
                 * @property {number} DEVICE_TYPE_UNSPECIFIED=0 DEVICE_TYPE_UNSPECIFIED value
                 * @property {number} DEVICE_TYPE_BLE=1 DEVICE_TYPE_BLE value
                 * @property {number} DEVICE_TYPE_ZIGBEE=2 DEVICE_TYPE_ZIGBEE value
                 * @property {number} DEVICE_TYPE_USB=3 DEVICE_TYPE_USB value
                 * @property {number} DEVICE_TYPE_AP=4 DEVICE_TYPE_AP value
                 * @property {number} DEVICE_TYPE_SECONDARY=5 DEVICE_TYPE_SECONDARY value
                 * @property {number} DEVICE_TYPE_RADIO=6 DEVICE_TYPE_RADIO value
                 */
                v1.DeviceType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DEVICE_TYPE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "DEVICE_TYPE_BLE"] = 1;
                    values[valuesById[2] = "DEVICE_TYPE_ZIGBEE"] = 2;
                    values[valuesById[3] = "DEVICE_TYPE_USB"] = 3;
                    values[valuesById[4] = "DEVICE_TYPE_AP"] = 4;
                    values[valuesById[5] = "DEVICE_TYPE_SECONDARY"] = 5;
                    values[valuesById[6] = "DEVICE_TYPE_RADIO"] = 6;
                    return values;
                })();

                /**
                 * IDType enum.
                 * @name aruba.iotops.common.v1.IDType
                 * @enum {number}
                 * @property {number} ID_TYPE_HARDWARE_ID=0 ID_TYPE_HARDWARE_ID value
                 * @property {number} ID_TYPE_DEVICE_ID=1 ID_TYPE_DEVICE_ID value
                 */
                v1.IDType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ID_TYPE_HARDWARE_ID"] = 0;
                    values[valuesById[1] = "ID_TYPE_DEVICE_ID"] = 1;
                    return values;
                })();

                return v1;
            })();

            return common;
        })();

        return iotops;
    })();

    return aruba;
})();

module.exports = $root;
