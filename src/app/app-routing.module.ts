import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCarComponent} from "./list-car/list-car.component";
import {CreateCarComponent} from "./create-car/create-car.component";
import {FindCarComponent} from "./find-car/find-car.component";
import {CreateCompanyComponent} from "./create-company/create-company.component";
import {FindCompanyComponent} from "./find-company/find-company.component";
import {ListCompanyComponent} from "./list-company/list-company.component";
import {UpdateCompanyComponent} from "./update-company/update-company.component";
import {UpdateCarComponent} from "./update-car/update-car.component";

const routes: Routes = [

  {path: '', redirectTo:'car', pathMatch:'full'},
  {path: 'home car', component: ListCarComponent},
  {path: 'add car', component:CreateCarComponent},
  {path: 'buscar car', component: FindCarComponent},
  {path: 'car/actualizar/:id', component: UpdateCarComponent},


  {path: '', redirectTo:'company', pathMatch:'full'},
  {path: 'home company', component: ListCompanyComponent},
  {path: 'add company', component:CreateCompanyComponent},
  {path: 'buscar company', component: FindCompanyComponent},
  {path: 'company/actualizar/:id', component: UpdateCompanyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
