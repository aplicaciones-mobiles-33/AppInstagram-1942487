import { Injectable } from '@angular/core';
import {AngularFireStorage } from '@angular/fire/compat/storage'; 

@Injectable({
  providedIn: 'root'
})
export class SubirFotoService {

  constructor(private storage: AngularFireStorage ) { }

  subirFoto(nombre, datos) {
    //const ref = this.storage.ref('path'); //datos.url
    //const task = ref.putString(ref);
    this.storage.upload(nombre, datos);
  }
}