import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  constructor() {
  }

  getNewspaperDaily(): Observable<number> {
    return interval(1000) 
  }
}
