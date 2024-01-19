import { Component, OnInit } from '@angular/core';
import { ApiretailService } from 'src/app/services/apiretail.service';

@Component({
  selector: 'app-envio',
  templateUrl: 'envio.page.html',
  styleUrls: ['envio.page.scss'],
})
export class EnvioPage implements OnInit {
  envios: any[] = [];
  direccion: string = '';
  fechaEnvio: string = '';

  constructor(private service: ApiretailService) {}

  ngOnInit() {
    this.getEnvios();
  }

  getEnvios() {
    this.service.getEnvios()
      .subscribe((response: any) => {
        this.envios = response.body;
      });
  }

  registrarEnvio() {
    this.service.postEnvio(this.direccion, this.fechaEnvio)
      .subscribe((response: any) => {
        console.log(response);
        this.getEnvios();
        this.direccion = "";
        this.fechaEnvio = "";
      });
  }

}
