import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  counts = this.cartService.getCounts();
  items = this.cartService.getItems();
  total:number = 0;
  checkoutForm = this.formBuilder.group({ 
    name: '',
    address: ''
  });
  submitted = false;
  submittedMsg: string[] = [];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,  
  ) { }

  ngOnInit() {
    for (let item of this.items) {
      const count = this.counts[item.id-1];
      this.total += (count * item.price);
    }
    this.submitted=false;
    this.submittedMsg = [];
  }

  onSubmit() {
    this.counts = this.cartService.clearCounts();
    this.items = this.cartService.clearCart();
    
    this.submitted = true;
    this.submittedMsg[0] = this.checkoutForm.get('name').value + ',';
    this.submittedMsg[1]='Your order is on its way to:';
    this.submittedMsg[2]=this.checkoutForm.get('address').value + '!';

    this.checkoutForm.reset();
  }
}