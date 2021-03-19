import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

constructor(
    private cartService: CartService
  ) {}

  onNotify() {
    window.alert('You will be notified when the product goes on sale... maybe');
  }

  share() {
    window.alert('The product has been shared!');
  }

  trash(product) {
    this.cartService.removeItem(product);
    document.getElementById('div' + product.id).style.display = "none";
    window.alert('The product has been thrown in the trash!');
  }

  addToCart(product) {
    let currentProduct = products.find(aproduct => aproduct.id === product.id);
    this.cartService.addToCart(currentProduct);
    window.alert('Your product has been added to the cart!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/