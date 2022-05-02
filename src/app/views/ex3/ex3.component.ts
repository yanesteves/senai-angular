import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {

  var1 = 0;
  var2 = 0;
  calculoRealizado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    const v = this.var1 + this.var2;
    this.calculoRealizado = 'Resultado: ' + v
  }

  limpar() {
    this.calculoRealizado = '';
    this.var1 = 0;
     this.var2 = 0;
  }
}
