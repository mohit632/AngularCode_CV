import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
courses: course[];
  constructor() {
    this.courses=[
      {
        image:"Angular.png",
        name:"Angular 4",
        price:21000,
        description: "A component based client application framework"
      },
      {
        image:"bootstrap4.jpg",
        name:"Bootstrap4",
        price:11000,
        description: "A Style library to style css."
      },
      {
        image:"ASP.NET.jpg",
        name:"ASP.NET",
        price:31000,
        description: "MS Server side web  language"
      },
      {
        image:"HTML5.png",
        name:"HTML5",
        price:11000,
        description: "A tag template to display html elements in browser."
      },
      {
        image:"java.png",
        name:"Java",
        price:11000,
        description: "Java sanguage to build pplatform neutral applications."
      },
      {
        image:"reactjs.png",
        name:"React JS",
        price:14000,
        description: "Facebook UI framework."
      },
      {
        image:'redhat.png',
        name:"Redhat",
        price:31000,
        description: "Open source Linux OS."
      }
    ];
   }

   getcourses():course[]{
     return this.courses;
   }
}
