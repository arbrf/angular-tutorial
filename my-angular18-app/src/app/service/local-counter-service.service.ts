import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {

  constructor() { }

  id = Math.floor(Math.random() * 10000);
  value = 0;
  inc() { this.value++; }
}
