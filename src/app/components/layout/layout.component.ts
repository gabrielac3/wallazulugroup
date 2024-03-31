import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  currentImage:string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/ESCUDO-GLOBAL.png';

  currentImageWallazullu: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/ESCUDO-GLOBAL.png';
  currentImageGeitsu: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/GEITSU.png';
  currentImageWallaosint: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/WALLAOSINT.png';

    changeImage(imageUrl: string) {
      this.currentImage = imageUrl;
    }

}
