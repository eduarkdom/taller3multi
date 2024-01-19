import { Injectable } from '@angular/core';

import { Registro } from '../models/registro.model';
import { NavController } from '@ionic/angular'; 
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guardados: Registro[] = []

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private appBrowser: InAppBrowser
  ) { 
    this.cargaStorage()
  }

  async cargaStorage(){    
    this.storage.create()
    this.guardados = (await this.storage.get('registro') || [])
  }

  async guardar(format: string, text:string){
    await this.cargaStorage()
    
    const newReg = new Registro(format, text)

    this.guardados.unshift(newReg)

    this.storage.set('registro', this.guardados)

    this.abrir(newReg)
  }

  abrir(reg: Registro){
    this.navCtrl.navigateForward('/history')

    switch(reg.type){
      case 'http':
        this.appBrowser.create(reg.text, '_system')
        break
      
      case 'geo':
        this.navCtrl.navigateForward(`/map?geo=${reg.text}`)
        break
    }
    
  }
}
