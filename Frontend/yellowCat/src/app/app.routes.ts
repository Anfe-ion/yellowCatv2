import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EBikesComponent } from './e-bikes/e-bikes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './users/register/register.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'all-ebikes', component: EBikesComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'login', component: UsersComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent }
];