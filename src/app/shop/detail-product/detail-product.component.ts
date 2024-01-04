import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from '../shop-service/product.service';
import { SharedProductService } from 'src/app/shared-services/shared-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  product: product | undefined;
  selectedQuantity: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, /*ActivatedRoute pour récupérer les paramètres de l’URL, Router pour naviguer*/
    private productService: ProductService,
    private cartService: SharedProductService
  ) {
  }

  ngOnInit() { /*Toujours initialiser les variables et tout ce qui est dans la classe dans ngOnInit*/
    const productId: string | null = this.route.snapshot.paramMap.get('id'); /* On récupère tout les paramètres de la route et on prend que celui qui s'appelle id */
    if (productId) {
      this.productService.getProductById(+productId).subscribe((result) => {
        this.product = result;
      });
    }
    this.selectedQuantity = 1;
  }

  goToProductList() {
    this.router.navigate(['/shop']);
  }

  addToCart(product: product, quantity: number = 1) {
    if (quantity <= product.stock) {
      this.cartService.addToCart(product, quantity);
    }
    else {
      console.log("You orderd all the stock, you should delete the product if it has been payed");
      throw new Error('The quantity ordered is out of stock. Please select a lower quantity.');
    }
  }
}
