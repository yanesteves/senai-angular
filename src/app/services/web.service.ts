import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }
  // https://api.themoviedb.org/3/movie/550?api_key=ea6521fa2ea884d4671f8174ff9cf46f
  
  // Headers = {
  //   Authorization: "Bearer ggifg"
  // }

  // apiURL = "https://api.themoviedb.org/3/movie/"
  public requisicaoGet(codigoFilme: any, headers: any) {
    return new Promise((resolve, reject) => {      
      // const path = `${environment.filmesAPI}+${codigoFilme}?api_key=ea6521fa2ea884d4671f8174ff9cf46f`
      this.http.get(environment.filmesAPI + codigoFilme + '?api_key=ea6521fa2ea884d4671f8174ff9cf46f', { headers: headers }).toPromise().then((data: any) => {
        resolve(data)
      }).catch(err => {
        console.log('-- catch no get --')
        console.log(err)
        reject(err)
        // resolve(null)
      })

    })
  }










  // public getHttp(endpoint: any, headers?: any) {
  //   return new Promise((resolve, reject) => {
  //     // this.http.get(environment.urlApi + endpoint, { headers: headers }).toPromise().then((data: any) => {
  //     //   console.log('WebService::get:then');
  //     //   resolve(data)
  //     // }, err => {
  //     //   console.log('WebService::get:err');
  //     //   reject(err);
  //     // })
  //   })
  // }

  // public postHttp(endpoint: any, data: any, headers?: any) {
  //   return new Promise((resolve, reject) => {
  //     // const path = environment.urlApi + endpoint;
  //     // this.http.post(path, data, { headers: headers }).toPromise().then((data: any) => {
  //     //   console.log('WebService::post:then');
  //     //   resolve(data)
  //     // }, err => {
  //     //   console.log('WebService::get:err');
  //     //   reject(err);
  //     // })
  //   })
  // }
}
