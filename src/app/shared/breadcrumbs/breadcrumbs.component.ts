import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  nombreRutas: string;

  constructor( public route:Router,
               public titulo: Title, // la propiedad de tipo Title sirve para ponerle el titulo a la pestana web
               public meta: Meta ) { // esta propiedad sirve para agregar metatags

    //llamamos a la funcion para obtener el nombre que pasamos en las rutas   
    this.traerNombreRutas().subscribe( resp => {
      this.nombreRutas = resp.titulo;
      console.log(this.nombreRutas);
      this.titulo.setTitle(this.nombreRutas);

      //agregams un meta tag
      const metatag: MetaDefinition = {
        name: 'descripcion',
        content: this.nombreRutas,
      };
      this.meta.updateTag(metatag);


    } );

   }

  ngOnInit(): void {
  }

  traerNombreRutas(){

    return this.route.events.pipe(
      filter( evento => { return evento instanceof ActivationEnd } ), //decimos que devuelva solo los ActivationEnd
      filter( (evento: ActivationEnd) => {  //aca filtramos solo los que tengan "firstChild"
        if (evento.snapshot.firstChild === null) {
          return true;
        }
       } ),
      map( evento => {  //con el map obtenemos el .data del objeto el cual contiene lo que buscamos
        return evento.snapshot.data;
      } )  
    )
    
  }

}
