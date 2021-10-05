import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  idPublicacion: number;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {

    this.idPublicacion = this.ruta.snapshot.params.publicacionId;
    console.log(this.idPublicacion);

    //this.idPublicacion = this.RutaActiva.snapshot.params.id;
    //console.log(this.idPublicacion);
  }

}
