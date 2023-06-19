import { Component } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = []; // Stores the list of products to be displayed

}
