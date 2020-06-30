import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactInfo = new FormGroup({

    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone : new FormControl(''),
    subject : new FormControl('',Validators.required),
    message : new FormControl('',Validators.required)

  });
  

  modalTitle : string;
  modalText : string;
  validErr : boolean = false;
  emailErr : boolean = false;

  submitInfo(){
    if(this.contactInfo.valid){

      this.validErr = false;
      this.emailErr = false;
      this.modalTitle = 'Success';
      this.modalText = 'Thank you for contacting us !'
      var formInfo = this.contactInfo.value;
      this.contactInfo.reset();
    }
    else{
      
      this.validErr = true;
      this.modalTitle = 'Something went wrong';
      this.modalText = '';
      var formInfo = this.contactInfo.value;

      if(formInfo.firstName === '' || formInfo.firstName === null){
        this.modalText += '- First Name\n';
      }
      if(formInfo.lastName == '' || formInfo.lastName === null){
        this.modalText += '- Last Name\n';
      }
      if(formInfo.email == '' || formInfo.email === null){
        this.modalText += '- Email\n';
      }
      else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formInfo.email)){
        this.emailErr = false;
      }
      else{
        this.emailErr = true;
      }
      if(formInfo.subject == '' || formInfo.subject === null){
        this.modalText += '- Subject\n';
      }
      if(formInfo.message == '' || formInfo.message === null){
        this.modalText += '- Message\n';
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}