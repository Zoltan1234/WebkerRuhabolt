import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToHuf'
})
export class PricePipe implements PipeTransform {

  transform(num: number): string {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'HUF',
    })
    return formatter.format(num)
  }
}
