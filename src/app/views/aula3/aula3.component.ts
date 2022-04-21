import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula3',
  templateUrl: './aula3.component.html',
  styleUrls: ['./aula3.component.scss']
})
export class Aula3Component implements OnInit {

  termo = ''
  cpf = '77538134980'
  // data = [
  //   {
  //     id: "1"
  //   },
  //   {
  //     id: "2"
  //   },
  //   {
  //     id: "3"
  //   }
  // ]
  constructor() { }

  ngOnInit(): void {
  }

  busca() {
    // this.data = this.data.filter(item => item.id == this.termo)
  }
}
