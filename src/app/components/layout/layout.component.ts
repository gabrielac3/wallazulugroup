import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentImageWallazullu: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/ESCUDO-GLOBAL2.png';
  currentImageGeitsu: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/GEITSU2.png';
  currentImageWallaosint: string = 'https://raw.githubusercontent.com/gabrielac3/im-genes/main/wallazulu/WALLAOSINT2.png';
  currentImage!: string;

  constructor(private router: Router) {}

  ngOnInit() {

    const ruta = this.router.url;
    this.setCurrentImage(ruta)

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const urlActual = this.router.url;
        this.setCurrentImage(urlActual);
      });
  }

  setCurrentImage(route: string) {
   
    switch (route) {
      case '/home/wallazulu':
        this.currentImage = this.currentImageWallazullu;
        break;
      case '/home/geitsu':
        this.currentImage = this.currentImageGeitsu;
        break;
      case '/home/wallaosint':
        this.currentImage = this.currentImageWallaosint;
        break;
      default:
        this.currentImage = this.currentImageWallazullu;
        break;
    }
  }

}
