import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoadComponent } from './pages/products/e-bikes/road/road.component';
import { GravelComponent } from './pages/products/e-bikes/gravel/gravel.component';
import { CityComponent } from './pages/products/e-bikes/city/city.component';
import { MountainComponent } from './pages/products/e-bikes/mountain/mountain.component';
import { EBikesComponent } from './pages/products/e-bikes/e-bikes.component';
import { HelmetsComponent } from './pages/products/accessories/helmets/helmets.component';
import { PartsComponent } from './pages/products/accessories/parts/parts.component';
import { ClothesComponent } from './pages/products/accessories/clothes/clothes.component';
import { AllAccessoriesComponent } from './pages/products/accessories/all-accessories/all-accessories.component';
import { LoginComponent } from './pages/users/login/login.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { ClientComponent } from './pages/users/roles/client/client.component';
import { AdminComponent } from './pages/users/roles/admin/admin.component';
import { CartComponent } from './pages/payments/cart/cart.component';
import { DiscountsComponent } from './pages/payments/discounts/discounts.component';
import { ContactComponent } from './pages/constant-pages/politics/contact/contact.component';
import { FAQsComponent } from './pages/constant-pages/politics/faqs/faqs.component';
import { WarrantyComponent } from './pages/constant-pages/politics/warranty/warranty.component';
import { PageNotFoundComponent } from './pages/constant-pages/page-not-found/page-not-found.component';
import { MainCarrouselComponent } from './pages/home/main-carrousel/main-carrousel.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    {path: 'test', component: MainCarrouselComponent},

    {
        path: 'ebikes',
        children: [
            { path: 'road', component: RoadComponent },
            { path: 'gravel', component: GravelComponent },
            { path: 'city', component: CityComponent },
            { path: 'mountain', component: MountainComponent },
            { path: 'all', component: EBikesComponent }
        ]
    },

    {
        path: 'accessories',
        children: [
            { path: 'helmets', component: HelmetsComponent },
            { path: 'parts', component: PartsComponent },
            { path: 'clothes', component: ClothesComponent },
            { path: 'all', component: AllAccessoriesComponent }
        ]
    },

    {
        path: 'users',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {
                path: 'roles',
                children: [
                    { path: 'client', component: ClientComponent },
                    { path: 'admin', component: AdminComponent }
                ]
            }
        ]
    },

    { path: 'cart', component: CartComponent },
    { path: 'discounts', component: DiscountsComponent },


    {
        path: 'politics',
        children: [
            { path: 'contact', component: ContactComponent },
            { path: 'FAQs', component: FAQsComponent },
            { path: 'warranty', component: WarrantyComponent },
        ]
    },

    { path: '**', component: PageNotFoundComponent }
];