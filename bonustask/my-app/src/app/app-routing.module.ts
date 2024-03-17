import { Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
export const routes: Routes = [
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'coffee/:name', component: CoffeeDetailsComponent }
];
