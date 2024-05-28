import { CategoriesService } from './../../services/categories.service';
import { CategoryListItem } from './../../models/category-list.item';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent, ListGroupItems, ListGroupItem } from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [
    CommonModule,
    ListGroupComponent
  ],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.css'
})
export default class CategoryListGroupComponent implements OnInit {

  @Input() initialSelectedCategoryId?: number | null;
  @Output() changeSelect = new EventEmitter<number | null>();

  categoryList : CategoryListItem[] = [];

  constructor(private CategoriesService:
    CategoriesService, private change: ChangeDetectorRef) {}
    ngOnInit(): void {
      this.getList()
    }
    getList() {
      this.CategoriesService.getList().subscribe
      ((categories) => {
        this.categoryList = categories;
        this.change.markForCheck();
      })
    }
  onChangeSelect(selectedItemId: string | null) {
    this.changeSelect.emit(selectedItemId ? Number(selectedItemId) : null);
  }

  get categoryListGroupItems(): ListGroupItems {
    return this.categoryList.map((category) => {
      const categoryListItem: ListGroupItem = {
        id: category.id.toString(),
        label: category.name,
      };
      return categoryListItem;
    });
  }
}
