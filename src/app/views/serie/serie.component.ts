import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  
  arraySerie = [
    {
      codigo: 1,
      nome: "Nome 01",
      duracao: "29min"
    },
    {
      codigo: 2,
      nome: "Nome 02",
      duracao: "39min"
    },
    {
      codigo: 3,
      nome: "Nome 03",
      duracao: "27min"
    }
  ];
  constructor() { }

  ngOnInit(): void {   
  }

  chamarFuncao(event: any) {
    alert('Evento recebido: ' + event)
  }

  eventoRecebido(event: any) {
    alert(event)
    console.log(event)
  }
}
