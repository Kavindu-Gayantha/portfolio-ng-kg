import { Component, OnInit } from '@angular/core';
import {ProjectsListService} from '../projects-list.service';
import {Projects} from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   projectList: Projects[];

  constructor(private projectService: ProjectsListService) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projectList = projects);
  }

}
