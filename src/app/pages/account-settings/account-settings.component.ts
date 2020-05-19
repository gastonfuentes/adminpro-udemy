import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiaColor( color:string, link: any ){ //recibimos el color y el selector
    console.log(color);
    this._settings.aplicarTema(color);    

    this.aplicarCheck(link);
  }

  aplicarCheck( link: any ){
    let selectores:any = document.getElementsByClassName('selector');
    for (const selector of selectores) {
      selector.classList.remove('working'); //removemos la clase working de todos los elemntos      
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._settings.ajustes.tema; 
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;        
      }
    }
  }

}
