export class GpsSatelliteInView
{
    prnNumber: string;
    elevationDegrees: number;
    azimuthDegress: number;
    snr: number;

    constructor(prn: string, elevation: string, azimuth: string, snr: string)
    {
        this.prnNumber = prn;
        this.elevationDegrees = parseFloat(elevation);
        this.azimuthDegress = parseFloat(azimuth);
        var csi = snr.indexOf('*');
        if (csi >= 0)
        {
            var snrPart= snr.substr(0, csi);
            this.snr = snrPart != null && snrPart != '' ? parseInt(snrPart) : null;
        }
        else
        {
            this.snr = snr!=null && snr!='' ? parseInt(snr) : null;
        }
    }
}
