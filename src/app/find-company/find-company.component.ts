import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../company-service';

@Component({
  selector: 'app-find-company',
  templateUrl: './find-company.component.html',
  styleUrls: ['./find-company.component.css']
})
export class FindCompanyComponent implements OnInit {

  id: number = 0;
  name: string = '';
  company: Company = new Company();
  ruc: number = 0;
  address: string= '';
  contry: string = '';
  city: string= '';
  email: string= '';
  companies: Company[]=[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  searchCompanyById(){
    this.companyService.getCompanyById(this.id)
      .subscribe(company=>{
        console.log(company)
        this.company = company});
  }

  searchCompanyByName(){
    this.companyService.getCompanyByName(this.name)
      .subscribe(companies=>{
        console.log(companies)
        this.companies = companies});
  }

  searchCompanyByCity(){
    this.companyService.getComapanyByCity(this.city)
      .subscribe(companies => {
        console.log(companies)
        this.companies=companies});
  }

}
