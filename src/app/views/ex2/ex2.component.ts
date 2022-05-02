import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
  termoPesquisado = '';
  constructor() { }

  ngOnInit(): void {
  }

  textoDigitado(event: any) {
    console.log(event)
    return;
    if (event.key == 'Enter') {
      alert('Pesquisando termo ' + this.termoPesquisado)
      return;      
    }
    this.termoPesquisado += event.key;
    console.log(this.termoPesquisado)
    // console.log('texto foi digitado')
    // console.log(this.termoPesquisado)
  }
}
