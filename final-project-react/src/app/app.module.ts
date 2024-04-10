import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SrudentDetailsComponent } from './srudent-details/srudent-details.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SrudentDetailsComponent,
    NewStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
