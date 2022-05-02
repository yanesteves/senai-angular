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
  async buscaPopular() {
    const data = await this.chamaFilmes.filmesPopulares();
    console.log('-- filmes populares --')
    console.log(data.results[0])
    this.filmePopular = data.results[0]
  }

}
