import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Aula2Component } from './views/aula2/aula2.component';

// Aula 2
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Service1Service } from './services/service1.service';
// import { FilmeComponent } from './views/filme/filme.component';

import { HttpClientModule } from '@angular/common/http';
import { WebService } from './services/web.service';
// import { Aula3Component } from './views/aula3/aula3.component';
import { FormataCPFPipe } from './pipes/formata-cpf.pipe';
// import { SerieComponent } from './views/serie/serie.component';

import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { EventEmitterService } from './services/event-emitter.service';

// import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './views/esqueci-senha/esqueci-senha.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    
    FormataCPFPipe,

    FullComponent,
    ContentComponent,
    LoginComponent,
    CadastroComponent,
    EsqueciSenhaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    SharedModule,
  ],
  providers: [
    Service1Service,
    WebService,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
