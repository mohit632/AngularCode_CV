import { Component, OnInit } from '@angular/core';
import {course} from '../../../course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  courselist:course[];
pricetype:string="All Courses";

  constructor(private cs: CourseService) {
    this.courselist = this.cs.getcourses();
   }

  ngOnInit() {
    
  }

}
