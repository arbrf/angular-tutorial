import { Pipe, PipeTransform } from '@angular/core';
import { Share } from '../app.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: Share[], name: string): Share[] {
    if(!items) return items;
    if (!name) return items;
    console.log("Search filet called "+name);
    const filteredItem = items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      console.log("filteredItem  "+filteredItem);
    console.log("filteredItem  "+filteredItem.values);
    return filteredItem;
    
  }

}
