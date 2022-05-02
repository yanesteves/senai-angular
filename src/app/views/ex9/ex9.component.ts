import { Component, OnInit } from '@angular/core';
import { ChamaFilmesService } from 'src/app/services/chama-filmes.service';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.scss']
})
export class Ex9Component implements OnInit {

  constructor(private chamaFilmes: ChamaFilmesService) { }

  ngOnInit(): void {
    this.buscaPopular()
  }

  filmePopular: any;  
  top3 = [];
  indiceFilme = 0;

  async buscaPopular() {
    const data = await this.chamaFilmes.filmesPopulares();
    console.log('-- filmes populares --')

    this.top3 = data.results.slice(0, 3);    
    this.filmePopular = this.top3[0];    
  }

  // 0, 1, 2
  proximoFilme() {
    if (this.indiceFilme == 2) {
      this.indiceFilme = 0;
    } else {
      
    }
    this.filmePopular = this.top3[this.indiceFilme]
  }

  filmeAnterior() {
    if (this.indiceFilme == 0) {
      this.indiceFilme = 2;
    } else {

    }
    this.filmePopular = this.top3[this.indiceFilme]
  }
}
