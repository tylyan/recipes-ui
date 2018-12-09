import { Component, Input, Output, EventEmitter } from '@angular/core'
declare var $: any

@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.css']
})
export class StepsFormComponent {

	@Input()
	private steps: string[]

  @Output()
  private bulkAdded = new EventEmitter<string[]>()
  
  private bulkAdd = false

	addStep(step: string): void {
    if (step.length > 0) {
    	this.steps.push(step)
      $('#stepBox').focus()
    }
  }

  addSteps(steps: string[]): void {
    if (steps.length > 0) {
      this.steps = steps
      this.bulkAdded.emit(this.steps)
      $('#stepBox').focus()
    }
  }

  updateStep(event: { before: string, after: string }) {
    this.steps[this.steps.indexOf(event.before)] = event.after
    $('#stepBox').focus()
  }

  removeStep(step: string): void {
    this.steps.splice(this.steps.indexOf(step), 1)
    $('#stepBox').focus()
  }
}
