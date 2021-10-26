import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  constructor(private db: FirebaseDbService) {
    
  }

  description: String;
  nombre: String;
  followers: number;
  following: number;
  usuario: string;
  posts: number;

  obtenerPerfil() : void {
    this.db.getPerfilUsuario().subscribe(respuesta => {
      console.log(respuesta);

      let perfilUsuario = Object.assign(respuesta);

      this.description = perfilUsuario.description;
      this.nombre = perfilUsuario.nombre;
      this.followers = perfilUsuario.followers;
      this.following = perfilUsuario.following;
      this.usuario = perfilUsuario.usuario;
    })
  }
   

  obtenerPublicaciones() :void {
    this.db.getPublicaciones().subscribe(res => {
      console.log(res);
    })
   }

  ngOnInit() {
    this.obtenerPerfil();

    this.obtenerPublicaciones;
  }

}
