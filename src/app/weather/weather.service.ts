import {Injectable} from '@angular/core';
import {WEATHER_ITEMS} from './weather.data';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/*import Rx from 'rxjs/Rx';*/
import {WeatherItem} from './weather-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    constructor(private _http: HttpClient) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        console.log(cityName);
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=f383b8b958f47ac72adc2eba4aa7b01c&units=metric')
           /* .map(response => response.json())
            .catch( (error: any) => {
                console.error(error);
                return Observable.throw(error.json());
            });*/
    }
}