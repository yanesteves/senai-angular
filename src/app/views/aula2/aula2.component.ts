import { Component, OnInit } from '@angular/core';
// 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-aula2',
  templateUrl: './aula2.component.html',
  styleUrls: ['./aula2.component.scss']
})
export class Aula2Component implements OnInit {

  formValid = false;
  // nomePessoa = "Jorge";
  nomePessoa: string = ""

  _form: FormGroup = this.formBuilder.group({
    nome: ['', [ Validators.required ] ],
    endereco: [''],
    estado: ['']
  });  

  constructor(private formBuilder: FormBuilder,
    public _service: Service1Service) {  
               
  }
  
  ngOnInit(): void {    
    // simulando retorno de api
    const data = { 
      nome: "yan",
      rua: 'rua tal',
      numero: '90',
      estado: "rj"
    }

    // this._form.patchValue(data);
    
    this._form.patchValue({
      nome: "yan",
      endereco: data.rua + ',' + data.numero
    })   
  }

  keyPress(event: any) { 
  }

  // keyup(event: any) {
  //   alert('key up' )
  //   console.log('-- key up --')
  //   console.log(this.nomePessoa)
  // }

  MostrarNome() {
    alert(this.nomePessoa)
  }

  submit() {
    if (this._form.valid) {
      // alert('Formulário enviado')
      console.log(this._form.value)
    } else {
      alert('Precisa digitar o nome')
    }
    
  }
}
