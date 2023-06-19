import { Component, Input } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product!: Product;
  constructor() { }

  id!: number;
  image!: string;
  name!: string;
  description!: string;
  price!: number;

  addToCart(object: any) {
    console.log("added to cart")
  }
}