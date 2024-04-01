import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductCategory, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [...products];  

  categories: ProductCategory[] = [];
  selectedCategory: string | null = null;
  categoryId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = +params['categoryId']; // Ensure categoryId is converted to number
      this.categories = this.getProductCategories();
      this.selectedCategory = this.categories.find(category => category.id === this.categoryId)?.name || null;
    });
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
      id: 0,
      name,
      products: this.products.filter(p => p.category.name === name)
    }));

    categories.unshift({
      id: 0,
      name: 'all',
      products: this.products
    });

    return categories;
  }

  favourites: Product[] = [];
  toggleLike(product: Product): void {
    product.liked = !product.liked;
    if (product.liked) {
      this.favourites.push(product);
    } else {
      this.favourites = this.favourites.filter(p => p.id !== product.id);
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  formatedPrice(price: number): string {
    return price.toLocaleString('kk-KZ');
  }

  isLiked(product: Product): boolean {
    return product.liked;
  }
}
