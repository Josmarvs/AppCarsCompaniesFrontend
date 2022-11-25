import { Component, OnInit } from '@angular/core';
import { CarService } from '../car-service';
import { Car } from '../model/car';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  name: string = "";
  cars: Car[]=[];
  constructor(private router: Router, private carService: CarService) { }

  ngOnInit(): void {
    this.loadDataCars();
  }

  loadDataCars(){
    this.carService.getCarList()
      .subscribe(cars=>this.cars=cars);
  }
  deleteCar(car: Car){
    this.carService.deleteCar(car.id)
      .subscribe(data=>{this.loadDataCars();})
  }

  updateCar(car: Car){
    this.router.navigate(['actualizar', car.id]);
  }

  searchCarByName(){
    if(!this.name){
      this.carService.getCarByName(this.name)
        .subscribe(cars=>this.cars=cars);
    }else{
      this.loadDataCars();
    }
  }

}
