/*import { Component } from '@angular/core';

import { BookFormComponent } from './book-form.component';


@Component({
    styleUrls: ['./app.component.css'],
    template: '<div class="container">\n' +
    '            <h2>User Data</h2>\n' +
    '            <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">\n' +
    '\n' +
    '              <div class="form-group">\n' +
    '                <label>Name</label>\n' +
    '                <input type="text" #nameRef="ngModel" minlength="4" required class="form-control" name="name" [(ngModel)]="model.name" />\n' +
    '                <div *ngIf="nameRef.errors && (nameRef.dirty || nameRef.touched)" class="alert alert-danger">\n' +
    '                  <div [hidden]="!nameRef.errors.required">\n' +
    '                    Please enter a name\n' +
    '                  </div>\n' +
    '                  <div [hidden]="!nameRef.errors.minlength">\n' +
    '                    Please enter at least 4 characters\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="form-group">\n' +
    '                <label>Email</label>\n' +
    '                <input type="text" class="form-control" name="email" [(ngModel)]="model.email" />\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="form-group">\n' +
    '                <label>City</label>\n' +
    '                <input type="text" class="form-control" name="city" [ngModel]="model.city" />\n' +
    '              </div>\n' +
    '\n' +
    '              <button [disabled]="!userForm.form.valid" type="submit" class="btn btn-info">Submit</button>\n' +
    '\n' +
    '            </form><p>{{ BookFormComponent.currentBook }}</p>\n' +
    '\n' +
    '          <h2> Model:</h2>' +
    '</div>'
})

export class FormComponent {}
*/