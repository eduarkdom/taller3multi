import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Agrega la importación del Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  constructor(private menuCtrl: MenuController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit()')
   }

  async confirmarNavegacion() {
    const alert = await this.alertController.create({
      header: 'Confirmar salir',
      message: '¿Quieres Salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salir',
          handler: () => {
            // Realiza la navegación a la página logeado
            this.router.navigate(['/']);
          }
        }
      ]
    });

    await alert.present();
  }

  presionarMenu() {
    this.menuCtrl.toggle();
  }
}
