import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private http: HttpClient) { }

  resArray = [];

  //Publicaciones
  getPublicaciones() {
    return this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(res => {
        for(const key in res) {
          this.resArray.push( { ...res[key], key});
        }return this.resArray;
      })
    )
  }

  getPublicacion(idPost) {
    return this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json');
  }

  postPublicacion(infoPost) {
    return this.http.post('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json', infoPost);
  }

  deletePost(idPost) {
    return this.http.delete('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json');
  }

  updatePost(idPost, infoPost) {
    return this.http.put('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json', infoPost);
  }


  //Perfil Usuario
  getPerfilUsuario() {
    return this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/usuario.json');
  }

  updateBioUsuario(nuevaBio) {
    return this.http.put('https://instagramapp-2f603-default-rtdb.firebaseio.com/usuario/description.json', nuevaBio);
  }

  updateNombreUsuario(nuevoNombreUsuario) {
    return this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/usuario/nombre.json', nuevoNombreUsuario);
  }

}