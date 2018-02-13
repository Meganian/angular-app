import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   styleUrls: ['./app.component.css'],
  /*templateUrl: './app.component.html',*/
  template: `<div>
      <ul class="nav nav-tabs">
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="home">Home</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="form">Form</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="weather">Weather</a></li>
      </ul>
      <router-outlet></router-outlet>
  </div>`

})
export class AppComponent {}
