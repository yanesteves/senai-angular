import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },  
    ]
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'privado',
        loadChildren: () => import('./privado/privado.module').then(m => m.PrivadoModule)
      }
    ]
  }


  // {

  // }
  // {
  //   path: 'layoutx', 
  //   component: ContentComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent
  //     },
  //     {
  //       path: 'serie',
  //       component: SerieComponent
  //     },
  //     // {  path: 'signin', component: SigninComponent },
  //     // {  path: 'signup', component: SignupComponent },
  //   ]
  // }

  // {
  //   path: '',
  //   // esse
  //   // component: HomeComponent,
  //   // ou esse abaixo
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'aula2',
  //   component: Aula2Component
  // },
  // {
  //   path: 'aula3',
  //   component: Aula3Component
  // },
  // {
  //   path: 'detalhe-filme',
  //   component: FilmeComponent
  // },
  // {
  //   path: 'series',
  //   component: SerieComponent
  // },
  // // {
  // //   path: 'serie',
  // //   component: SerieComponent
  // // }
  // // {
  // //   path: '**',
  // //   component: HomeComponent
  // // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
