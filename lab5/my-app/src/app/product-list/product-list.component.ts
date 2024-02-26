import { Component } from '@angular/core';
import { Product, ProductCategory, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [...products];

  categories: ProductCategory[] = [];
  selectedCategory: string | null = null;

  ngOnInit(): void {
    this.categories = this.getProductCategories();
  }

  selectCategory(category: string | null): void {
    this.selectedCategory = category === 'Все' ? null : category;
  }

  share(url: string) {
    let telegramUrl = `https://t.me/share/url?url=${url}&text=`;
    window.open(telegramUrl, '_blank');
  }

  getProducts(selectedCategory: string | null): Product[] {
    if (selectedCategory) {
      return this.categories.find(c => c.name === selectedCategory)?.products || [];
    } else {
      return this.products;
    }
  }

  getProductCategories(): ProductCategory[] {
    const categories: ProductCategory[] = [...new Set(this.products.map(p => p.category.name))].map(name => ({
      name,
      products: this.products.filter(p => p.category.name === name)
    }));

    categories.unshift({
      name: 'all',
      products: this.products
    });

    return categories;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  formatedPrice(price: number): string {
    return price.toLocaleString('kk-KZ');
  }
}
