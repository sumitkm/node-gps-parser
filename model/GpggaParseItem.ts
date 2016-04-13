import * as GpsModel from "./GpsModel";

export class GpggaParseItem extends GpsModel.GpsBaseParseItem
{
    gpsPoint: GpsModel.GpsPoint = null;
    time: string;
    altitude: number;
    fixQuality: number;
    numberOfSatellites: number;
    horizonalDilutionOfPrecision: number;
    unitsOfGeoidalSeparation: string;
    ageOfDifferentialGpsData: number;
    differentialGpsStationId: string;

    constructor(sentence: string)
    {
        super(sentence);
        this.verb = "$GPGGA";
        this.time = this.values[0];
        this.gpsPoint = new GpsModel.GpsPoint(this.values[1], this.values[2], this.values[3], this.values[4]);

        this.fixQuality = parseInt(this.values[5]);
        this.numberOfSatellites = parseInt(this.values[6]);
        this.horizonalDilutionOfPrecision = parseFloat(this.values[7]);
        this.altitude = parseFloat(this.values[8]);
        this.unitsOfGeoidalSeparation = this.values[9];
        this.ageOfDifferentialGpsData = this.values[10]!=null && this.values[10]!=''? parseFloat(this.values[8]): null;
        this.differentialGpsStationId = this.values[11];
    }
}
