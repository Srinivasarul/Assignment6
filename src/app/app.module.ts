import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import {DefaultColorOnEventDirective} from './directives/bgdirective'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DefaultColorOnEventDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
