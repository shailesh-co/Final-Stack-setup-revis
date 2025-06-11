import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitals'
})
export class CapitalsPipe implements PipeTransform {

  transform(value: string): string {
       if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
  }


