import { Component } from '@angular/core';
import { students } from '../students.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  s:students[]=[{id:1,name:"shoshana",adress:"ben yaakov",mark:95},{id:2,name:"rivki",adress:"pardo",mark:100},{id:1,name:"pnina",adress:"ezra",mark:100}];
   studs:students={id:0,name:"",adress:"",mark:0};
   num=0;
   num1=0;
  deleteMe(stud:students){
    let id=this.s.indexOf(stud);
    this.s.splice(id,1);
  }
  changMe(stud:students){
    this.studs=stud;
    this.num1=1;
  }
  addStudent(){
    this.num=1;
  }
  saveDetailsToList(sts:students){
    this.s.push(new students(sts.id,sts.name,sts.adress,sts.mark));
    this.num=0;
  }
  constructor(){
    
  }
  updatedetails(sts:students){
     let stu=this.s.filter(x=>x.id==sts.id)[0];
     let index=this.s.indexOf(stu);
    this.s[index]=sts;
    this.num1=0;
  }
}
