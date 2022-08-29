import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { TaskComponent } from './components/task/task.component';
import { TasksToDoComponent } from './components/tasks-to-do/tasks-to-do.component';
import { AboutComponent } from './components/about/about.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FooterAboutComponent } from './components/footer-about/footer-about.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TaskComponent,
    TasksToDoComponent,
    AboutComponent,
    TaskItemComponent,
    AddTaskComponent,
    FooterAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
