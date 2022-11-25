import { Component, OnInit } from '@angular/core';
import { CarService } from '../car-service';
import { Car } from '../model/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  id: number = 0;
  car: Car = new Car();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCarById(this.id)
      .subscribe(datos=>{
        console.log(datos)
        this.car = datos;
      }, error=>console.log(error));
  }
  updateCar(){
    this.carService.updateCar(this.id, this.car)
      .subscribe(datos =>{
        console.log(datos)
        this.router.navigate(['car/listar']);
      }, error=>console.log(error));
    this.car = new Car();
  }
}
