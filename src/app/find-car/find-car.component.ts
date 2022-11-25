import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car-service';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})
export class FindCarComponent implements OnInit {

  id: number = 0;
  car: Car = new Car();
  name: string = '';
  model: string = '';
  cars: Car[]=[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  searchCarById(){
    this.carService.getCarById(this.id)
      .subscribe(car=>{
        console.log(car)
        this.car = car
      });
  }

  searchCarByName(){
    this.carService.getCarByName(this.name)
      .subscribe(cars=>{
        console.log(cars)
        this.cars = cars
      });
  }

  searchCarByModel(){
    this.carService.getCarByModel(this.name)
      .subscribe(cars=>{
        console.log(cars)
        this.cars = cars
      });
  }

}
