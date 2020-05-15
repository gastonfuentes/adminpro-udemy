import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //con viewchild tomamos la referencia de una etiqueta html
  @ViewChild('inputProgress') etiquetaHtml: ElementRef;

  @Input() leyenda:string = 'leyenda';
  @Input() progreso:number = 50;

  @Output() cambiaValor: EventEmitter<number> = new EventEmitter(); 

  constructor() { 
  }

  ngOnInit(): void {
  }

  //funcion que recibimos un valor cuando modificamos el valor desde el input y con el elemento html que obtuvimos le ponemos una validacion para que no puedan ingresar mas numeros sino los de 0 a 100
  onChanges( nuevoValor: number ){


    if (nuevoValor >= 100) {
      this.progreso = 100
    } else if (nuevoValor <= 0) {
      this.progreso = 0
    } else {
      this.progreso = nuevoValor
    }

    this.etiquetaHtml.nativeElement.value = this.progreso;
    this.cambiaValor.emit(this.progreso);
  }

  modificarProgreso( valor: number){

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambiaValor.emit(this.progreso);

    this.etiquetaHtml.nativeElement.focus(); //ponemos el focus en el input
  }

}
