import { GpsParser as GpsParser } from "../index";
import * as GpsModel from "../model/GpsModel";

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
    test.done();
};

exports['parse-gprmc'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GprmcParseItem> parser.parse("$GPRMC,094449.000,A,5132.8244,N,00145.7504,W,3.70,190.59,090416,,,A*7B");
    JSON.stringify(parseResult, null, 2);
    test.equal(parseResult.gpsPoint.latitudeDegrees, 51.54707333333333);
    test.equal(parseResult.gpsPoint.longitudeDegrees, -1.7625066666666667);
    test.done();
};
