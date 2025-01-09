import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interface/hero.interface';

@Pipe({
  name: 'sortByPipe',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortByPipe: keyof Hero | ''): Hero[] {
    switch (sortByPipe) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroes;
    }
  }
}
