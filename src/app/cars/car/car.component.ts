import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/Car.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-Car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private service : CarService, 
    private toastr : ToastrService) { }
 
  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData ={
      id:0,
      model:'',
      make:'',
      bodyType:'',
      vehicleType:'',
      engine:'',
      doors:0,
      wheels:0,
      price:0,
    };
  }

  onSubmit(form : NgForm){
    if(form.value.id == null || form.value.id == 0)
      this.insertCar(form);
    else 
      this.updateCar(form);
  }

  insertCar(form: NgForm){
    this.service.addCar(form.value).subscribe(res => {
      this.toastr.success("Inserted successfully.", "Car Register");
      this.resetForm();
      this.service.getCars();
    });
  }

  updateCar(form: NgForm){
    this.service.updateCar(form.value).subscribe(res => {
      this.toastr.success("Updated successfully.", "Car Register");
      this.resetForm();
      this.service.getCars();
    });
  }
  
}
