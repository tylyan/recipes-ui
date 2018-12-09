import { Component, Input, Output, EventEmitter } from '@angular/core'
declare var $: any

@Component({
  selector: 'app-tag-point',
  templateUrl: './tag-point.component.html',
  styleUrls: ['./tag-point.component.css']
})
export class TagPointComponent {

	@Input()
	private item: string

	@Output()
	private removed = new EventEmitter<string>()

	@Output()
	private updated = new EventEmitter<{before: string, after: string}>()

	private editing: boolean = false

	editItem(): void {
		this.editing = true
	}

	removeItem(item: string): void {
		this.removed.emit(item)
	}

	updateItem(item: string): void {
		const before = this.item
		const after = item
		this.item = item
		this.updated.emit({before: before, after: after})
		this.editing = false
	}
}
