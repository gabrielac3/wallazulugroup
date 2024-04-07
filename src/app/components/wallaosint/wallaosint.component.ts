import { Component } from '@angular/core';

@Component({
  selector: 'app-wallaosint',
  templateUrl: './wallaosint.component.html',
  styleUrls: ['./wallaosint.component.scss']
})
export class WallaosintComponent {

  isMobile: boolean = false;
  isTablet: boolean = false;
  isLaptop: boolean = false;

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

}
