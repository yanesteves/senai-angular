import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Aula2Component } from './views/aula2/aula2.component';

// Aula 2
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Service1Service } from './services/service1.service';
import { FilmeComponent } from './views/filme/filme.component';

// carrega o módulo para requisições http
import { HttpClientModule } from '@angular/common/http';

import { WebService } from './services/web.service';
import { Aula3Component } from './views/aula3/aula3.component';
import { FormataCPFPipe } from './pipes/formata-cpf.pipe';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex6Component } from './views/ex6/ex6.component';
import { ChamaFilmesService } from './services/chama-filmes.service';
import { Ex9Component } from './views/ex9/ex9.component';
import { Ex2Component } from './views/ex2/ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Aula2Component,
    FilmeComponent,
    Aula3Component,
    FormataCPFPipe,
    Ex3Component,
    Ex4Component,
    Ex6Component,
    Ex9Component,
    Ex2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule
  ],
  providers: [
    Service1Service,
    WebService,
    ChamaFilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
