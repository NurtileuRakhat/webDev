import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductCategory, products } from '../products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: ProductCategory[] = [];
  selectedCategory: string | null = null;
  products: Product[] = [...products];  
  
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.categories = this.getProductCategories();
    this.products = [...products];
  }

  selectCategory(category: string | null): void {
    this.selectedCategory = category === 'Все' ? null : category;
  }

  getProductCategories(): ProductCategory[] {
    const uniqueCategories = Array.from(new Set(this.products.map(p => p.category.name)));
    const categories: ProductCategory[] = uniqueCategories.map((name, index) => ({
      id: index + 1,
      name: name,
      products: this.products.filter(p => p.category.name === name)
    }));
  
    categories.unshift({
      id: 0,
      name: 'all',
      products: this.products
    });
  
    return categories;
  }

  navigateToCategory(categoryId: number): void {
    this.router.navigate(['/categories', categoryId]);
  }
}
