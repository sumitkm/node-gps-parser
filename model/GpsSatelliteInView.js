"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GpsSatelliteInView = /** @class */ (function () {
    function GpsSatelliteInView(prn, elevation, azimuth, snr) {
        this.prnNumber = prn;
        this.elevationDegrees = parseFloat(elevation);
        this.azimuthDegress = parseFloat(azimuth);
        var csi = snr.indexOf('*');
        if (csi >= 0) {
            var snrPart = snr.substr(0, csi);
            this.snr = snrPart != null && snrPart != '' ? parseInt(snrPart) : null;
        }
        else {
            this.snr = snr != null && snr != '' ? parseInt(snr) : null;
        }
    }
    return GpsSatelliteInView;
}());
exports.GpsSatelliteInView = GpsSatelliteInView;
