import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService{
  private baseURL = 'http://localhost:3005/companies';
  constructor(private http: HttpClient) {}

  createCompany(company: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, company);
  }

  updateCompany(id:number, company: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, company);
  }

  getCompanyList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteCompany(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getCompanyById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getCompanyByName(name: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getComapanyByCity(city: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByCity/${city}`);
  }

}
