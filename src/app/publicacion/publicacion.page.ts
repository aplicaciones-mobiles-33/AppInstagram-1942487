import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import * as data from '../../assets/feed.json'
import { Location } from '@angular/common';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  idPublicacion: number;
  publicacion: any;
  usuario: any;
  datos = data;
  filterPublicaciones: any;
  publicaciones: any = this.datos.publicaciones;

  constructor(private ruta: ActivatedRoute, private _location : Location) { }

  get filtrarPublicaciones(): number {
    return this.idPublicacion;
  }

  set filtrarPublicaciones(valor: number){
    this.idPublicacion = valor;
    this.filterPublicaciones = this.filtroPublicaciones(valor);
  }

  filtroPublicaciones(idPublicacion: number): any {
    return this.publicaciones.find((publicacion: any) => publicacion.id == idPublicacion);
  }

  volver(): void {
    this._location.back();
  }  

  ngOnInit() {

    this.idPublicacion = this.ruta.snapshot.params.publicacionId;
    console.log(this.idPublicacion);
    this.filtrarPublicaciones = this.idPublicacion;
    console.log(this.filterPublicaciones)
    

    //this.idPublicacion = this.RutaActiva.snapshot.params.id;
    //console.log(this.idPublicacion);
  }

}
