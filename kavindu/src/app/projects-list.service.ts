import { Injectable } from '@angular/core';
import { PROJCTS_LIST } from './mock-projects';
import {Observable, of} from 'rxjs';
import {Projects} from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsListService {

  constructor() { }

  getProjects(): Observable<Projects[]> {
    return of(PROJCTS_LIST);
  }
}
