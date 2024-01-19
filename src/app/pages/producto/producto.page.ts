import { Component, OnInit } from '@angular/core';
import { ApiretailService } from 'src/app/services/apiretail.service';

@Component({
  selector: 'app-producto',
  templateUrl: 'producto.page.html',
  styleUrls: ['producto.page.scss'],
})
export class ProductoPage implements OnInit {
  productos: any[] = [];
  nombreProducto: string = '';
  precio: number = 0;
  stock: number = 0;

  constructor(private service: ApiretailService) {}

  ngOnInit() {
    this.getProductos();
  }

  registrarProducto() {
    this.service.postProducto(this.nombreProducto, this.precio, this.stock)
      .subscribe((response: any) => {
        console.log(response);
        this.getProductos();
        this.nombreProducto = "";
        this.precio = 0;
        this.stock = 0;
      });
  }

  getProductos() {
    this.service.getProductos()
      .subscribe((response: any) => {
        this.productos = response.body;
      });
  }
}
