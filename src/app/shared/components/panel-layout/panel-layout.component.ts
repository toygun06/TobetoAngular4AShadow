import { Router } from '@angular/router';
import { ListGroupItems } from './../list-group/list-group.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListGroupComponent } from '../list-group/list-group.component';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [
    CommonModule,
    ListGroupComponent
  ],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLayoutComponent {
  sidebarMenuListItems: ListGroupItems = [
    {
      id: 'categories/new',
      label: 'Categories',
    },
    {
      id: 'products',
      label: 'Products',
    },
  ];

  constructor(private router: Router) {}

  onChangeSidebarMenuSelect(sideMenuListId: string | null) {
    this.router.navigate([sideMenuListId]);
  }
}
