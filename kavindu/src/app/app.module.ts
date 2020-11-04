import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivitiesComponent } from './activities/activities.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    EducationComponent,
    ProjectsComponent,
    ActivitiesComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
