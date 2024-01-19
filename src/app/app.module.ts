import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import firebaseConfig from './firebase'; 

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { Storage } from '@ionic/storage'

import { InformacionPageModule } from './pages/informacion/informacion.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Storage,
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
