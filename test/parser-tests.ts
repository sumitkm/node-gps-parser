/// <reference path="../typings/main/ambient/node/index.d.ts"/>

import { GpsParser as GpsParser } from "../index";
import { GpsModel as GpsModel } from "../index";

exports['left-pad'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = parser.leftPad("5132.8244", "0", 10);
    test.equal(parseResult, "05132.8244");
    test.done();
};

exports['parse-gpgga'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GpggaParseItem> parser.parse("$GPGGA,094449.000,5132.8244,N,00145.7504,W,1,05,2.49,103.9,M,48.0,M,,*7E");
    test.equal(parseResult.gpsPoint.latitudeDegrees, 51.54707333333333);
    test.equal(parseResult.gpsPoint.longitudeDegrees, -1.7625066666666667);
    test.equal(parseResult.altitude, 103.9);
    test.equal(parseResult.time, "094449.000");
    test.equal(parseResult.fixQuality, 1);
    test.equal(parseResult.numberOfSatellites, 5);
    test.equal(parseResult.horizonalDilutionOfPrecision, 2.49);
    test.equal(parseResult.altitude, 103.9);
    test.equal(parseResult.unitsOfGeoidalSeparation, 48.0);
    test.done();
};

exports['parse-gprmc'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GprmcParseItem> parser.parse("$GPRMC,094449.000,A,5132.8244,N,00145.7504,W,3.70,190.59,090416,,,A*7B");
    //console.log(JSON.stringify(parseResult, null, 2));
    test.equal(parseResult.gpsPoint.latitudeDegrees, 51.54707333333333);
    test.equal(parseResult.gpsPoint.longitudeDegrees, -1.7625066666666667);
    test.equal(parseResult.fixTime, "094449.000");
    test.equal(parseResult.fixValidity, "A");
    test.equal(parseResult.speed, 3.7);
    test.equal(parseResult.trackAngle, 190.59);
    test.equal(parseResult.fixDate, "090416");
    test.equal(parseResult.magneticVariation, null);
    test.equal(parseResult.magneticVariationDirection, '');

    test.done();
};
