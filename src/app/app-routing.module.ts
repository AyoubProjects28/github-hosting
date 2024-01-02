import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListingComponent } from './shop/product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';
// import { HomeComponent } from './pages/home/header.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ProductListingComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
