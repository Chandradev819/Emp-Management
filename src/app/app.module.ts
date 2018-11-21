import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import {ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from  './employees/create-employee/create-employee.component';
import { EmployeeService } from './employees/employee.service';



const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact', component:ContactComponent },
  {path:'empList', component:ListEmployeesComponent},
  {path:'createEmp',component:CreateEmployeeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full' },
  {path:'**' ,redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ListEmployeesComponent,
    SelectRequiredValidatorDirective, 
    ConfirmEqualValidatorDirective,
    CreateEmployeeComponent
  
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
