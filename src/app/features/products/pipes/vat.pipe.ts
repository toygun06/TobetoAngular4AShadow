import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appVat',
  standalone: true,
})
export class VatPipe implements PipeTransform {

  transform(value: number, taxRate: number = 0.19): number {
    const newValue = value * (1 + taxRate); // 19% VA
    return newValue;
  }

}
