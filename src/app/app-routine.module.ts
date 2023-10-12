import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './addstudent/addstudent.component';
import { ShowStudentComponent } from './showstudent/showstudent.component';
import { StudentDetailsComponent } from './studentdetails/studentdetails.component';
const routes: Routes = [
  { path: 'AllStudents', component: ShowStudentComponent},
  { path: 'AddStudent', component: AddStudentComponent},
  { path: 'details/:rollNumber', component: StudentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }