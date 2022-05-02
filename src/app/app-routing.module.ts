import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Aula2Component } from './views/aula2/aula2.component';
import { Aula3Component } from './views/aula3/aula3.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex6Component } from './views/ex6/ex6.component';
import { Ex9Component } from './views/ex9/ex9.component';
import { FilmeComponent } from './views/filme/filme.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aula2',
    component: Aula2Component
  },
  {
    path: 'aula3',
    component: Aula3Component
  },
  {
    path: 'detalhe-filme',
    component: FilmeComponent
  },
  {
    path: 'exercicio2',
    component: Ex2Component
  },
  {
    path: 'exercicio3',
    component: Ex3Component
  },
  {
    path: 'exercicio4',
    component: Ex4Component
  },
  {
    path: 'exercicio6',
    component: Ex6Component
  },
  {
    path: 'exercicio9',
    component: Ex9Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
