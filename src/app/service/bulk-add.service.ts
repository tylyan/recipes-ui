import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulkAddService {

  constructor() { }

  parseItems(items: string[]): string {
  	let value = ''
  	items.forEach((item, index) => {
  		value += item
      if (index != items.length - 1) {
        value += '\n'
      }
  	})
  	return value
  }

  parseString(value: string): string[] {
  	return value.split('\n').filter((line) => {
      return line.replace(/\s/g, '').length
    }).map((line) => {
      return line.trim()
    })
  }
}
