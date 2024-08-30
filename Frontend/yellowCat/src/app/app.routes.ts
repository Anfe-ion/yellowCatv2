import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EBikesComponent } from './e-bikes/e-bikes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './users/register/register.component';
import { CartComponent } from './payments/cart/cart.component';
import { DiscountsComponent } from './payments/discounts/discounts.component';
import { ContactComponent } from './politics/contact/contact.component';
import { FAQsComponent } from './politics/faqs/faqs.component';
import { WarrantyComponent } from './politics/warranty/warranty.component';
import { AllAccessoriesComponent } from './accessories/all-accessories/all-accessories.component';
import { HelmetsComponent } from './accessories/helmets/helmets.component';
import { PartsComponent } from './accessories/parts/parts.component';
import { RoadComponent } from './e-bikes/road/road.component';
import { GravelComponent } from './e-bikes/gravel/gravel.component';
import { CityComponent } from './e-bikes/city/city.component';
import { MountainComponent } from './e-bikes/mountain/mountain.component';
import { ClothesComponent } from './accessories/clothes/clothes.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },

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
            { path: 'login', component: UsersComponent },
            { path: 'register', component: RegisterComponent },
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