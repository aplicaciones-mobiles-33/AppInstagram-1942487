import { Injectable } from '@angular/core';
import {Camera, Photo, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem} from '@capacitor/filesystem';
import {Storage} from '@capacitor/storage';

import { Platform } from '@ionic/angular';


export interface Foto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Foto[] = [];
  private PHOTO_STORAGE: string = 'photos'; //ruta
  private plataforma: Platform;

  constructor(plataforma: Platform) {
    this.plataforma = plataforma;
  }

  public async agregarFoto() {
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const fotoGuardada = await this.guardarFoto(fotoCapturada);

    this.photos.unshift(fotoGuardada);
    // this.photos.unshift({
    //   filepath: "",
    //   webviewPath: fotoCapturada.webPath
    // });

    console.log(this.photos);


    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    })
  }

  private async readAsBase64(camaraFoto: Photo) {

    if(this.plataforma.is('hybrid')) {
      const archivo = await Filesystem.readFile({
        path: camaraFoto.path
      });

      return archivo.data;
    }else {
      const respuesta = await fetch(camaraFoto.webPath);
      const blob = await respuesta.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
    //const response = await fetch(camaraFoto.webPath);
    //const blob = await response.blob();

    //return await this.convertBlobToBase64(blob) as string;

  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload= () =>  {
      resolve(reader.result);
    }
    reader.readAsDataURL(blob);
  })

  private async guardarFoto(camaraFoto: Photo) {
    const base64Data = await this.readAsBase64(camaraFoto);

    const nombreArchivo = new Date().getTime() + '.jpeg';
    const archivo = await Filesystem.writeFile({
      path: nombreArchivo,
      data: base64Data,
      directory: Directory.Documents
    });

    if(this.plataforma.is('hybrid')) {
      return {
        filepath: archivo.uri,
        webviewPath: Capacitor.convertFileSrc(archivo.uri)
      }
    } else {
      return {
        filepath: nombreArchivo,
        webviewPath: camaraFoto.webPath
      }
    }
    //console.log(archivo);
    // return {
    //   filepath: nombreArchivo,
    //   webviewPath: camaraFoto.webPath
    // }
  }


  public async cargarFotosGuardadas() {
    const listaFotos = await Storage.get({key: this.PHOTO_STORAGE});
    this.photos = JSON.parse(listaFotos.value) || [];

    if(!this.plataforma.is('hybrid')) {
      for(let photo of this.photos) {
        const readArchivo = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
        });

        photo.webviewPath = `data:image/jpeg:base64', ${readArchivo.data}`;

      }
    }
  }
  
}