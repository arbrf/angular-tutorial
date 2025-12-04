import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getServiceName(): Observable<string[]> {
    return of(['Service 1', 'Service 2']);
  }
}
