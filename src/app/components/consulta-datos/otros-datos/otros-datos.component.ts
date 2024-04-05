import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-otros-datos',
  templateUrl: './otros-datos.component.html',
  styleUrls: ['./otros-datos.component.scss']
})
export class OtrosDatosComponent {

  constructor(private el: ElementRef) {}

  scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector('#' + sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
