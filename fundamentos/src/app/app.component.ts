import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  // 1. Declaracion de variables
  nombreFramework: string = 'Angular';
  horasBootcamp: number = 300;
  especialista: string = 'Luisa Castaño';
  contenidoBootcamp = {
    tecnologia1: 'HTML',
    tecnologia2: 'CSS',
    tecnologia3: 'JS',
    tecnologia4: 'ANGULAR',
    tecnologia5: 'NODE.JS',
  }

  objetoProducto = {
    nombre: 'galletas',
    cantidad: '30',
    vendido: true
  }

  colorFondo: string = 'colorRosa';

  // Forma correcta de manejar booleanos
  isLogged: boolean = false;
  isDelete: boolean = false;
  isShowed: boolean = true;


  productos: string[] = ['carros', 'motos', 'bicicletas'];

  //2.Funciones o métodos
  saludo() {
    console.log('Hola, diste click ;)')
  }

  manejarMouseOver() {
    this.colorFondo = 'colorRojo';
    console.log('Evento sobre la caja');
  }

  manejarMouseOut() {
    this.colorFondo = 'colorVerde'
    console.log('Mouse fuera de la caja');
  }

  manejarClick() {
    this.colorFondo = 'colorRosa'
    console.log('evento click');
  }
  // 3. Exportaciones - ciclos de vida 

}
