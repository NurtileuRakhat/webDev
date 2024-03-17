import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice: number = 0;

  constructor() {}

  addToCartPrice(price: number) {
    this.totalPrice += price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  clearCart() {
    this.totalPrice = 0;
  }
}
