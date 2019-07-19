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
var GprmcParseItem = /** @class */ (function (_super) {
    __extends(GprmcParseItem, _super);
    function GprmcParseItem(sentence) {
        var _this = _super.call(this, "$GPRMC", sentence) || this;
        _this.gpsPoint = null;
        _this.parse();
        return _this;
    }
    GprmcParseItem.prototype.parse = function () {
        this.fixTime = this.values[0];
        this.fixValidity = this.values[1];
        this.gpsPoint = new GpsModel.GpsPoint(this.values[2], this.values[3], this.values[4], this.values[5]);
        this.speed = parseFloat(this.values[6]);
        this.trackAngle = parseFloat(this.values[7]);
        this.fixDate = this.values[8];
        this.magneticVariation = this.values[9] != '' && this.values[9] != null ? parseFloat(this.values[9]) : null;
        this.magneticVariationDirection = this.values[10];
        this.checksum = this.values[11];
    };
    return GprmcParseItem;
}(GpsModel.GpsBaseParseItem));
exports.GprmcParseItem = GprmcParseItem;
