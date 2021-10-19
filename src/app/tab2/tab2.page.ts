import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {}

  descripcionFoto: String;
  usuario: String ;

  urlFoto: String = '../assets/images/feed/feed1.png';
  datosPublicacion: any = {
    usuario: String,
    caption: String,
    urlFoto: String
  }
  
  
  crearPublicacion(params: {usuario: String; caption: String; urlFoto: String}) {
    this.http.post('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json', params)
    .subscribe(datosRespuesta => {
      console.log(datosRespuesta);
    })
  }

  ngOnInit() {
    this.descripcionFoto = '';
    this.usuario = '';

    this.datosPublicacion = {
      usuario: this.usuario, 
      caption: this.descripcionFoto,
      urlFoto: this.urlFoto
    }

    console.log(this.datosPublicacion);

  }
}
