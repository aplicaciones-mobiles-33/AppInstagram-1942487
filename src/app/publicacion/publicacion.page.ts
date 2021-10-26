import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import * as data from '../../assets/feed.json'
import { Location } from '@angular/common';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  idPublicacion: any;
  publicacion: any;
  usuario: any;
  datos = data;
  filterPublicaciones: any;
  publicaciones: any = this.datos.publicaciones;
  publicacionId: any;
  urlFoto: String;


  constructor(
    private RutaActiva: ActivatedRoute, 
    private _location : Location,
    private db: FirebaseDbService){}
    
  /*
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
  */

  volver(): void {
    this._location.back();
  }  

  obtenerDetallePublicacion(param): void {

    //agregar FN para obtenerDetalle de publicacion

    this.db.getPublicacion(param).subscribe(res=> {
      console.log(res);

      let respuesta = Object.assign(res);

      this.publicacion = respuesta.caption;
      this.usuario = respuesta.usuario;
      this.urlFoto = respuesta.urlFoto;
     
    })
    
  }

  ngOnInit() {
  
    this.idPublicacion = this.RutaActiva.snapshot.params.id;

    console.log(this.RutaActiva.snapshot.params.id);
 
    this.obtenerDetallePublicacion(this.idPublicacion);
  
    /*
    this.ruta.queryParams.subscribe(params => {
      console.log(params);
      this.idPublicacion = params.publicacionId;
      console.log(this.idPublicacion);
    }
    )
   
    this.idPublicacion = this.ruta.snapshot.params.publicacionId;
    console.log(this.idPublicacion);
    this.filtrarPublicaciones = this.idPublicacion;
    console.log(this.filterPublicaciones)
    */

    //this.idPublicacion = this.RutaActiva.snapshot.params.id;
    //console.log(this.idPublicacion);
  }

}
