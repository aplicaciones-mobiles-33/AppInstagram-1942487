import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PublicacionesComponent } from './publicaciones.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule],
  declarations: [PublicacionesComponent],
  exports: [PublicacionesComponent]
})

export class PublicacionesModule {}
