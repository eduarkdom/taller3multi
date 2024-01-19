import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  constructor(private dataLocalService: DatalocalService) {}

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic29sZGllcmhlYWQiLCJhIjoiY2xsd2lkdmcwMGhjZzNnbnNkZWFkNHh3ZyJ9.7uE86t38ERr4ItEamH7Kkg';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.6086, -33.4232], // Coordenadas de Santiago de Chile, se agrega un punto cualquiera
      zoom: 14,
    });

    // Manejar el clic en el mapa
    map.on('click', (event) => {
      const { lng, lat } = event.lngLat;

      // Guardar la ubicación usando tu servicio
      this.dataLocalService.guardar('map', `geo: ${lat}, ${lng}`);
    });
  }
}
