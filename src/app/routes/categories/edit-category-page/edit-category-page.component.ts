import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-category-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './edit-category-page.component.html',
  styleUrl: './edit-category-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryPageComponent { }
