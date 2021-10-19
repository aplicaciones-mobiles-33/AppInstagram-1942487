import { Component, OnInit } from '@angular/core';
import { PublicacionPageRoutingModule } from '../publicacion/publicacion-routing.module';
import { HttpClient } from '@angular/common/http';
//import * as data from '../../assets/feed.json';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

export interface Publicaciones{
  id: number; 
  imagen: string;
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

   publicacionesPorUsuario = [];

   obtenerPublicaciones(): void {
     this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json').subscribe(publicacionesRespuesta => {

     
       console.log(publicacionesRespuesta);
     })
   }

  ngOnInit() {
    this.obtenerPublicaciones();
  }
}