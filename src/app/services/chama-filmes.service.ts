import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChamaFilmesService {

  constructor(private http: HttpClient) { }

  public requisicaoGet(codigoFilme: any) {
    return new Promise<any>((resolve) => {
      // this.http.get('https://api.themoviedb.org/3/movie/440?api_key=ea6521fa2ea884d4671f8174ff9cf46f')
      this.http.get(`${environment.filmesAPI}/${codigoFilme}?api_key=${environment.apiKey}`)
        .subscribe(data => {
          resolve(data)
        })
    })
    // console.log('-- requisicao get --')
    // // https://api.themoviedb.org/3/movie/440?api_key=ea6521fa2ea884d4671f8174ff9cf46f    
  }

  public filmesPopulares() {
    return new Promise<any>((resolve) => {
      // this.http.get('https://api.themoviedb.org/3/movie/440?api_key=ea6521fa2ea884d4671f8174ff9cf46f')
      this.http.get(`${environment.filmesAPI}/popular?api_key=${environment.apiKey}&language=en-US&page=1`)
        .subscribe(data => {
          resolve(data)
        })
    })
  }
}
