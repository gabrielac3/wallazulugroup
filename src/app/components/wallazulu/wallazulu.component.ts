import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallazulu',
  templateUrl: './wallazulu.component.html',
  styleUrls: ['./wallazulu.component.scss']
})
export class WallazuluComponent {

  constructor(
    private router: Router,
  ) { }

  flipCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }

  goToGeitsu() {
    window.location.href = '/home/geitsu';
  }

  goToWallaosint() {
    window.location.href = '/home/wallaosint';
  }



}
