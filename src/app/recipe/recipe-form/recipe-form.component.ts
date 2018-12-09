import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Location } from '@angular/common'
import { Recipe } from '../../model/recipe.model'
declare var $:any

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

	@Input()
	private recipe: Recipe

  @Output()
  private submitted = new EventEmitter<Recipe>()

  constructor(private location: Location) {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('#nameModal').on('show.bs.modal', () => {
        $('#nameBox').val(this.recipe.name)
      })

      $('#nameModal').on('shown.bs.modal', () => {
        $('#nameBox').select()
      })

      $('#nameModal').on('hidden.bs.modal', () => {
        $('#tagBox').focus()
      })

      if (this.recipe.id === null) {
        $('#nameModal').modal('show')
      }
    })
  }

  submit() {
    this.submitted.emit(this.recipe)
  }

  hideModal(): void {
    $('#nameModal').modal('hide')
  }

  changeName(name: string): void {
    this.recipe.name = name.trim().replace(/\s\s+/g, ' ');
  }

  back(): void {
    this.location.back()
  }
}
