"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GpsBaseParseItem = /** @class */ (function () {
    function GpsBaseParseItem(dataType, sentence) {
        var _this = this;
        this.sentence = "";
        this.values = new Array();
        this.reset = function (sentence) {
            _this.sentence = sentence;
            if (_this.sentence != null) {
                _this.values = _this.sentence.split(",");
            }
        };
        this.dataType = dataType;
        this.reset(sentence);
    }
    return GpsBaseParseItem;
}());
exports.GpsBaseParseItem = GpsBaseParseItem;
