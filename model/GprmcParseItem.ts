import * as GpsModel from "./GpsModel";

export class GprmcParseItem extends GpsModel.GpsBaseParseItem
{
    gpsPoint: GpsModel.GpsPoint = null;

    constructor(sentence: string)
    {
        super(sentence);
        this.verb = "$GPRMC";
        this.gpsPoint = new GpsModel.GpsPoint(this.values[2], this.values[3], this.values[4], this.values[5]);
    }
}
