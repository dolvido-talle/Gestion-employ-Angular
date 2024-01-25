import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionDepartmentComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GestionDepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class GestionDepartmentModule { }
