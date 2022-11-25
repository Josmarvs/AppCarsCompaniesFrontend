import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company-service';
import {Company} from '../model/company';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  id: number = 0;
  company: Company= new Company();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private companyService : CompanyService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.companyService.getCompanyById(this.id)
      .subscribe(datos=>{
        console.log(datos)
        this.company = datos;
      }, error=>console.log(error));
  }

  updateCompany(){
    this.companyService.updateCompany(this.id, this.company)
      .subscribe(datos =>{
        console.log(datos)
        this.router.navigate(['listar']);
      }, error=>console.log(error));
    this.company = new Company();
  }

}
