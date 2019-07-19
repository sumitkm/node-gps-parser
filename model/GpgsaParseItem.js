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
var GpgsaParseItem = /** @class */ (function (_super) {
    __extends(GpgsaParseItem, _super);
    function GpgsaParseItem(dataType, sentence) {
        var _this = _super.call(this, dataType, sentence) || this;
        _this.satellitePrn = new Array();
        _this.parse = function (sentence) {
            _this.fixTypeSelection = _this.values[0];
            _this.fixType = _this.values[1];
            for (var i = 2; i < 14; i++) {
                _this.satellitePrn.push(_this.values[i]);
            }
            _this.pdop = _this.values[14] != null && _this.values[14] != '' ? parseFloat(_this.values[14]) : null;
            _this.hdop = _this.values[15] != null && _this.values[15] != '' ? parseFloat(_this.values[15]) : null;
            var currVdop = _this.values[16];
            var cvi = currVdop.indexOf('*');
            if (cvi >= 0) {
                var cvdop = currVdop.substr(0, cvi);
                _this.vdop = parseFloat(cvdop);
            }
            else {
                _this.vdop = null;
            }
        };
        _this.parse(sentence);
        return _this;
    }
    return GpgsaParseItem;
}(GpsModel.GpsBaseParseItem));
exports.GpgsaParseItem = GpgsaParseItem;
