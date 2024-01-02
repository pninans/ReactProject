import { Component,EventEmitter,Input,Output} from '@angular/core';
import { FormControlName, FormGroup, Validators } from '@angular/forms';
import { students } from '../students.model';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {
  st:students=new students(0,"new studnt","-",0);
  @Input()
  num=0;
  @Output()
  onClickSave:EventEmitter<students>=new EventEmitter();
  saveDetails(id:string,name:string,adress:string,mark:string){
    this.st.id=parseInt(id);
    this.st.name=name;
    this.st.adress=adress;
    this.st.mark=parseInt(mark);
   
  this.onClickSave.emit(this.st);
  }
constructor(){

}
}
