import { Component, Input, Output, EventEmitter } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {

	@Input()
	private ingredients: string[]

  @Output()
  private bulkAdded = new EventEmitter<string[]>()

  private bulkAdd = false;

  addIngredient(ingredient: string): void {
    if (ingredient.length > 0) {
    	this.ingredients.push(ingredient)
      $('#ingredientBox').focus()
    }
  }

  addIngredients(ingredients: string[]): void {
    if (ingredients.length > 0) {
      this.ingredients = ingredients
      this.bulkAdded.emit(this.ingredients)
      $('#ingredientBox').focus()
    }
  }

  updateIngredient(event: { before: string, after: string }) {
    this.ingredients[this.ingredients.indexOf(event.before)] = event.after
    $('#ingredientBox').focus()
  }

  removeIngredient(ingredient: string): void {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1)
    $('#ingredientBox').focus()
  }
}
