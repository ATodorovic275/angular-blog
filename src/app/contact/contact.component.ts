import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required, Validators.minLength(5)]),
    message: new FormControl("", [Validators.required, Validators.minLength(10)])
  })


  get name() {
    return this.contactForm.get('name')
  }

  get email() {
    return this.contactForm.get('email')
  }


  get subject() {
    return this.contactForm.get('subject')
  }

  get message() {
    return this.contactForm.get('message')
  }


  onSubmit() {
    console.log(this.contactForm)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
