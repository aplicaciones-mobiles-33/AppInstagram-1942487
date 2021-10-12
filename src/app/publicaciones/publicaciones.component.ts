import { Component, OnInit } from '@angular/core';
import { PublicacionPageRoutingModule } from '../publicacion/publicacion-routing.module';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/feed.json';

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

  publicacionesArray: Publicaciones[] = [
    {
      imagen: '../assets/images/Post 1.png',
      id: 1
    },
    {
      imagen: '../assets/images/Post 2.png',
      id: 2
    },
    {
      imagen: '../assets/images/Post 3.png',
      id: 3
    },
    {
      imagen: '../assets/images/Post 4.png',
      id: 4
    },
    {
      imagen: '../assets/images/Post 5.png',
      id: 5
    },
    {
      imagen: '../assets/images/Post 6.png',
      id: 6
    },
    {
      imagen: '../assets/images/Post 7.png',
      id: 7
    },
    {
      imagen: '../assets/images/Post 8.png',
      id: 8
    },
    {
      imagen: '../assets/images/Post 9.png',
      id: 9
    },
    {
      imagen: '../assets/images/Post 10.png',
      id: 10
    },
    {
      imagen: '../assets/images/Post 11.png',
      id: 11
    },
    {
      imagen: '../assets/images/Post 12.png',
      id: 12
    }
  ];

  datos = data;
  publicaciones: any = this.datos.publicaciones;
  usuario: any = this.datos.usuario;
  datosUsuario: string = this.usuario.nombre;

  constructor(private http: HttpClient) { }

  publicacionesPorUsuario = [];

  get filtrarPublicaciones(): string {
    return this.datosUsuario;
  }

  set filtrarPublicaciones(valor: string){
    this.datosUsuario = valor;
    this.publicacionesPorUsuario = this.filtroPublicaciones(valor);
  }

  filtroPublicaciones(nombreUsuario: string){
     nombreUsuario = nombreUsuario.toLocaleLowerCase();
     return this.publicaciones.filter((publicacion: any)=> publicacion.usuario.toLocaleLowerCase().includes(nombreUsuario));
  }

  ngOnInit() {

    this.filtrarPublicaciones = this.datosUsuario;
    this.http.get('../../assets/feed.json').subscribe(datos =>{
      console.log(datos);
    })

  }

}
