import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { product } from '../../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';


  getProductById(id: number) {
    const url = `${this.apiUrl}/product/${id}`;
    return this.http.get<product>(url);
  }


  getProductList(category?: string, gender?: string, price?: number, size?: string, seller?: string) {
    let url = `${this.apiUrl}/products`;

    const params: string[] = [];

    if (category) params.push(`category/${category.toLowerCase()}`);
    if (gender) params.push(`gender/${gender.toLowerCase()}`);
    if (price) params.push(`price/${price.toString()}`);
    if (size) params.push(`size/${size.toLowerCase()}`);
    if (seller) params.push(`seller/${seller.toLowerCase()}`);

    if (params.length > 0) {
      url += `/${params.join('/')}`;
    }

    return this.http.get<product[]>(url);
  }



}
