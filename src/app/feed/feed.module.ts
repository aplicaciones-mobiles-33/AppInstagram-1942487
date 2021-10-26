import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';
import { PublicacionPage } from '../publicacion/publicacion.page';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule ],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})

export class FeedComponentModule {
    
}