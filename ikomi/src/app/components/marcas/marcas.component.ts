// marcas.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {
  marcas = [
    {
      nombre: 'Sangsín Brake',
      descripcion: 'Fabricante líder en la industria Coreana de piezas y partes para frenos de fricción.',
      imagen: 'assets/marcas/sangsin2-1-768x156.png'
    },
    {
      nombre: 'Hansang',
      descripcion: 'La marca Hansang maneja una amplia gama de repuestos de parte de caja como piñón y corona.',
      imagen: 'assets/marcas/HANSANG-26032-768x248.png'
    },
    {
      nombre: 'Mando',
      descripcion: 'Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo.',
      imagen: 'assets/marcas/mando2-1-768x208.png'
    },
    {
      nombre: 'TCIC',
      descripcion: 'Fabricante de piezas de automóviles con más de 70 años de experiencia.',
      imagen: 'assets/marcas/TCIC-e1646945558616.png'
    },
    {
      nombre: 'Valeo',
      descripcion: 'Diseña sistemas innovadores para hacer los vehículos más seguros y eficientes.',
      imagen: 'assets/marcas/valeo-1-e1646949714959.jpg'
    },
    {
      nombre: 'Yulim',
      descripcion: 'Compañía líder en la industria del automóvil en Corea.',
      imagen: 'assets/marcas/YULIM-1-768x236.png'
    }
  ];
}
