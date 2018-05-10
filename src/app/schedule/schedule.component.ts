import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
upcoming:string[];
  constructor() { 
    this.upcoming=[
      "Angular 4 starts on 4th June.",
      "Bootstrap course will be taken in July first week.",
      "ASP.NET course will be taken in July 3rd Week.",
      "SQL starts in August.",
      "For any enquiries kindly go to the Enquiry tab."
    ]
  }

  ngOnInit() {
  }

}
