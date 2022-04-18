import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // dataGraficos = [];

  variavel1 = `Cliques 0`;
  contagem = 0;
  constructor(private _service1: Service1Service) {     
  }

  ngOnInit(): void {
    // const variable = this._service1.get();
    // alert(variable)
  }

  acaoBotao() {
    this.contagem += 1;
    this.variavel1 = `Cliques ${this.contagem}`
  }

  search(term: any) {
    /**
     * realizar busca
     */
  }

}
