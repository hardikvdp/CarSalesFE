import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/Car.service';
import { Car } from 'src/app/service/Car.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(public service: CarService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getCars() 
  }
  
  popularForm(car: Car){
    this.service.formData =  Object.assign({}, car);
  }  

  deleteCar(id:number){
      if(confirm("Are you sure to delete this record?")){
      this.service.deleteCar(id).subscribe(res => {
        this.toastr.success("Deleted successfully.", "Car Register");
        this.service.getCars();
      });
    }
  }
}
