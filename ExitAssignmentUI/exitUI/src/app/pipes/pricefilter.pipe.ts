import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(value: any, minValue: any, maxValue:any ): any {
    if(value.length === 0){
      return value
    }
    if (minValue) {
      value = value.filter(function(item :any) {
        return item.price >= +minValue;
      });
    } 
    if (maxValue) {
      value = value.filter(function(item :any) {
        return item.price <= +maxValue;
      });
    }
    return  value;
  }
}
