import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listEmployees: any[] = [];
 
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    this.employeeService.getEmployees().subscribe(data =>{
      console.log(data);
      this.listEmployees.push(...data);
    },error => console.log(error))
  }

}
