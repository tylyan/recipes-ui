import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listNumbers'
})
export class ListNumbersPipe implements PipeTransform {

  transform(item: string, listNumbers?: boolean, index?: number): string {
  	if (listNumbers && (index !== null)) {
  		return (index + 1) + '. ' + item
  	}
    return item
  }

}
