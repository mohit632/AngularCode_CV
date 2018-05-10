import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  courseCode:string;
  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params=>
    this.courseCode=params['ccode']);
   }

  ngOnInit() {
  }

}
