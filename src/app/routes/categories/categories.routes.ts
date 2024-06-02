import { Routes } from '@angular/router';
import { NewCategoryPageComponent } from './new-category-page/new-category-page.component';
import { CategoriesListPageComponent } from './categories-list-page/categories-list-page.component';
import { EditCategoryPageComponent } from './edit-category-page/edit-category-page.component';

export const categoriesRoutes : Routes = [

  {
    path: 'categories/new',
    component: NewCategoryPageComponent
  },
  {
    path: 'categories/list',
    component: CategoriesListPageComponent
  },
  {
    path: 'categories/edit/productId',
    component: EditCategoryPageComponent
  }
]