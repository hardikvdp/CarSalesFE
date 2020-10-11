import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { CarsComponent } from './Cars/Cars.component';
import { CarComponent } from './Cars/Car/Car.component';
import { CarListComponent } from './Cars/Car-list/Car-list.component';

import { CarService } from './service/Car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added  
    BsDatepickerModule.forRoot(),
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
