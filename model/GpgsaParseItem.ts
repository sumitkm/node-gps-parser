import * as GpsModel from "./GpsModel";

export class GpgsaParseItem extends GpsModel.GpsBaseParseItem
{
    fixTypeSelection : string;
    fixType: string;
    satellitePrn: Array<string> = new Array<string>();
    pdop : number;
    hdop : number;
    vdop : number;

    constructor(dataType: string, sentence: string)
    {
        super(dataType, sentence);
        this.parse(sentence);
    }

    parse = (sentence: string) =>
    {
        this.fixTypeSelection = this.values[0];
        this.fixType = this.values[1];
        for(let i = 2; i < 14; i++)
        {
            this.satellitePrn.push(this.values[i]);
        }
        this.pdop = this.values[14]!=null && this.values[14] != '' ? parseFloat(this.values[14]) : null;
        this.hdop = this.values[15]!=null && this.values[15] != '' ? parseFloat(this.values[15]) : null;
        var currVdop = this.values[16];
        var cvi = currVdop.indexOf('*');
        if (cvi >= 0)
        {
            let cvdop = currVdop.substr(0, cvi);
            this.vdop = parseFloat(cvdop);
        }
        else
        {
            this.vdop = null;
        }
    }
}
