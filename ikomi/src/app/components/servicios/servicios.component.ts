import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  image: string; // Cambiado de icon a image
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  services: Service[] = [
    {
      title: 'Equipo',
      description: 'EMPRESA IMPORTADORA DE REPUESTOS',
      image: 'assets/servicios/a.png' // Ruta de la imagen
    },
    {
      title: 'Almacén',
      description: 'EMPRESA IMPORTADORA DE REPUESTOS',
      image: 'assets/servicios/b.png' // Ruta de la imagen
    },
    {
      title: 'Tienda',
      description: 'EMPRESA IMPORTADORA DE REPUESTOS',
      image: 'assets/servicios/c.png' // Ruta de la imagen
    },
    {
      title: 'Empresa',
      description: 'EMPRESA IMPORTADORA DE REPUESTOS',
      image: 'assets/servicios/d.png' // Ruta de la imagen
    }
  ];
}
