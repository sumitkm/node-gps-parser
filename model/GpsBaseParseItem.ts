import * as GpsModel from "./GpsModel";

export class GpsBaseParseItem implements GpsModel.GpsParseItem
{
    verb: string;
    sentence: string = "";
    values: Array<string> = new Array<string>();
    checksum: string;

    constructor(sentence: string)
    {
        this.sentence = sentence;
        this.values = sentence.split(",");
    }
}
