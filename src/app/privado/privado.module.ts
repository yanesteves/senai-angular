import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ContaComponent } from './views/conta/conta.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContaComponent
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
