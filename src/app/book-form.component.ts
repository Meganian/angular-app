import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Book } from './book.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./app.component.css']
})

export class BookFormComponent implements OnInit {

    userForm: FormGroup;
    post: any;
    name:string = '';
    email:string = '';
    model = new Book('', '', '');
    constructor(private router: Router) {};
   /* constructor( private fb: FormBuilder) {

        this.userForm = fb.group({
            'name': [null],
            'email':[null]
        });
    }*/

    ngOnInit() {}

    get currentBook() {
        return JSON.stringify(this.model);
    }
    /*addPost(post) {
        this.name = post.name;
        this.email = post.email;
    }*/
    onSubmit(model){
         /*this.model) => {
            this.router.navigate(['/home']);
        }*/

    }
}