import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallazulu',
  templateUrl: './wallazulu.component.html',
  styleUrls: ['./wallazulu.component.scss'],
})
export class WallazuluComponent {
  isMobile: boolean = false;
  isTablet: boolean = false;
  isLaptop: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const mobile = screenWidth < 768;
    const tablet = screenWidth >= 768 && screenWidth < 992;
    const laptop = screenWidth >= 992;

    if (mobile) {
      this.isMobile = true;
    } else if (tablet) {
      this.isTablet = true;
    } else {
      this.isLaptop = true;
    }
  }

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

  goToSecurity() {
    window.location.href = '/home/security-tech';
  }
}
