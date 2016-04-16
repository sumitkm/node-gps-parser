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

exports['parse-gpzda'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GpzdaParseItem> parser.parse("$GPZDA,094451.000,09,04,2016,,*53");
    test.equal(parseResult.timeStamp, "094451.000");
    test.equal(parseResult.dd, "09");
    test.equal(parseResult.MM, "04");
    test.equal(parseResult.yyyy, "2016");
    test.equal(parseResult.currentDate.toUTCString(), new Date(2016, 4, 9, 9, 44, 51, 0).toUTCString());
    test.done();
};

exports['parse-gpgsv'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GpgsvParseItem> parser.parse("$GPGSV,3,1,10,13,65,288,18,05,60,200,,30,56,066,19,20,46,292,17*76");
    test.equal(parseResult.numberOfSentencesForFullData, 3);
    test.equal(parseResult.sentenceNumber, 1);
    test.equal(parseResult.numberOfSatellitesInView, 10);
    test.equal(parseResult.satellitesInView.length, 4);
    test.equal(parseResult.satellitesInView[0].prnNumber, 13);
    test.equal(parseResult.satellitesInView[0].elevationDegrees, 65);
    test.equal(parseResult.satellitesInView[0].azimuthDegress, 288);
    test.equal(parseResult.satellitesInView[0].snr, 18);
    test.equal(parseResult.satellitesInView[1].prnNumber, 5);
    test.equal(parseResult.satellitesInView[1].elevationDegrees, 60);
    test.equal(parseResult.satellitesInView[1].azimuthDegress, 200);
    test.equal(parseResult.satellitesInView[1].snr, null);
    test.equal(parseResult.satellitesInView[2].prnNumber, 30);
    test.equal(parseResult.satellitesInView[2].elevationDegrees, 56);
    test.equal(parseResult.satellitesInView[2].azimuthDegress, 66);
    test.equal(parseResult.satellitesInView[2].snr, 19);
    test.equal(parseResult.satellitesInView[3].prnNumber, 20);
    test.equal(parseResult.satellitesInView[3].elevationDegrees, 46);
    test.equal(parseResult.satellitesInView[3].azimuthDegress, 292);
    test.equal(parseResult.satellitesInView[3].snr, 17);
    test.done();
};

exports['parse-gpgsa'] = (test) =>
{
    var parser = new GpsParser();
    var parseResult = <GpsModel.GpgsaParseItem> parser.parse("$GPGSA,A,3,21,30,07,13,20,,,,,,,,2.69,2.49,1.00*06");
    test.equal(parseResult.fixTypeSelection, "A");
    test.equal(parseResult.fixType, 3);
    test.equal(parseResult.satellitePrn[0], "21");
    test.equal(parseResult.satellitePrn[1], "30");
    test.equal(parseResult.satellitePrn[2], "07");
    test.equal(parseResult.satellitePrn[3], "13");
    test.equal(parseResult.satellitePrn[4], "20");
    test.equal(parseResult.satellitePrn[5], "");
    test.equal(parseResult.satellitePrn[6], "");
    test.equal(parseResult.satellitePrn[7], "");
    test.equal(parseResult.satellitePrn[8], "");
    test.equal(parseResult.satellitePrn[9], "");
    test.equal(parseResult.satellitePrn[10], "");
    test.equal(parseResult.satellitePrn[11], "");
    test.equal(parseResult.pdop, 2.69);
    test.equal(parseResult.hdop, 2.49);
    test.equal(parseResult.vdop, 1.00);
    test.done();
};
