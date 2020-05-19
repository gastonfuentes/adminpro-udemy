import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


//creamos una variable de tipo AjustesTemas (interface) 
ajustes: AjustesTemas = {
  temaUrl:"assets/css/colors/default.css",
  tema: "default"
}


  constructor( @Inject(DOCUMENT) private _document: Document ) {
    this.cargarAjustes();  //apenas llamamos a este servicio llamamos a la funcion cargarAjustes
   }

//funcion para guardar los ajustes en el localstorage
guardarAjustes(){
  console.log("guardando ajsutes en localstorage");
  localStorage.setItem('ajustes', JSON.stringify(this.ajustes)); //con la propiedad JSON .. convertimos un objeto en string para poder guardar en el localstorage
}

//funcion para traer los ajustes desde el localstorage
cargarAjustes(){
  if ( localStorage.getItem('ajustes') ) { //preguntamos si existe en el localstorage ajustes guardados
    this.ajustes = JSON.parse( localStorage.getItem('ajustes') ); //reconvertimos el string del localstorage en un objeto
    console.log('cargando ajsutes desde el localstorage'); 
    this.aplicarTema( this.ajustes.tema );   
  }
  else{
    console.log('usando valores por defecto');
    this.aplicarTema( this.ajustes.tema );   
  }
}

aplicarTema( tema:string ){

  let url = `assets/css/colors/${tema}.css`
  this._document.getElementById('tema').setAttribute('href', url)
  this.ajustes.temaUrl = url; //guardams en la variable ajustes del servicio la url y el tema
  this.ajustes.tema = tema;
  this.guardarAjustes(); // llamamos a la funcion guardarAjustes del servicio

}

}


//creamos una interface para modificar los temas de la app

interface AjustesTemas{
  temaUrl: string;
  tema: string;
}