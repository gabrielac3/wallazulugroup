import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-datos',
  templateUrl: './consulta-datos.component.html',
  styleUrls: ['./consulta-datos.component.scss']
})
export class ConsultaDatosComponent {

  goToDatosNacionales() {
    window.location.href = '/home/consulta-datos/nacionales';
  }

  goToOtrosDatos() {
    window.location.href = '/home/consulta-datos/otros';
  }

}
