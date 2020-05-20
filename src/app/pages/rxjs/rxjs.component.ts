import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable, Subscriber, Subscription } from 'rxjs';

import { retry, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  suscripcion: Subscription;

  constructor() { 
    
    // el observador puede recibir 3 callback .. 1-el next, 2do el error y 3ro cuando finaliza
    this.suscripcion = this.regresaObservable()
    // .pipe(
    //   retry(2) // sirve para intentar varias veces el proceso
    // )
    .subscribe( 
      numero => console.log('subscripcion', numero),
      error => console.log('problema con el obs', error),
      () => console.log('finalizo el observable') //el 3ro no recibe parametros a diferencia de los otros
     );

  }

  ngOnInit(): void {
  }

  //se ejecuta ondestroy cuando salimos del componente
  ngOnDestroy(){

    console.log("cerramos el componente y cancelamos la suscripcion")
    this.suscripcion.unsubscribe();

  }

  regresaObservable(): Observable<any>{
    return new Observable( (observador: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval( ()=>{
        contador += 1;

        const salida = {
          valor: contador,
        }

        observador.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observador.complete();
        // }


        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observador.error('errorrr')
        // }

      }, 1000 )
      //con el operador map modificamos el objeto que nos devuelve y sacamos solo su valor
    } ).pipe( map( resp =>{ return resp.valor } ),  
              filter( (valor, index) =>{   //con filter buscamos devolver solo los valores impares
                // console.log('filter', valor, index);
                if ( (valor % 2) === 1 ) {
                  //valor impar
                  return true;
                }
                else {
                  // valor par
                  return false;
                }
              } ) )

  }

}
