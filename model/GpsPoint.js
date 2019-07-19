"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GpsPoint = /** @class */ (function () {
    function GpsPoint(lat, latDirection, long, longDirection) {
        var _this = this;
        this.gpsLat = "";
        this.gpsLon = "";
        this.latitude = "";
        this.longitude = "";
        this.latitudeDegrees = 0;
        this.longitudeDegrees = 0;
        this.latitudeDirection = "";
        this.longitudeDirection = "";
        this.setPoint = function (lat, lon) {
            _this.gpsLat = lat;
            _this.gpsLon = lon;
            _this.latitudeDegrees = _this.convertGps(parseInt(_this.gpsLat.slice(0, 2)), parseFloat(_this.gpsLat.slice(2)));
            _this.longitudeDegrees = _this.convertGps(parseInt(_this.gpsLon.slice(0, 3)), parseFloat(_this.gpsLon.slice(3)));
            if (_this.latitudeDirection == "S") {
                _this.latitudeDegrees = _this.latitudeDegrees * -1;
            }
            if (_this.longitudeDirection == "W") {
                _this.longitudeDegrees = _this.longitudeDegrees * -1;
            }
        };
        this.convertGps = function (degree, minutes) {
            var deg = degree;
            var min = minutes;
            if (deg == 0 || min == 0) {
                return 0;
            }
            else if (deg > 180 || deg < 0) {
                return 0;
            }
            else if (min > 60 || min < 0) {
                return 0;
            }
            else {
                return (deg * 1.0) + min / 60.0;
            }
        };
        this.latitudeDirection = latDirection;
        this.longitudeDirection = longDirection;
        this.setPoint(lat, long);
    }
    return GpsPoint;
}());
exports.GpsPoint = GpsPoint;
