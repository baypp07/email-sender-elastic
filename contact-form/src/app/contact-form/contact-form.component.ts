import { Component, OnInit } from '@angular/core';
import {SendemailService} from "../sendemail.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import './../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public http: SendemailService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      message: ["", Validators.required],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'bayppgbox@gmail.com',
      Password : '60F85410E5341A6C15F0CE46CBC2E14F1E38',
      To : 'pphouone@gmail.com',
      From : 'bayppgbox@gmail.com',
      Subject : 'test email sender',
      Body : `
      <i>This is sent as a feedback from my resume page.</i>
       <br/> <b>Name: </b>${this.registerForm.value.surname} 
       <br/> <b>Prénom: </b>${this.registerForm.value.name} 
       <br /> <b>Email: </b>${this.registerForm.value.email}
       <br /> <b>Subject: </b>${this.registerForm.value.phone}
       <br /> <b>Message:</b> <br /> ${this.registerForm.value.message} 
       <br><br> <b>~End of Message.~</b> `
      }).then( message => {alert(message);
        this.submitted = false;
        this.registerForm.reset();} );
  }
  

}

