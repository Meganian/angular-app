import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';
import { HomeComponent } from './home.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search-component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'form', component: BookFormComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'weather', component: WeatherComponent },
];

@NgModule({
  declarations: [
    AppComponent, BookFormComponent, HomeComponent, WeatherComponent, WeatherListComponent, WeatherItemComponent, WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule,
      RouterModule.forRoot(appRoutes),
      NgbModule.forRoot(),
      HttpClientModule
  ],
 /* providers: [ FormComponent, HomeComponent ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
