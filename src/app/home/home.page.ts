import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  project = [
    {
      title: 'OptiRetail',
      image: '../assets/img/proyecto1.png',
      description: 'OptiRetail es un innovador proyecto que ofrece soluciones integrales de optimización para espacios de venta al por menor. Implementa estrategias personalizadas basadas en análisis de datos en tiempo real, optimizando la disposición de productos, flujo de clientes y estrategias de marketing. Con herramientas de inteligencia artificial, proporciona recomendaciones para mejorar la rentabilidad y la experiencia del cliente en el establecimiento.'
    },
    {
      title: 'RetailSolutions+',
      image: '../assets/img/proyecto2.png',
      description: 'RetailSolutions+ es un proyecto enfocado en brindar soluciones tecnológicas avanzadas para minoristas. Ofrece un conjunto completo de herramientas, desde sistemas de gestión de inventario hasta plataformas de análisis predictivo. Su enfoque se centra en aumentar la eficiencia operativa, optimizar la cadena de suministro y proporcionar una experiencia de compra personalizada a través de tecnologías innovadoras.'
    },
  ];

  constructor() {}

}
