import { Component } from '@angular/core';

export interface Coffee {
  name: string;
  description: string;
  image: string;
  price: number;
}

export const coffees: Coffee[] = [
  { 
    name: 'Espresso', 
    description: 'Strong coffee brewed by forcing hot water under pressure through finely-ground coffee beans.', 
    image: 'assets\\images\\Espresso.webp', 
    price: 2.5 
  },
  { 
    name: 'Latte', 
    description: 'Coffee made with espresso and steamed milk.', 
    image: 'assets\\images\\Latte.webp', 
    price: 3.5 
  },
  { 
    name: 'Cappuccino', 
    description: 'Coffee with equal parts of espresso, steamed milk, and milk foam.', 
    image: 'assets\\images\\Cappuccino.webp', 
    price: 4.0 
  },
  { 
    name: 'Americano', 
    description: 'Coffee made by diluting espresso with hot water.', 
    image: 'assets\\images\\Americano.webp', 
    price: 3.0 
  },
  { 
    name: 'Mocha', 
    description: 'Coffee with espresso, chocolate syrup, and steamed milk.', 
    image: 'assets\\images\\Mocha.webp', 
    price: 4.5 
  },
  { 
    name: 'Macchiato', 
    description: 'Espresso with a small amount of steamed milk.', 
    image: 'assets\\images\\Macchiato.webp', 
    price: 3.0 
  },
  { 
    name: 'Flat White', 
    description: 'Coffee prepared by pouring microfoam (steamed milk consisting of small, fine bubbles) over a shot of espresso.', 
    image: 'assets\\images\\Flat White.jpg', 
    price: 4.0 
  }
];

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent {
  coffees: Coffee[] = coffees;

  constructor() { }
}
