import { Component, OnInit } from '@angular/core';

import { Book } from './book.model';

@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./app.component.css']

})

export class BookFormComponent implements OnInit {
    model = new Book('', '', '');
    constructor() {}

    ngOnInit() {}

    get currentBook() {
        return JSON.stringify(this.model);
    }
}