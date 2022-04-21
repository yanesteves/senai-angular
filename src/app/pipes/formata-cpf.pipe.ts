import { Pipe, PipeTransform } from '@angular/core';
// require ... module
@Pipe({
  name: 'formataCPF'
})
export class FormataCPFPipe implements PipeTransform {

  transform(cpf: string): string {
    if (!cpf || cpf.trim() === '') return ''
    let formatado: string = '';
    // [012] [345] [678] [9X]
    formatado = cpf.substring(0, 3) + '.'; // 0, 1, 2
    formatado = formatado + cpf.substring(3, 6) + '.';
    formatado = formatado + cpf.substring(6, 9) + '-';
    formatado = formatado + cpf.substring(9, 11);
    
    return formatado;
  }
}
