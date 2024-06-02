import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelLayoutComponent } from '../../../shared/components/panel-layout/panel-layout.component';
import CategoryListGroupComponent from '../../../features/categories/components/category-list-group/category-list-group.component';
import { CategoriesEditListComponent } from '../../../features/categories/components/categories-edit-list/categories-edit-list.component';

@Component({
  selector: 'app-categories-list-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelLayoutComponent,
    CategoryListGroupComponent,
    CategoriesEditListComponent
  ],
  templateUrl: './categories-list-page.component.html',
  styleUrl: './categories-list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListPageComponent { }
