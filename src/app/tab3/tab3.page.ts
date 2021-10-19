import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  constructor(private http: HttpClient) {
    
  
  }

  description: String;
  nombre: String;
  followers: number;
  following: number;
  usuario: string;
  posts: number;

  obtenerPerfil() : void {
    this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/usuario.json')
    .subscribe(respuesta => {
      console.log(respuesta);

      let res = Object.assign(respuesta);

      this.description = res.description;
      this.nombre = respuesta['nombre'];
      this.followers = respuesta['followers'];
      this.following = respuesta['following'];
      this.usuario = respuesta['nombre']
    })
  }
   

  obtenerPublicaciones() :void {
   this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json')
   .subscribe(responseData => {
     console.log(responseData);
   })
  }

  ngOnInit() {
    this.obtenerPerfil();

    this.obtenerPublicaciones;
  }

}
