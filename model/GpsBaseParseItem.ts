import * as GpsModel from "./GpsModel";

export class GpsBaseParseItem implements GpsModel.GpsParseItem
{
    dataType: string;
    sentence: string = "";
    values: Array<string> = new Array<string>();
    checksum: string;

    constructor(dataType: string, sentence: string)
    {
        this.dataType = dataType;
        this.reset(sentence);
    }

    reset = (sentence: string) =>
    {
        this.sentence = sentence;
        if(this.sentence != null)
        {
            this.values = this.sentence.split(",");
        }
    }
}
