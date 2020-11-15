import { Component, OnInit } from '@angular/core';
import {ProjectsListService} from '../projects-list.service';
import {Projects} from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
   projectList: Projects[];

  constructor(private projectService: ProjectsListService) { }

  ngOnInit() {
    this.getProjectsList();
  }

  getProjectsList(): void {
    this.projectService.getProjects().subscribe(p => this.projectList = p);
  }
}
