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
var GpggaParseItem = /** @class */ (function (_super) {
    __extends(GpggaParseItem, _super);
    function GpggaParseItem(sentence) {
        var _this = _super.call(this, "$GPGGA", sentence) || this;
        _this.gpsPoint = null;
        _this.parse();
        return _this;
    }
    GpggaParseItem.prototype.parse = function () {
        this.time = this.values[0];
        this.gpsPoint = new GpsModel.GpsPoint(this.values[1], this.values[2], this.values[3], this.values[4]);
        this.fixQuality = parseInt(this.values[5]);
        this.numberOfSatellites = parseInt(this.values[6]);
        this.horizonalDilutionOfPrecision = parseFloat(this.values[7]);
        this.altitude = parseFloat(this.values[8]);
        this.altitudeUnit = this.values[9];
        this.unitsOfGeoidalSeparation = this.values[10];
        this.ageOfDifferentialGpsData = this.values[11] != null && this.values[11] != '' ? parseFloat(this.values[11]) : null;
        this.differentialGpsStationId = this.values[12];
        this.checksum = this.values[13];
    };
    return GpggaParseItem;
}(GpsModel.GpsBaseParseItem));
exports.GpggaParseItem = GpggaParseItem;
