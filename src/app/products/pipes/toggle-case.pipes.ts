import { Pipe, PipeTransform } from '@angular/core';

//carlos | toggleCase = 'CARLOS'
//CARLOS | toggleCase = 'carlos'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
    ?value.toUpperCase()
    :value.toLowerCase();
  }
}
