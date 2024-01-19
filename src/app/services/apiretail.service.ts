import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiretailService {
  private apiUrl: string = 'https://suhbl5jdi4.execute-api.us-east-2.amazonaws.com/apiretail';

  constructor(private httpClient: HttpClient) { }

  public getClientes() {
    return this.httpClient.get(`${this.apiUrl}/clientes`);
  }

  public postCliente(nombreCliente: string, email: string) {
    const body = { nombreCliente, email };
    return this.httpClient.post(`${this.apiUrl}/clientes`, body);
  }

  public getProductos() {
    return this.httpClient.get(`${this.apiUrl}/productos`);
  }

  public postProducto(nombreProducto: string, precio: number, stock: number) {
    const body = { nombreProducto, precio, stock };
    return this.httpClient.post(`${this.apiUrl}/productos`, body);
  }

  public getEnvios() {
    return this.httpClient.get(`${this.apiUrl}/envios`);
  }

  public postEnvio(direccion: string, fechaEnvio: string) {
    const body = { direccion, fechaEnvio };
    return this.httpClient.post(`${this.apiUrl}/envios`, body);
  }
}


