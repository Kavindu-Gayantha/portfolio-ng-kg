import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Education} from './education';
import { EDUCACTION_LIST } from './mock-education';

@Injectable({
  providedIn: 'root'
})
export class EducationListService {

  constructor() { }
  getEducation(): Observable<Education[]> {
    return of(EDUCACTION_LIST);
  }
}
