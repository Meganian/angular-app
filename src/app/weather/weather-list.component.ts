import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from './weather-item.component';
import {WeatherItem} from './weather-item';
import {WeatherService} from './weather.service';

@Component({
    selector: 'app-weather-list',
    template: '' +
    '<section class="weather-list">' +
       '<app-weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem" ></app-weather-item>' +
    '</section>',
    directives: [WeatherItemComponent],
    providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService) {}

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}