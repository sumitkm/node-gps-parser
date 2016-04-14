import * as GpsModel from "./model/GpsModel";

class GpsParser
{
    constructor()
    {

    }

    public parse(raw: string): GpsModel.GpsParseItem
    {
        var verb = raw.slice(0, 6);
        var sentence = raw.slice(7);
        return this.parseInternal(verb, sentence);
    }

    private parseInternal(verb: string, sentence: string): GpsModel.GpsParseItem
    {
        if(verb == "$GPGGA")
        {
            return new GpsModel.GpggaParseItem(sentence);
        }
        else if(verb == "$GPRMC")
        {
            return new GpsModel.GprmcParseItem(sentence);
        }
        return null;
    }

    public leftPad(input: string, padBy: string, totalLength: number)
    {
        let padLength = totalLength - input.length;
        var returnValue = input;
        for (let i = 0; i < padLength; i++)
        {
            returnValue = padBy + returnValue;
        }
        return returnValue;
    }
}

var gpsParser = new GpsParser();

export { GpsParser };
export { GpsModel };
