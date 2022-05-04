import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  
  arraySerie = [
    {
      codigo: 1,
      nome: "Nome 01",
      duracao: "29min"
    },
    {
      codigo: 2,
      nome: "Nome 02",
      duracao: "39min"
    },
    {
      codigo: 3,
      nome: "Nome 03",
      duracao: "27min"
    }
  ];
//   constructor(private route: ActivatedRoute,
//     private router: Router,
//     private disciplinasService: DisciplinasService) {
// }

// ngOnInit() {
// const id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {       
    const serie_id = this.route.snapshot.paramMap.get('id');
  }

  chamarFuncao(event: any) {
    alert('Evento recebido: ' + event)
  }

  eventoRecebido(event: any) {
    alert('Ver sinopse: ' + event)
    console.log(event)
  }
}
