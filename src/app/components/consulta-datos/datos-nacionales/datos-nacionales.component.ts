import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datos-nacionales',
  templateUrl: './datos-nacionales.component.html',
  styleUrls: ['./datos-nacionales.component.scss']
})
export class DatosNacionalesComponent {


  @ViewChild('datosPersonales') datosPersonales!: ElementRef;
  @ViewChild('consultasVehiculares') consultasVehiculares!: ElementRef;
  @ViewChild('lineasTelefonicas') lineasTelefonicas!: ElementRef;
  @ViewChild('nivelEducativo') nivelEducativo!: ElementRef;

  constructor(private el: ElementRef) {}

  scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector('#' + sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
