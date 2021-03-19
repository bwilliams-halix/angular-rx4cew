import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({ 
    name: '',
    address: ''
  });
  submitted = false;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,  
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    this.submitted = true;
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}