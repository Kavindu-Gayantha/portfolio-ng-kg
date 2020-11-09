import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  email= new FormControl();
  name=new FormControl();

  constructor() { }

  ngOnInit() {
  }
  save(){
    alert(`your email is ${this.email.value} and your name is ${this.name.value}`)
  }

}
