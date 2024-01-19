import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { LogeadoPage } from './logeado.page';
import { MenuPageModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: LogeadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageModule
  ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}
