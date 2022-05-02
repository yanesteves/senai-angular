
import { Component, OnInit } from '@angular/core';
import { ChamaFilmesService } from 'src/app/services/chama-filmes.service';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.scss']
})
export class Ex6Component implements OnInit {

  constructor(private chamaFilme: ChamaFilmesService) { }

  ngOnInit() {
    // this.requisicaoGet();    
    this.dadoFilme()
  }


  resposta: any;
  carregado = 0;
  async dadoFilme() {
    console.log('-- dado filme --')
    const data = await this.chamaFilme.requisicaoGet(347);
    await this.timer()  
    this.carregado = 1;
    this.resposta = data;
    // console.log(this.resposta)    
    // console.log('-- requisicao get --')
    // // https://api.themoviedb.org/3/movie/440?api_key=ea6521fa2ea884d4671f8174ff9cf46f
    // this.http.get('https://api.themoviedb.org/3/movie/440?api_key=ea6521fa2ea884d4671f8174ff9cf46f')
    // .subscribe(data => {
    //   console.log(data)
    // })
  }

  timer() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()    
      }, 3500);
    })    
  }
}
