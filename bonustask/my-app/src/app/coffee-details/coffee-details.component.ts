import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee, coffees } from '../coffee-list/coffee-list.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  coffee: Coffee | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.coffee = coffees.find(c => c.name === name);
    }
  }

  addToCart() {
    if (this.coffee) {
      this.cartService.addToCartPrice(this.coffee.price);
      alert('Price added to cart!');
    }
  }
}
