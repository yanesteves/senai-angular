import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { 

    let headers = {
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }

    // this.http.get(environment.filmesAPI + 540, { headers: headers })

    // // cadastro
    // const url = 'localhost:3047/cadastro'
    // const data = {
    //   nome: 'Yan',
    //   estado: 'RJ'
    // }
    // const id = this.http.post(url, data, { headers: headers})
    
    
    // // edição
    // const data2 = {
    //   nome: 'Yan',
    //   estado: 'SC'
    // }
    // this.http.put(url + `/${id}`, data2, { headers: headers})



  }
  
  // apiURL = ""

  // retorna dados sobre um filme
  // 'https://api.themoviedb.org/3/movie/CODIGOFILME?api_key=ea6521fa2ea884d4671f8174ff9cf46f'

  // retorna os mais populares 20 em 20
  // https://api.themoviedb.org/3/movie/popular?api_key=ea6521fa2ea884d4671f8174ff9cf46f&language=en-US&page=1

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
