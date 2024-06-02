import { Router, RouterModule } from '@angular/router';
import { CategoryEditList } from './../../models/category-edit-list';
import { CategoriesService } from './../../services/categories.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

export type EditListItems = CategoryEditList[];

@Component({
  selector: 'app-categories-edit-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './categories-edit-list.component.html',
  styleUrl: './categories-edit-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesEditListComponent implements OnInit {

  @Input() routerLink?: string;
  @Output() buttonClick = new EventEmitter<void>();

  categoryList: CategoryEditList[] = [];

  constructor(private CategoriesService: CategoriesService, private change: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.getEditList()
  }

  getEditList() {
    this.CategoriesService.getEditList().subscribe((category) => {
      this.categoryList = category;
      this.change.markForCheck();
    })
  }

  get categoryEditListItems(): EditListItems {
    return this.categoryList.map((category) => {
      const editListItem: CategoryEditList = {
        id: category.id,
        name: category.name,
        description: category.description
      };
      return editListItem;

    })
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

}
