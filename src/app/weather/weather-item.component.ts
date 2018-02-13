import { Component, Input } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
    selector: 'app-weather-item',
    styleUrls: ['./../app.component.css'],
    template: '' +
    '<article class="weather-iem row">' +
        '<div class="col-4 row">' +
            '<h3>{{ weatherItem.cityName }}</h3>' +
            '<p class="info">{{ weatherItem.description }}</p>' +
        '</div>' +
        '<div class="col-4">' +
            '<span class="temperature">{{ weatherItem.number }}°C</span>' +
        '</div>' +
    '</article>',
    //inputs: ['weatherItem: item']
})

export class WeatherItemComponent {
    @Input('item') weatherItem: WeatherItem;
}