import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './pages/constant-pages/nav-bar/nav-bar.component';
import { MenuComponent } from './pages/constant-pages/nav-bar/menu/menu.component';
import { FooterComponent } from './pages/constant-pages/footer/footer.component';
import { EBikesComponent } from './pages/products/e-bikes/e-bikes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    MenuComponent,
    /* EBikesComponent, */
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yellowCat';

}
