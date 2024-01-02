import { Component,EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { students } from '../students.model';

@Component({
  selector: 'app-srudent-details',
  templateUrl: './srudent-details.component.html',
  styleUrls: ['./srudent-details.component.css']
})
export class SrudentDetailsComponent {
  @Output()
  onClickSave:EventEmitter<students>=new EventEmitter();
  @Input()
  st:students={id:0,name:"",adress:"",mark:0};

  @Input()
  num=0;
  taskform:FormGroup;
  saveDetails( ){
    this.st=this.taskform.value;
    this.onClickSave.emit(this.st);
  }
     constructor(){
this.taskform=new FormGroup({
  "name":new FormControl(this.st.id,Validators.required),
  "id":new FormControl(this.st.id,[Validators.required,Validators.maxLength(1)]),
  "adress":new FormControl(this.st.adress,Validators.required),
  "mark":new FormControl(this.st.mark,[Validators.required,Validators.minLength(2)])
  })
  
     }
}
