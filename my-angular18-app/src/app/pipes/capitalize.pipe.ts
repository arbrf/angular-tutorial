import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if(!value)  return '';
    const ret=value.slice(0,limit).toUpperCase();
    const ret2=value.slice(limit).toLowerCase();
    return ret+ret2;
  }

}
