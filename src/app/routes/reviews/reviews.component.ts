import { Component, OnInit } from '@angular/core';
import  {FormBuilder,Validators,FormControl} from '@angular/forms'
import {review} from '../../review';
import { ReviewService } from '../../services/review.service';
@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviewForm:any;
courses:string[]=["Java","ASP.NET","Angular4","Bootstrap","React JS"];
  constructor(private formBuilder:FormBuilder, private rs:ReviewService) { 
    this.reviewForm= this.formBuilder.group({
      name:['',[Validators.required,isSymbols]],
      message:['',Validators.required],
      email:['',[Validators.required,Validators.pattern(
      "^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{3,5}"
      )]],
      course:['Java']
    })
  }

  ngOnInit() {
  }

  saveReview()
  {
    var temp:any={
      name:this.reviewForm.value.name,
      email:this.reviewForm.value.email,
      course:this.reviewForm.value.course,
      message:this.reviewForm.value.message,
      reviewdate:this.reviewForm.value.reviewdate
    };
    this.rs.postReviews(temp).subscribe(
      (data)=>{
        alert("Your review is saved");
        location.reload();
      },
      (error)=>{
        alert("Not saved--some error");
      }
    )
  }

}

function isSymbols(input:FormControl){
let temp:RegExp=new RegExp('[\._$@0-9]');
let temp1:boolean=false;
if(!temp.test(input.value))
  temp1=true;
return temp1?null:{needFormat:true};
}