import { Component, OnInit } from '@angular/core';
import { ApiretailService } from 'src/app/services/apiretail.service';


@Component({
  selector: 'app-cliente',
  templateUrl: 'cliente.page.html',
  styleUrls: ['cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes: any[] = [];
  nombreCliente: string = '';
  email: string = '';

  constructor(private service: ApiretailService) {}

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.service.getClientes()
      .subscribe((response: any) => {
        this.clientes = response.body;
      });
  }

  registrarCliente() {
    this.service.postCliente(this.nombreCliente, this.email)
      .subscribe((response: any) => {
        console.log(response);
        this.getClientes();
        this.nombreCliente = "";
        this.email = "";
      });
  }

}
