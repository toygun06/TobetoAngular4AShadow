import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

@Input() imageSrc?: string;
@Input() imageAlt?: string;
@Input() title!: string;
@Input() description?: string;
@Input() buttonLabel?: string;
@Input() imageHeight: number = 200;
@Input() buttonRouterLink?: string;
@Output() buttonClick = new EventEmitter<void>();

onButtonClick() {
  this.buttonClick.emit();
  }
}
