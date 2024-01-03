import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { product } from 'src/app/data-type';
import { ProductService } from '../shop-service/product.service';
import { SharedProductService } from 'src/app/shared-services/shared-product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  iconCart = faCartShopping;
  iconLikedClothes = faHeart;


  productList: product[] | undefined;
  selectedCategory: string | undefined;
  selectedGender: string | undefined
  selectedSize: string | undefined;
  selectedSeller: string | undefined;
  selectedPrice: number | undefined;
  answer: string | undefined;


  productAddedToCart: Array<number> | undefined;


  constructor(private router: Router, private productService: ProductService, private cartService: SharedProductService) { }

  ngOnInit(): void {
    this.refreshProductList();
    this.selectedPrice = 300;
    this.productAddedToCart = [];
    this.answer = undefined;
  }

  selectSize(size?: string): void {
    if (size) {
      this.selectedSize = size;
      this.refreshProductList();
    }
  }

  cancelSelectionSize() {
    this.selectedSize = undefined;
    this.refreshProductList();
  }

  selectSeller(seller?: string): void {
    if (seller) {
      this.selectedSeller = seller;
      this.refreshProductList();
    }
  }

  cancelSelectionSeller() {
    this.selectedSeller = undefined;
    this.refreshProductList();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.refreshProductList();
  }

  cancelSelectionCategory() {
    this.selectedCategory = undefined;
    this.refreshProductList();
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    this.refreshProductList();
  }

  cancelSelectionGender() {
    this.selectedGender = undefined;
    this.refreshProductList();
  }

  selectPrice(event: any) {
    this.selectedPrice = event.target.value;
    this.refreshProductList();
  }

  refreshProductList(): void {
    this.productService.getProductList(this.selectedCategory, this.selectedGender, undefined, this.selectedSize, this.selectedSeller).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.productList = result;
      }
    });
  }

  goToProduct(product: product) {
    console.log(`goToProduct : ${product.name}`);
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: product): void { //No quantity bc 1 by default if we click on it from the product list
    if (!this.productAddedToCart?.includes(product.id)) {
      console.log("ajouté au cart");
      this.cartService.addToCart(product);
      this.productAddedToCart?.push(product.id);
    }
    else {
      this.answer = "You can't add more than one product from here, click on the product to choose an other quantity";
    }
  }

  reinitAnswer() {
    this.answer = undefined;
  }
}
