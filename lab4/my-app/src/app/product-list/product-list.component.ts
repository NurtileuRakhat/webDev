import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share(url: string) {
    let telegramUrl = `https://t.me/share/url?url=${url}&text=`;
    window.open(telegramUrl, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  formatedPrice(price: number): string {
    return price.toLocaleString('kk-KZ');
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/