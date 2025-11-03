import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userinfo',
  standalone: true
})
export class UserinfoPipe implements PipeTransform {

  transform(user:{name:string,age:number}): string {
    if(!user) return '';
    return `${user.name} is ${user.age} years old`;
  }

}
