import { Component } from '@angular/core';
import * as data from '../../assets/feed.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datos = data; 
  publicaciones: any = this.datos.publicaciones;
   

  constructor() {}

}
