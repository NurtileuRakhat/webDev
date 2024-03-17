import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  pay() {
    alert('Payment processed!');
  }
}
