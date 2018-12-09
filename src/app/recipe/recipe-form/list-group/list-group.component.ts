import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {

	@Input()
	private items: string[]

	@Input()
	private isSteps: boolean

	@Output()
	private updated = new EventEmitter()

  addItem(item: string): void {
    if (item.length > 0) {
    	this.items.push(item)
    }
  }

  updateItem(event: { before: string, after: string }) {
    this.items[this.items.indexOf(event.before)] = event.after
    this.updated.emit()
  }

  removeItem(item: string): void {
    this.items.splice(this.items.indexOf(item), 1)
  }

  moveUp(i: number): void {
    if (i > 0) {
      const temp = this.items[i - 1]
      this.items[i - 1] = this.items[i]
      this.items[i] = temp
    }
  }

  moveDown(i: number): void {
    if (i < this.items.length - 1) {
      const temp = this.items[i + 1]
      this.items[i + 1] = this.items[i]
      this.items[i] = temp
    }
  }
}
