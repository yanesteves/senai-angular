import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.scss']
})
export class ListaEpisodiosComponent implements OnInit {
  
  // codigo: 1,
  // nome: "Nome 01",
  // duracao: "29min"
  @Input('episodios') episodios: any[] = [];  

  // @Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();
  // @Output('outputEvent') outputEvent: EventEmitter<any> = new EventEmitter<any>();
  // @Output('sinopseEvent') _sinopse: EventEmitter<any> = new EventEmitter<any>();

  constructor() {    
  }

  ngOnInit(): void {
  }

  gerarEvento(ep: any) {
    // this.outputEvent.emit(ep)
  }

  gerarEventoSinopse(ep: any) {
    // this._sinopse.emit(ep)
    EventEmitterService.get('verSinopse').emit(ep)
  }

}
