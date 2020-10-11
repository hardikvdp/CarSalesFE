import { Injectable } from '@angular/core';
import { Car } from './Car.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  getData : any;
  formData : Car;
  list : Car[];

  readonly rootURL = "http://localhost:54733/api";

  constructor(private http: HttpClient) { }

  addCar(formData : Car){
    return this.http.post(this.rootURL + '/Car/Add', formData);
  }

  updateCar(formData : Car){
    return this.http.post(this.rootURL + '/Car/Update', formData);
  }

  deleteCar(id : number){
    return this.http.delete(this.rootURL + '/Car/Delete/' + id);
  }

  getCars(){
   return this.http.get(this.rootURL + "/Car/GetAll")
    .toPromise().then(res => this.list = res["data"] as Car[]);
  }

}

