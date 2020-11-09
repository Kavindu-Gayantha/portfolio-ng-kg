import { Component, OnInit } from '@angular/core';
import {EducationListService} from '../education-list.service';
import {Education} from '../education';
import {Observable} from 'rxjs';
// import { Heros } from './../'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title = 'EDUCATION TAB HERE';
  educationList: Education[];

  constructor(private educationService: EducationListService) { }

  ngOnInit() {
    this.getEducationList();
  }
  click() {
    alert('button clicked');
  }
  getEducationList(): void {
    this.educationService.getEducation()
      .subscribe(list => this.educationList = list);
  }
}
