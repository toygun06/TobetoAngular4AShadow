import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from "../../../features/products/pipes/translate.pipe";

@Component({
    selector: 'app-pipe-example',
    standalone: true,
    templateUrl: './pipe-example.component.html',
    styleUrl: './pipe-example.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TranslatePipe
    ]
})
export class PipesExampleComponent {
  today: number = Date.now();
  name: string = 'Angular Developer';
  amount: number = 1234.56;
  percentage: number = 0.1234;
  jsonData: any = { name: 'Angular', version: '12' };
  items: string[] = ['Angular', 'React', 'Vue'];

  message: string = 'hello';
  language: string = 'tr';

  updateMessage(newMessage: string) {
    this.message = newMessage;
  }

  updateLanguage(newLanguage: string) {
    this.language = newLanguage;
  }
}