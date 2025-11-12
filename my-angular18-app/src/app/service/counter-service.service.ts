import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

    value = 0;
    inc() { this.value++; }
    dec() { this.value--; }

}
