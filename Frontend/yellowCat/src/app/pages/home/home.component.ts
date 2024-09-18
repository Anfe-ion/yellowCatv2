import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CarrouselComponent } from "./carrousel/carrousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentIndex: number = 0;
  totalImages: number = 4;
  animateLeft: boolean = false;
  animateRight: boolean = false;
  dataProducts: any[] = [];
    
  constructor(private zone: NgZone, private bikesService: ProductsService) {}

  ngOnInit() {
    // Iniciamos el cambio automático de imágenes fuera del contexto de Angular
    this.startAutoSlide();
    this.getData()    
  }

  getData(){
    this.bikesService.getData().subscribe(data=>{
      //Top 3 by sales
      this.dataProducts = data.sort((a, b) => b.Ventas - a.Ventas).slice(0, 3)
    })
  }

  // Método para iniciar el slider automático
  startAutoSlide() {
    // Ejecutamos el intervalo fuera del ciclo de detección de cambios de Angular
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        // Volvemos al contexto de Angular solo cuando necesitamos actualizar la vista
        this.zone.run(() => {
          this.nextSlide();
        });
      }, 7000); // Cambio automático cada 3 segundos
    });
  }

  // Cambiar a la siguiente imagen
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.triggerAnimations();
  }

  // Cambiar a la imagen anterior
  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.totalImages - 1 : this.currentIndex - 1;
    this.triggerAnimations();
  }

  // Método para activar las animaciones
  triggerAnimations() {
    this.animateLeft = true;
    this.animateRight = true;

    // Reiniciar las animaciones después de que terminen
    setTimeout(() => {
      this.animateLeft = false;
      this.animateRight = false;
    }, 500); // Ajusta el tiempo para que coincida con la duración de la animación
  }

  // Método para asignar las clases de animación de acuerdo con el índice
  getSliderClass() {
    switch (this.currentIndex) {
      case 0:
        return 'color1';
      case 1:
        return 'color2';
      case 2:
        return 'color3';
      case 3:
        return 'color4';
      default:
        return '';
    }
  }
}
