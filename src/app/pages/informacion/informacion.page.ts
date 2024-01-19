import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
  }

}

export interface Producto{
  STOCK:number,
  CODIGO_PRODUCTO:number,
  NOMBRE_PRODUCTO:string,
  VALOR:number
}
