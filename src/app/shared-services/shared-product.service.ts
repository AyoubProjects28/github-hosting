import { Injectable } from '@angular/core';
import { product } from '../data-type';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SharedProductService {

  private apiUrl = 'http://localhost:8080';

  cartProductList: product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: product, quantity: number = 1) {
    const url = `${this.apiUrl}/addToCart`;
    console.log('Add product to API');

    // Create a payload object that includes both the product and quantity
    const payload = {
      product: product,
      quantity: quantity
    };

    return this.http.post<void>(url, payload).subscribe(
      () => console.log('Product added successfully'),
      (error) => console.error('Error adding product:', error)
    );
  }

  getCartProductList() {
    return this.http.get<product[]>(`${this.apiUrl}/cart`);
  }

  deleteFromCart(product: product) {
    const url = `${this.apiUrl}/deleteFromCart`;
    return this.http.post<void>(url, product).subscribe(
      () => console.log('Product deleted successfully'),
      (error) => console.error('Error deleting product:', error)
    );
  }

}
