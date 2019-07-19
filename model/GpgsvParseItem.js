"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GpsModel = require("./GpsModel");
var GpgsvParseItem = /** @class */ (function (_super) {
    __extends(GpgsvParseItem, _super);
    function GpgsvParseItem(dataType, sentence) {
        var _this = _super.call(this, dataType, sentence) || this;
        _this.satellitesInView = new Array();
        _this.parse = function (sentence) {
            _this.numberOfSentencesForFullData = parseInt(_this.values[0]);
            _this.sentenceNumber = parseInt(_this.values[1]);
            _this.numberOfSatellitesInView = parseInt(_this.values[2]);
            var numberOfSatelliteInfo = (_this.values.length - 4) / 4;
            for (var i = 0; i < numberOfSatelliteInfo; i++) {
                var startIndex = (4 * i) + 3;
                var satellite = new GpsModel.GpsSatelliteInView(_this.values[startIndex], _this.values[startIndex + 1], _this.values[startIndex + 2], _this.values[startIndex + 3]);
                _this.satellitesInView.push(satellite);
            }
        };
        _this.parse(sentence);
        return _this;
    }
    return GpgsvParseItem;
}(GpsModel.GpsBaseParseItem));
exports.GpgsvParseItem = GpgsvParseItem;
