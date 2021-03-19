import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getShippingRates() {
    type shipping = {type: string, price: number}[];
    return this.http.get<shipping>('assets/shipping.json');
  }
}