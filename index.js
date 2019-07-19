"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GpsModel = require("./model/GpsModel");
exports.GpsModel = GpsModel;
var GpsParser = /** @class */ (function () {
    function GpsParser() {
    }
    GpsParser.prototype.parse = function (raw) {
        var verb = raw.slice(0, 6);
        var sentence = raw.slice(7);
        return this.parseInternal(verb, sentence);
    };
    GpsParser.prototype.parseInternal = function (verb, sentence) {
        if (verb == "$GPGGA") {
            return new GpsModel.GpggaParseItem(sentence);
        }
        else if (verb == "$GPRMC") {
            return new GpsModel.GprmcParseItem(sentence);
        }
        else if (verb == "$GPZDA") {
            return new GpsModel.GpzdaParseItem(sentence);
        }
        else if (verb == "$GPGSV") {
            return new GpsModel.GpgsvParseItem("$GPGSV", sentence);
        }
        else if (verb == "$GPGSA") {
            return new GpsModel.GpgsaParseItem("$GPGSA", sentence);
        }
        return null;
    };
    GpsParser.prototype.leftPad = function (input, padBy, totalLength) {
        var padLength = totalLength - input.length;
        var returnValue = input;
        for (var i = 0; i < padLength; i++) {
            returnValue = padBy + returnValue;
        }
        return returnValue;
    };
    return GpsParser;
}());
exports.GpsParser = GpsParser;
var gpsParser = new GpsParser();
