import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabet'
})
export class SortAlphabetPipe implements PipeTransform {

  transform(alphabetSet: Set<string>, args?: any): string[] {
    return Array.from(alphabetSet).sort()
  }

}
