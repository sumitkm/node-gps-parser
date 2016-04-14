import * as GpsModel from "./GpsModel";

export class GpggaParseItem extends GpsModel.GpsBaseParseItem
{
    gpsPoint: GpsModel.GpsPoint = null;
    time: string;
    altitude: number;
    altitudeUnit: string;
    fixQuality: number;
    numberOfSatellites: number;
    horizonalDilutionOfPrecision: number;
    unitsOfGeoidalSeparation: string;
    ageOfDifferentialGpsData: number;
    differentialGpsStationId: string;
    checksum: string;

    constructor(sentence: string)
    {
        super(sentence);
        this.dataType = "$GPGGA";
        this.time = this.values[0];
        this.gpsPoint = new GpsModel.GpsPoint(this.values[1], this.values[2], this.values[3], this.values[4]);

        this.fixQuality = parseInt(this.values[5]);
        this.numberOfSatellites = parseInt(this.values[6]);
        this.horizonalDilutionOfPrecision = parseFloat(this.values[7]);
        this.altitude = parseFloat(this.values[8]);
        this.altitudeUnit = this.values[9];
        this.unitsOfGeoidalSeparation = this.values[10];
        this.ageOfDifferentialGpsData = this.values[11]!=null && this.values[11]!=''? parseFloat(this.values[11]): null;
        this.differentialGpsStationId = this.values[12];
        this.checksum = this.values[13];
    }
}
