import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    EventEmitterService.get('verSinopse')
    .subscribe((value: any) => {
      console.log('Um evento ver sinopse foi chamado e estou escutando pelo app-footer')
      console.log(value)
    })
  }

}
