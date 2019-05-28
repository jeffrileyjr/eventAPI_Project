import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(eventInfo: any[], searchText: string): any[] {
    if(!eventInfo) return [];
    if(!searchText) return eventInfo;
searchText = searchText.toLowerCase();
return eventInfo.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}