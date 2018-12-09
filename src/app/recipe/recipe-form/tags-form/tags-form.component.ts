import { Component, Input } from '@angular/core'
declare var $: any

@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.css']
})
export class TagsFormComponent{

	@Input()
  private tags: string[]

  addTag(tag: string): void {
    if (tag.length > 0 && !this.tags.includes(tag)) {
      tag.split(',').forEach((t) => {
        const trimmed = t.trim().replace(/\s\s+/g, ' ')
        if (trimmed.length && !this.tags.includes(trimmed)) {
          this.tags.push(trimmed)
        }
      })
      $('#tagBox').focus()
    }
  }

  updateTag(event: { before: string, after: string }) {
    this.tags[this.tags.indexOf(event.before)] = event.after
    $('#tagBox').focus()
  }

  removeTag(tag: string): void {
    this.tags.splice(this.tags.indexOf(tag), 1)
    $('#tagBox').focus()
  }
}
