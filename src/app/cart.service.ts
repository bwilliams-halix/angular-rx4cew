import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
  counts: number[] = [];
  items = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product) {
    const index = product.id - 1;
    if (this.items.find(aproduct => aproduct.id === product.id)) {
      this.counts[index]=this.counts[index] + 1;
    } else {
      this.counts[index]=1;
      this.items.push(product);
    }
  }

  getCounts() {
    return this.counts;
  }

  getItems() {
    return this.items;
  }

  clearCounts() {
    this.counts = [];
    return this.counts;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.counts.splice(product.id-1, 1);
      this.items.splice(index, 1);
    }
  }

  getShippingRates() {
    type shipping = {type: string, price: number}[];
    return this.http.get<shipping>('assets/shipping.json');
  }
}