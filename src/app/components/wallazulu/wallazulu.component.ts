import { Component } from '@angular/core';

@Component({
  selector: 'app-wallazulu',
  templateUrl: './wallazulu.component.html',
  styleUrls: ['./wallazulu.component.scss']
})
export class WallazuluComponent {

  flipCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }

}
