import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  frase: string = 'Bienvenidos a Nuestra Empresa'; // Cambia esto por la frase que desees mostrar
}
