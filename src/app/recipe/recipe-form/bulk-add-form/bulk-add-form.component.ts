import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { BulkAddService } from '../../../service/bulk-add.service'
declare var $: any

@Component({
  selector: 'app-bulk-add-form',
  templateUrl: './bulk-add-form.component.html',
  styleUrls: ['./bulk-add-form.component.css']
})
export class BulkAddFormComponent implements OnInit {

	@Input()
	private category: string

	@Input()
	private items: string[]

	@Output()
	private added = new EventEmitter<string[]>()

	private value: string

	private rows: number

	constructor(private bulkAddService: BulkAddService) {}

  ngOnInit() {
  	this.rows = this.items.length > 5 ? this.items.length : 5
  	this.value = this.bulkAddService.parseItems(this.items)
  	$('textarea')[0].focus()
  }

  addItems(items: string) {
  	this.items = this.bulkAddService.parseString(items)
  	this.added.emit(this.items)
  }
}
