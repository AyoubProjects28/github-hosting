import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { SharedProductService } from '../shared-services/shared-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductList: product[] | undefined;

  constructor(private cartService: SharedProductService) { }

  ngOnInit(): void {
    this.refreshCartProductList();
  }

  refreshCartProductList() {
    this.cartService.getCartProductList().subscribe(
      (data) => {
        console.warn(data);
        if (data) {
          this.cartProductList = data;
        }
      },
    );
  }

  deleteCartProduct(product: product) {
    console.log("enter here");
    this.cartService.deleteFromCart(product);
    this.refreshCartProductList()
  }

  buyCartProduct(product: product) { }
}
