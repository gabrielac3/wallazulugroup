import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros-wallazulu',
  templateUrl: './nosotros-wallazulu.component.html',
  styleUrls: ['./nosotros-wallazulu.component.scss']
})
export class NosotrosWallazuluComponent {
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


}
