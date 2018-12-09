import { Component, Input, Output, EventEmitter } from '@angular/core'
declare var $: any

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent{

	@Input()
	private notes: string[]

  @Output()
  private bulkAdded = new EventEmitter<string[]>()

  private bulkAdd = false

  addNote(note: string): void {
    if (note.length > 0) {
    	this.notes.push(note)
      $('#noteBox').focus()
    }
  }

  addNotes(notes: string[]): void {
    if (notes.length > 0) {
      this.notes = notes
      this.bulkAdded.emit(this.notes)
      $('#noteBox').focus()
    }
  }

  updateNote(event: { before: string, after: string }) {
    this.notes[this.notes.indexOf(event.before)] = event.after
    $('#noteBox').focus()
  }

  removeNote(note: string): void {
    this.notes.splice(this.notes.indexOf(note), 1)
    $('#noteBox').focus()
  }
}
