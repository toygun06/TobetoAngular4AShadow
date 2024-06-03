import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PipesExampleComponent } from '../../shared/components/pipe-example/pipe-example.component';

@Component({
  selector: 'app-pipe-example-page',
  standalone: true,
  imports: [
    CommonModule,
    PipesExampleComponent
  ],
  templateUrl: './pipe-example-page.component.html',
  styleUrl: './pipe-example-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeExamplePageComponent { }
