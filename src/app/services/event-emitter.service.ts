import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  static get(nomeEvento: string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
      this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
  }
}

/**
 * EventEmitterService.get('logado').emit()
 * EventEmitterService.get('clicouTrailer').emit() 
 * 
 * emitters['evento1']
 * 
 * emitters['logado']
 * emitters['clicouTrailer']
 * 
 */
