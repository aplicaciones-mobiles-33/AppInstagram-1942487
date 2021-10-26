import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  constructor(private db: FirebaseDbService) { }

  publicaciones = [];

  cargarFeed() {
    this.db.getPublicaciones().subscribe(res=> {
      console.log(res);
      this.publicaciones = res;
    })
  }

  ngOnInit() {

    this.cargarFeed();
  }

}