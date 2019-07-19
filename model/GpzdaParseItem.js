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
var GpzdaParseItem = /** @class */ (function (_super) {
    __extends(GpzdaParseItem, _super);
    function GpzdaParseItem(sentence) {
        var _this = _super.call(this, "$GPZDA", sentence) || this;
        _this.parse();
        return _this;
    }
    GpzdaParseItem.prototype.parse = function () {
        if (this.sentence != null) {
            this.timeStamp = this.values[0];
            this.hh = this.timeStamp.substring(0, 2);
            this.mm = this.timeStamp.substring(2, 4);
            this.ss = this.timeStamp.substring(4, 6);
            this.ms = this.timeStamp.substring(7);
            this.dd = this.values[1];
            this.MM = this.values[2];
            this.yyyy = this.values[3];
            this.localZoneHours = this.values[4];
            this.currentDate = new Date(parseInt(this.yyyy), parseInt(this.MM), parseInt(this.dd), parseInt(this.hh), parseInt(this.mm), parseInt(this.ss), parseInt(this.ms));
            var lastCols = this.values[5].split("*");
            this.localZoneHours = lastCols.length == 2 ? lastCols[0] : null;
            this.checksum = "*" + (lastCols.length == 2 ? lastCols[1] : lastCols[0]);
        }
    };
    return GpzdaParseItem;
}(GpsModel.GpsBaseParseItem));
exports.GpzdaParseItem = GpzdaParseItem;
