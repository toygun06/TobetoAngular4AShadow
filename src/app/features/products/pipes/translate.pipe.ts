import { Pipe, type PipeTransform } from '@angular/core';
import { TranslationService } from '../../../shared/components/pipe-example/translation.service';



@Pipe({
  name: 'appTranslate',
  standalone: true,
})


export class TranslatePipe implements PipeTransform {


  constructor(private translationService: TranslationService) {}

  transform(value: string, lang: string = 'en'): string {
    return this.translationService.getTranslation(value, lang);
  }

}
