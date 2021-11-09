import { Component, OnInit } from '@angular/core';
import { PublicacionPageRoutingModule } from '../publicacion/publicacion-routing.module';
//import { HttpClient } from '@angular/common/http';
//import * as data from '../../assets/feed.json';
//import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { FirebaseDbService } from '../firebase-db.service';

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
  
  constructor(private db: FirebaseDbService) { }

   publicaciones = [];

   obtenerPublicaciones(): void {
    this.db.getPublicaciones().subscribe(
      res => {
        console.log(res);
        this.publicaciones = res;
      }
    )
  }

  ngOnInit() {
    this.obtenerPublicaciones();
  }
}