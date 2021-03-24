import { Component, OnInit } from '@angular/core';
import {SendemailService} from "../sendemail.service";
import { FormControl, Validators, NgForm } from "@angular/forms";
import './../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  surname:string;;
  name:string;
  email:string;
  phone:number;
  message:string;;

  constructor(
    public http: SendemailService
  ) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm){
    const user = this.name;
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'bayppgbox@gmail.com',
      Password : '60F85410E5341A6C15F0CE46CBC2E14F1E38',
      To : 'pphouone@gmail.com',
      From : 'bayppgbox@gmail.com',
      Subject : 'test email sender',
      Body : `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.name} <br /> <b>Email: </b>${this.email}<br /> <b>Subject: </b>${this.phone}<br /> <b>Message:</b> <br /> ${this.message} <br><br> <b>~End of Message.~</b> `
      }).then( message => {alert(message); f.resetForm(); } );
  }
  

}
    // `my surname is ${this.surname}. My name is ${this.name}. My email is ${this.email}. My phone is ${this.phone}. My message is "${this.message}".`; 
    // alert(user);
    // this.http.SendEmail("http://localhost:3000/", user).subscribe(
    //   data => {
    //     let res:any = data;
    //     console.log(
    //       `👏 > 👏 > 👏 > 👏 ${user} is successfully ${res.messageId}`
    //     );
    //   },
    //   err=> {
    //     console.log(err);
        
    //   }
    // )
