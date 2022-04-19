import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  publiccustomVariable = 'custom variable'

  nomeUsuario = "Jorge de Paula"

  constructor() { }
  
    public get() {
      /*
      .get()
      */
    }

    post() {
      /**
       * .post()
       */
    }

    delete() {

    }
}
