import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { CategoryListItem } from '../../../features/categories/models/category-list.item';

export interface ListGroupItem {
  id: string;
  label: string;
}

export type ListGroupItems = ListGroupItem[];

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {

  @Input() items : ListGroupItems = [];
  //@Input: Componentin kullanıldığı yerden input alabilir. Böylece dışarıya veri almak için kullanılır.
  @Output() changeSelect = new EventEmitter<string | null>();
  // EventEmitter: Component'ten dışarıya event göndermek için kullanılır.

  @Input() selectedItemId: string | null = null;

  onClickItem(event: ListGroupItem) {
    this.selectedItemId = this.selectedItemId != event.id ? event.id : null;
    this.changeSelect.emit(this.selectedItemId); //Emit event
    }

  isSelectedItem(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }
}
