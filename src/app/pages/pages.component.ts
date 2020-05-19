import { Component, OnInit } from '@angular/core';

declare function inicio_plugins():any;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    inicio_plugins();
  }

}
