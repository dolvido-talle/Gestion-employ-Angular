import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formEmployee: FormGroup;
  submitted : boolean = false;

  listDepartments: any[] = [];
    
  constructor(private employeeService:EmployeeService , private fb: FormBuilder,private departmentServcie: DepartmentService) { }

  ngOnInit(): void {
  this.getDepartment();
  this.formEmployee = this.fb.group({
    employeeFirstName: ['',Validators.required],
    employeeLastName:['',Validators.required],
    employeePhone:['',Validators.required],
    departmentId:['',Validators.required]
  })
  }

  getDepartment(): void{
    this.departmentServcie.getListDepartments().subscribe(data => {
    
    this.listDepartments.push(...data);
    },error => {
      console.log(error)
    })
  }

   get f() {
    return this.formEmployee.controls;
   }


  submit(): void {
    this.submitted = true;
    if(this.formEmployee.invalid){
      return;
    }else{
      this.employeeService.postEmployees(this.formEmployee.value).subscribe(data => {
       this.formEmployee.reset();
    }, err => {
      console.log('err')
    });
    }
  }

}
