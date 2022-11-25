import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CreateCarComponent} from "./create-car/create-car.component";
import {FindCarComponent} from "./find-car/find-car.component";
import {ListCarComponent} from "./list-car/list-car.component";
import {UpdateCompanyComponent} from "./update-company/update-company.component";
import {UpdateCarComponent} from "./update-car/update-car.component";
import {CreateCompanyComponent} from "./create-company/create-company.component";
import {FindCompanyComponent} from "./find-company/find-company.component";
import {ListCompanyComponent} from "./list-company/list-company.component";

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    CreateCarComponent,
    FindCarComponent,
    UpdateCarComponent,
    ListCompanyComponent,
    CreateCompanyComponent,
    FindCompanyComponent,
    UpdateCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
