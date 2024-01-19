import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'logeado',
    loadChildren: () => import('./logeado.module').then(m => m.LogeadoPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
