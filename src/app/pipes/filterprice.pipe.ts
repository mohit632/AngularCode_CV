import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(courses: course[], pricetype: any): any {
    let temp:course[]=[];
    if(pricetype=="Highly Priced"){
      for(let x in courses){
        if(courses[x].price>=15000)
         temp.push(courses[x]);
      }
      
      return temp;
    }
    else  if(pricetype=="Moderately Priced"){
      for(let x in courses){
        if(courses[x].price<15000 && courses[x].price>10000)
         temp.push(courses[x]);
      }
      return temp;
    }
    else  if(pricetype=="Normal Priced"){
      for(let x in courses){
        if(courses[x].price<=10000)
          temp.push(courses[x]);
      }
      return temp;
    }
    else {
      return courses;
    }

    
  }

}
