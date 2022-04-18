import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  publiccustomVariable = 'custom variable'
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
