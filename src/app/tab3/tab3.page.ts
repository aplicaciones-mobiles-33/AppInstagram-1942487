import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario = 'Ruffles';
  posts = 12;
  followers = 25000;
  following = 32;
  nombre = 'Ruffles';
  description = 'Hola mundo!';

  constructor() {}

}
