import * as GpsModel from "./GpsModel";

export class GpgsvParseItem extends GpsModel.GpsBaseParseItem
{
    numberOfSentencesForFullData : number;
    sentenceNumber: number;
    numberOfSatellitesInView: number;
    satellitesInView : Array<GpsModel.GpsSatelliteInView> = new Array<GpsModel.GpsSatelliteInView>();

    constructor(dataType: string, sentence: string)
    {
        super(dataType, sentence);
        this.parse(sentence);
    }

    parse = (sentence: string) =>
    {
        this.numberOfSentencesForFullData = parseInt(this.values[0]);
        this.sentenceNumber = parseInt(this.values[1]);
        this.numberOfSatellitesInView = parseInt(this.values[2]);
        let numberOfSatelliteInfo = (this.values.length - 4) / 4;
        for(let i=0;i<numberOfSatelliteInfo;i++)
        {
            let startIndex = (4*i) + 3;
            let satellite = new GpsModel.GpsSatelliteInView(
                this.values[startIndex],
                this.values[startIndex+1],
                this.values[startIndex+2],
                this.values[startIndex+3]);
            this.satellitesInView.push(satellite);
        }
    }
}
