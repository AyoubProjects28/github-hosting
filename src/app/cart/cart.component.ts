import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { SharedProductService } from '../shared-services/shared-product.service';

interface CartProduct {
  product: product;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductList: CartProduct[] | undefined = [];

  constructor(private cartService: SharedProductService) { }

  ngOnInit(): void {
    this.refreshCartProductList();
  }

  refreshCartProductList() {
    this.cartService.getCartProductList().subscribe(
      (data) => {
        console.warn(data);
        if (data) {
          this.processCartProducts(data);
        }
      },
    );
  }

  processCartProducts(cartProducts: product[]) {
    const productMap = new Map<number, CartProduct>();

    for (const product of cartProducts) {
      const productId = product.id;

      if (productMap.has(productId)) {
        const existingProduct = productMap.get(productId);
        existingProduct!.quantity++;
      } else {
        productMap.set(productId, { product: product, quantity: 1 });
      }
    }

    this.cartProductList = Array.from(productMap.values());
  }

  deleteCartProduct(product: product) {
    console.log("enter here");
    this.cartService.deleteFromCart(product);
    this.refreshCartProductList()
  }

  buyCartProduct(product: product) { }
}
