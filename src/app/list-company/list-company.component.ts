import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company-service';
import{Company} from '../model/company';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  name: string='';
  companies: Company[]=[];

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadDataCompanies();
  }

  loadDataCompanies(){
    this.companyService.getCompanyList()
      .subscribe(companies=>this.companies=companies);
  }
  deleteCompany(company: Company){
    this.companyService.deleteCompany(company.id)
      .subscribe(data=>{this.loadDataCompanies();})
  }

  updateCompany(company: Company){
    this.router.navigate(['company/actualizar', company.id]);
  }

  searchCompanyByName(){
    if(this.name.length!=0){
      this.companyService.getCompanyByName(this.name)
        .subscribe(companies=>this.companies=companies);
    }
    else
      this.loadDataCompanies();
  }

}
