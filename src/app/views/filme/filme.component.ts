import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  data: any;

  indiceFilme = 540;

  constructor(private web: WebService) { }

  ngOnInit(): void {  
    this.carregaDadosFilme()
  }

  erro = false;
  async carregaDadosFilme() {
    // this.data = await this.web.requisicaoGet(this.indiceFilme, {});  // Retorna o que eu passar resolve 
    // if (!this.data) {
    //   this.erro = true;
    // }    
    this.web.requisicaoGet(this.indiceFilme, {}).then((data)=> {
      // this.dadosFilme = data      
      this.data = data;
      if (!data) {        
        this.erro = false;
      } else {
        this.erro = true;
      }      
    }).catch(err => {
      console.log(err)
      this.erro = true;
    })
  }

  mudarFilme() {
    this.indiceFilme += 1;
    this.carregaDadosFilme()
  }
}
