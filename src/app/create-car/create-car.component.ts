import { Component, OnInit } from '@angular/core';
import { CarService } from '../car-service';
import { Car } from '../model/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = new Car();

  constructor( private route: ActivatedRoute,
               private router : Router,
               private carService: CarService) { }

  ngOnInit(): void {
  }

  insertCar(){
    this.carService.createCar(this.car)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.car = new Car();
    this.router.navigate(['listar']);
  }

}

