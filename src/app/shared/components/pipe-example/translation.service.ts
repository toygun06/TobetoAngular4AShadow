import { Injectable } from '@angular/core';

type Translations = {
  [key: string]: { [key: string]: string }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Translations = {
    en: {
      'Merhaba': 'Hello',
      'Hoşçakal': 'Goodbye',
      'Hoşgeldiniz': 'Welcome'
    },
    tr: {
      'hello': 'Merhaba',
      'goodbye': 'Hoşçakal',
      'welcome': 'Hoşgeldiniz'
    }
  };

  getTranslation(key: string, lang: string): string {
    return this.translations[lang]?.[key] || key;
  }
}
