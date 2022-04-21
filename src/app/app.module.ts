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

import { HttpClientModule } from '@angular/common/http';
import { WebService } from './services/web.service';
import { Aula3Component } from './views/aula3/aula3.component';
import { FormataCPFPipe } from './pipes/formata-cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Aula2Component,
    FilmeComponent,
    Aula3Component,
    FormataCPFPipe
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
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
