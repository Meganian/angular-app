import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { BookFormComponent } from './book-form.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: 'form', component: BookFormComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, BookFormComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule,
      RouterModule.forRoot(appRoutes),
      NgbModule.forRoot()
  ],
 /* providers: [ FormComponent, HomeComponent ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
