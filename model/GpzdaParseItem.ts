import * as GpsModel from "./GpsModel";

export class GpzdaParseItem extends GpsModel.GpsBaseParseItem
{
    timeStamp: string;
    hh: string;
    mm: string;
    ss: string;
    ms: string;
    yyyymmdd: string;
    yyyy: string;
    MM: string;
    dd: string;
    localZoneHours: string;
    localZoneMinutes: string;
    checksum: string;
    currentDate: Date;

    constructor(sentence: string)
    {
        super("$GPZDA", sentence);
        this.parse();
    }

    parse()
    {
        if(this.sentence != null)
        {
            this.timeStamp = this.values[0];
            this.hh = this.timeStamp.substring(0, 2);
            this.mm = this.timeStamp.substring(2, 4);
            this.ss = this.timeStamp.substring(4, 6);
            this.ms = this.timeStamp.substring(7);
            this.dd = this.values[1];
            this.MM = this.values[2];
            this.yyyy = this.values[3];
            this.localZoneHours = this.values[4];
            this.currentDate = new Date(parseInt(this.yyyy), parseInt(this.MM), parseInt(this.dd), parseInt(this.hh), parseInt(this.mm), parseInt(this.ss), parseInt(this.ms));
            var lastCols = this.values[5].split("*");
            this.localZoneHours = lastCols.length == 2 ? lastCols[0] : null;
            this.checksum = "*" + (lastCols.length == 2 ? lastCols[1] : lastCols[0]);
        }
    }
}
