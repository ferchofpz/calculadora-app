import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  operandoA: number;
  operandoB: number;
  resultado: number;
  @Output() resultadoSalida = new EventEmitter<number>();

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
    this.resultadoSalida.emit(this.resultado);
  }
}
