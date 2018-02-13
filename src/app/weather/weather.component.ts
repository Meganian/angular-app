import { Component } from '@angular/core';
import { WeatherListComponent } from './weather-list.component';
import { WeatherSearchComponent } from './weather-search-component';

@Component({
    /*templateUrl: './form.component.html',*/
    styleUrls: ['./../app.component.css'],
    template: '' +
    '<div id="wrapper" class="container weather-container">' +
        '<h1 class="header">City weather</h1>' +
        '<app-weather-search></app-weather-search>' +
        '<app-weather-list></app-weather-list>' +
    '</div>',
    directives: [WeatherListComponent, WeatherSearchComponent]


})

export class WeatherComponent {}