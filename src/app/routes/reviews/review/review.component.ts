import { Component, OnInit, Input } from '@angular/core';
import {review} from '../../../review';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input('review') current:review;
  constructor() { }

  ngOnInit() {
  }

}
