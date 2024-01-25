import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { DepartmentService } from '../../../services/department.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  departForm: FormGroup;

  constructor(private fb: FormBuilder, private deptService: DepartmentService) { }

  ngOnInit(): void {
    this.departForm = this.fb.group({
      departmentName: ['',Validators.required]
      
    })
  }
get f() {return this.departForm.controls}

submit(): void{
if(this.departForm.invalid){
  return;
}else{
  console.log(this.departForm.value)

  //ICI ON RECUPERE LE NOM DU DEPARTEMENT
  this.deptService.postDepartments(this.departForm.value).subscribe(reponse => {
   console.log("ok")
  },error=> console.log(error))
}
}

}
