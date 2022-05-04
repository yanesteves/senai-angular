import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aula2Component } from './views/aula2/aula2.component';
import { Aula3Component } from './views/aula3/aula3.component';
import { FilmeComponent } from './views/filme/filme.component';
import { HomeComponent } from './views/home/home.component';
import { SerieComponent } from './views/serie/serie.component';

const routes: Routes = [
  {
    path: '',
    // esse
    // component: HomeComponent,
    // ou esse abaixo
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
    path: 'series',
    component: SerieComponent
  },
  // {
  //   path: 'serie',
  //   component: SerieComponent
  // }
  // {
  //   path: '**',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
