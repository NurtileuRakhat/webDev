import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: Product[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.favourites = products.filter(product => product.liked);
  }
  goToFavourites() {
    this.router.navigateByUrl('/favourites');
  }
}
