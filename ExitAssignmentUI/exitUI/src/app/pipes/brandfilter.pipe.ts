import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandfilter'
})
export class BrandfilterPipe implements PipeTransform {

  transform(value: any, acc: any): any {
    if(value.length===0){
      return value;
    }
    return value.filter(function(val:any){
      return val.brand.indexOf(acc) > -1 
    });
  }


}
