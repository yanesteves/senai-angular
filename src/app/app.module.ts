import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SerieComponent } from './views/serie/serie.component';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { EventEmitterService } from './services/event-emitter.service';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    Aula2Component,
    Aula3Component,
    HomeComponent,
    FilmeComponent,
    SerieComponent,
    ListaEpisodiosComponent,
    
    FormataCPFPipe,

    FullComponent,
    ContentComponent,
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
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
