import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name:string;
  message:string;
  email:string;
  errors:boolean;
  errorlist:string[];
  sending:boolean=false;
  filename:string;
  messageSent:string;
  constructor(private es:EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry(){
    var regex=/^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{3,5}$/;
    this.errorlist=[];
    this.errors=false;
    if(this.name==undefined||this.name.length==0)
      this.errorlist.push("Name must be filled");
    if(this.email==undefined||this.email.length==0)
        this.errorlist.push("Email must be entered");
    if(this.message==undefined||this.message.length==0)
          this.errorlist.push("Message must be filled");
    if(!regex.test(this.email))
     this.errorlist.push("Email format is not correct!!!");
    if(this.errorlist.length>0){
      this.errors=true;
    }
    else {
      this.sending=true;
      this.filename="loading.gif";
      this.messageSent="Sending the Message!!!";
      let temp={
        name:this.name,
        email:this.email,
        message:this.message
      };
      this.es.sendEnquiry(temp).subscribe(
        (data)=>{
          this.filename="sent.png";
          this.messageSent="Message Sent!!!";
          setTimeout(() => {
            this.sending=false;
            this.name="";
            this.email="";
            this.message="";
          }, 2000); 
        },
        (error)=>{alert("Message not sent");
        setTimeout(() => {
          this.sending=false;
          this.name="";
          this.email="";
          this.message="";
        }, 2000); 
      }
      )
      /*this.filename="loading.gif";
      this.messageSent="Sending the Message!!!";
      setTimeout(() => {
        this.filename="sent.png";
        this.messageSent="Message Sent!!!";
      }, 10000);*/
    }
  }

}
