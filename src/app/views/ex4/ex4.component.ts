import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit {
  
  _form: FormGroup = this._formBuilder.group({
    nome: ['', [ Validators.minLength(3), Validators.required ]],
    email: ['', [Validators.email]],
    nomeFilme: ['', [ Validators.minLength(3), Validators.required ]],
    // avaliacao: [null, [Validators.required]]
  });   

  var: string = ''

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {    
  }

  enviaFormulario() {
    if (this._form.valid) {      
      alert('Você avaliou o filme ' + this._form.value.nomeFilme)
    } else {
      alert('Form não é válido')
    } 
  }
}
