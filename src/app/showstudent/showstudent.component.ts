import { Component, OnInit} from '@angular/core';
import { Student} from '../student';
import {StudentService} from '../student.service';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowStudentComponent implements OnInit{
 students !:Observable<Student[]>;

 constructor(private router: Router,private studentService: StudentService) { }
 ngOnInit(){
   this.showAllStudents();
 }

 showAllStudents(){
  this.students=this.studentService.getStudentList();
 }

 
 studentDetails(rollNumber:number){
  this.router.navigate(['details',rollNumber]);
}



}