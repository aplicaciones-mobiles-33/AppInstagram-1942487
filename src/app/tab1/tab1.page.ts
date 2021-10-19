import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/feed.json';
import {map } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //datos = data; 
  //publicaciones: any = this.datos.publicaciones;
   
  publicaciones =  [];

  constructor(private http : HttpClient) {}

  cargarFeed(): void {
    this.http.get('https://instagramapp-2f603-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map( responseData => {
        for(const key in responseData) {
          this.publicaciones.push( { ...responseData[key], key});
        } return this.publicaciones;
      })
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnInit(): void {
    this.cargarFeed();
  }

}
