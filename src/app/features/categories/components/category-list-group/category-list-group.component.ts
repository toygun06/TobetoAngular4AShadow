import { CategoryListItem } from './../../models/category-list.item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class CategoryListGroupComponent {

  @Input() initialSelectedCategoryId?: number | null;
  @Output() changeSelect = new EventEmitter<number | null>();

  categoryList : CategoryListItem[] = [
    {id: 1, name: 'Beverages'},
    {id: 2, name: 'Canned Goods'},
    {id: 3, name: 'Dairy'},
    {id: 4, name: 'Frozen Foods'},
    {id: 5, name: 'Meat'},
    {id: 6, name: 'Produce'},
    {id: 7, name: 'Snacks'},
  ]; //Mock Data

  onChangeSelect(selectedItemId: string | null) {
    this.changeSelect.emit(Number(selectedItemId));
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