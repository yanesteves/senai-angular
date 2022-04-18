import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private api: HttpClient) { }

  public getHttp(endpoint: any, headers?: any) {
    return new Promise((resolve, reject) => {
      // this.http.get(environment.urlApi + endpoint, { headers: headers }).toPromise().then((data: any) => {
      //   console.log('WebService::get:then');
      //   resolve(data)
      // }, err => {
      //   console.log('WebService::get:err');
      //   reject(err);
      // })
    })
  }

  public postHttp(endpoint: any, data: any, headers?: any) {
    return new Promise((resolve, reject) => {
      // const path = environment.urlApi + endpoint;
      // this.http.post(path, data, { headers: headers }).toPromise().then((data: any) => {
      //   console.log('WebService::post:then');
      //   resolve(data)
      // }, err => {
      //   console.log('WebService::get:err');
      //   reject(err);
      // })
    })
  }
}
