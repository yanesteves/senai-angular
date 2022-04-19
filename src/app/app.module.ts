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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Aula2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Service1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
