import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  correoUsuario: string = '';
  password: string = '';
  repeatPassword: string = '';
  submitted: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    private router: Router, 
    private toastController: ToastController
  ) {}

  ngOnInit() {
    console.log('ngOnInit()')
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

  async registrar() { 
    this.submitted = true;
    if (!this.correoUsuario || !this.password || !this.repeatPassword) {
      this.presentToast('Complete todos los campos.');
      return;
    }

    if (this.password !== this.repeatPassword) { 
      this.showAlert('Error!', 'contraseña sin coincidencia '); 
      return;
    }

    try { 
      const res = await this.afAuth.createUserWithEmailAndPassword(this.correoUsuario, this.password);
      this.showAlert('Usuario ha sido Registrado', 'Bienvenido ' + this.correoUsuario);
      this.router.navigate(['login']);
    } catch (err: any) {
      console.dir(err); 
      this.showAlert('Error', err.message);
    } 
  } 
    
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await alert.present();
  }

  async handleRegister() {
        await this.registrar();
  }
}
