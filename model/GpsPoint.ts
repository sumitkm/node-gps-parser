export class GpsPoint
{
    gpsLat: string = "";
    gpsLon: string = "";
    latitude: string = "";
    longitude: string = "";
    latitudeDegrees: number = 0;
    longitudeDegrees: number = 0;
    latitudeDirection: string = "";
    longitudeDirection: string = "";

    constructor(lat: string, latDirection: string, long: string, longDirection: string)
    {
        this.latitudeDirection = latDirection;
        this.longitudeDirection = longDirection;
        this.setPoint(lat, long);
    }

    setPoint = (lat: string, lon: string) =>
    {
        this.gpsLat = lat;
        this.gpsLon = lon;
        this.latitudeDegrees = this.convertGps(parseInt(this.gpsLat.slice(0, 2)), parseFloat(this.gpsLat.slice(2)));
        this.longitudeDegrees = this.convertGps(parseInt(this.gpsLon.slice(0, 3)), parseFloat(this.gpsLon.slice(3)));

        if(this.latitudeDirection == "S")
        {
            this.latitudeDegrees = this.latitudeDegrees * -1;
        }
        if(this.longitudeDirection == "W")
        {
            this.longitudeDegrees = this.longitudeDegrees * -1;
        }
    }

    convertGps = (degree: number, minutes: number) =>
    {
    	var deg = degree;
    	var min = minutes;

    	if (deg == 0 || min == 0){
    		return 0;
    	}
    	else if (deg > 180 || deg < 0){
            return 0;
    	}
    	else if (min > 60 || min < 0){
            return 0;
    	}
    	else {
    		return (deg*1.0) + min/60.0;
    	}
    }
}
