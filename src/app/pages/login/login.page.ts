import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    console.log('ngOnInit')
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async login() {
    if (!this.username || !this.password) {
      this.presentToast('Ingrese usuario y contraseña');
      return;
    }
  
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(
        this.username,
        this.password
      );
      this.router.navigate(['logeado']);
    } catch (err: any) {
      console.dir(err);
      if (err.code === 'auth/invalid-email') {
        this.showAlert('Error', 'El nombre de usuario o contraseña es incorrecto');
      } else if (err.code === 'auth/user-not-found') {
        this.showAlert('Error', 'No se encuentra usuario');
      } else {
        this.showAlert('Error', 'Usuario o contraseña inválidos.');
      }
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok'],
    });
    await alert.present();
  }

  handleLogin() {
    // Llamar al método asíncrono login
    this.login();
  }
}
