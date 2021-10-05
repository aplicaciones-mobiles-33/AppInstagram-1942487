
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicacionPageRoutingModule } from './publicacion-routing.module';
import { PublicacionPage } from './publicacion.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PublicacionPage }]),
    PublicacionPageRoutingModule,
  ],
  declarations: [PublicacionPage]
})
export class PublicacionPageModule {}
