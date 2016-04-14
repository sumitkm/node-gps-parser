import * as GpsModel from "./GpsModel";

export class GprmcParseItem extends GpsModel.GpsBaseParseItem
{
    gpsPoint: GpsModel.GpsPoint = null;
    fixTime: string;
    fixValidity: string;
    speed: number;
    trackAngle: number;
    fixDate: string;
    magneticVariation: number;
    magneticVariationDirection: string;
    checksum: string;

    constructor(sentence: string)
    {
        super(sentence);
        this.dataType = "$GPRMC";
        this.fixTime = this.values[0];
        this.fixValidity = this.values[1];
        this.gpsPoint = new GpsModel.GpsPoint(this.values[2], this.values[3], this.values[4], this.values[5]);
        this.speed = parseFloat(this.values[6]);
        this.trackAngle = parseFloat(this.values[7]);
        this.fixDate = this.values[8];
        this.magneticVariation = this.values[9]!=''&& this.values[9]!=null?parseFloat(this.values[9]): null;
        this.magneticVariationDirection = this.values[10];
        this.checksum = this.values[11];
    }
}
