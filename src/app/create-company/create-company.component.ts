import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company-service';
import { Company } from '../model/company';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = new Company();

  constructor( private route: ActivatedRoute,
               private router : Router,
               private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  insertCompany(){
    this.companyService.createCompany(this.company)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.company = new Company();
    this.router.navigate(['listar']);
  }

}

