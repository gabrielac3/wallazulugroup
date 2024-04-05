import { Component } from '@angular/core';

@Component({
  selector: 'app-wallaosint',
  templateUrl: './wallaosint.component.html',
  styleUrls: ['./wallaosint.component.scss']
})
export class WallaosintComponent {


  flipCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }

}
