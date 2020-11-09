import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-hero'
import {Heros} from './heros';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  hero: Heros = {
    id: 1,
    name: 'Windstorm'
  };
// heros = HEROES;
  constructor() {  }

  ngOnInit() {
    // this.http.get("https://jsonplaceholder.typicode.com/posts");
    // Response.subscribe((data)=> console.log((data)));
  }

}
