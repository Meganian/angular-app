import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {WeatherService} from './weather.service';
import {WeatherItem} from './weather-item';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import "rxjs/add/operator/debounceTime";

@Component({
    selector: 'app-weather-search',
    template:'' +
    '<section class="weather-search">' +
        '<form #f="ngForm" (ngSubmit)="onSubmit(f)" class="form-inline row justify-content-between">' +
            '<label for="city" class="col-md-2 col-md-offset-2">City</label>' +
            '<input name="name" [(ngModel)]="name" type="text" id="city" required class="form-control col-md-5" ' +
                    'placeholder="Type city name" (input)="onSearchLocation(input.value)" #input>' +
            '<button type="submit" class="btn btn-info col-md-3">Add City</button>' +
        '</form>' +
        /*'<div>' +
            '<span class="info">City found: </span>{{data.name}}}' +
        '</div>' +*/
    '</section>',
    providers: [WeatherService]
})

export class WeatherSearchComponent  {

    constructor(private _weatherService: WeatherService) {}

    onSubmit(form: FormGroup){
        console.log(form);
        this._weatherService.searchWeatherData(form.value.name)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather.description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }

}