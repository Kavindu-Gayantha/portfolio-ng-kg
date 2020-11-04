import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title="EDUCATION TAB HERE";

  constructor() { }

  ngOnInit() {
  }
  click(){
    alert('button clicked');
  }

}
