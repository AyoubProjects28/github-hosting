import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from './shop-service/product.service';

const detailRoute: Routes = [{ path: 'product/:id', component: DetailProductComponent }];

@NgModule({
  declarations: [
    ProductListingComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(detailRoute),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ProductService],
})
export class ShopModule { }
export { ProductService };

