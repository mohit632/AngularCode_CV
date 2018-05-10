import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg>18000)
      return "Code20 (20% Off)";
      else if(arg>15000)
        return "Code14 (14% Off)";
        else if (arg>10000)
          return "Code8 (8% off)";
          else 
            return "Offer5 (5% Off)";
  }

}
