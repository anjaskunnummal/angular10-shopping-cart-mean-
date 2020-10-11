import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,productName:string): any[] {
      const resultArray = [];
      if (value){
        if (value.length ===0 || filterString === '' || productName ===''){
          return value ;
        }

       for (const item of value){
         if (item[productName]===filterString){
           resultArray.push(item);
         }
       }
       return resultArray ;
      }
  }

}
