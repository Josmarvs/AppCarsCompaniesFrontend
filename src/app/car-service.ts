import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService{
  private baseURL='http://localhost:3005/cars';
  constructor( private http: HttpClient) { }

  createCar(car: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, car);
  }

  updateCar(id:number, car: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, car);
  }

  getCarList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteCar(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getCarById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getCarByName(name: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getCarByModel(model: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByModel/${model}`);
  }

}
