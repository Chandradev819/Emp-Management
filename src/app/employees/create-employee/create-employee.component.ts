import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  }; 

  //For default radio button checked
 //gender="male";
 //For default checkbox checked in Form
 // isActive=true;
 //department='3';
 previewPhoto=false;
 //dateOfBirth:Date=new Date(2018,0,30);
 datePickerConfig: Partial<BsDatepickerConfig>;

 departments:Department[]=[
   {id:1,name:'Help Desk' },
   {id:2,name:'IT Support' },
   {id:3,name:'Finance' },
   {id:4,name:'HR' }
 ];
  constructor() { 
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
     // showWeekNumbers: false,
     // minDate: new Date(2018, 0, 1),
     // maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }
  
  togglePhotoPreview()
  {
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit() {

  }
  // saveEmployee(empForm:NgForm):void {
  //   console.log(empForm.value);
  // }

  saveEmployee(newEmployee:Employee):void {
    console.log(newEmployee);
  }
}
