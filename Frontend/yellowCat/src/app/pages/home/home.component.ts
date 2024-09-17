import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentIndex: number = 0;
  totalImages: number = 4;
  animateLeft: boolean = false;
  animateRight: boolean = false;

  nextSlide() {
    if (this.currentIndex === this.totalImages - 1) {
      this.triggerAnimations()
      setTimeout(() => {
        this.currentIndex = 0;
      }, 500);
    } else {
      this.triggerAnimations()
      setTimeout(() => {
        this.currentIndex++;
      }, 500);
    }
  }


  prevSlide() {
    this.triggerAnimations()
    if (this.currentIndex === 0) {
      setTimeout(() => {
        this.currentIndex = this.totalImages - 1;
      }, 500);
    } else {
      this.triggerAnimations()
      setTimeout(() => {
        this.currentIndex--;
      }, 500);
    }
  }

  triggerAnimations() {
    this.animateLeft = true;
    this.animateRight = true;

    setTimeout(() => {
      this.animateLeft = false;
      this.animateRight = false;
    }, 500);
  }

  getSliderClass() {
    switch (this.currentIndex) {
      case 0: return 'color1';
      case 1: return 'color2';
      case 2: return 'color3';
      case 3: return 'color4';
      default: return '';
    }
  }


}