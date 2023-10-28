import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'emp-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent{


 



emplist: Employee[] = [{
    employeeID: 1,
    firstName: "John",
    lastName: "Doe",
    salary: 100000,
    DOB: new Date('01/01/1990'),
    email: "john.doe@email.com"
  },
  {
    employeeID: 2,
    firstName: "Srini",
    lastName: "Arul",
    salary: 200000,
    DOB: new Date('03/13/1997'),
    email: "Srini@email.com"
  },
  {
    employeeID: 3,
    firstName: "RAJA",
    lastName: "Kannan",
    salary: 10000,
    DOB: new Date('01/01/1996'),
    email: "RAJA@email.com"
  },
  {
    employeeID: 4,
    firstName: "Lakshmi",
    lastName: "Ram",
    salary: 10000,
    DOB: new Date('01/01/1994'),
    email: "Lakshmi@email.com"
  }
]
  
  showEdit:boolean=false
  
  EditEmp(){
    this.showEdit = true
  }

  UpdateEmp(){
    this.showEdit = false
  }




}


