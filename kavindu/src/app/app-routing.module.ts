import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent} from './projects/projects.component';
// import {HomeComponent} from './home/home.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';
// import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'projects/one', component: ProjectsComponent},
  {path: 'projects/two', component: Project2Component},
  {path: 'projects/three', component: Project3Component},
  {path: 'projects ', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
