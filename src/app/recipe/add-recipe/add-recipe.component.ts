import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Recipe } from '../../model/recipe.model'
import { RecipeService } from '../../service/recipe.service'
declare var $: any

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

	private recipe: Recipe

  private errorTitle = 'Error Adding Recipe'
  private errorMessage: string

  constructor(private router: Router, private recipeService: RecipeService) {
  	this.recipe = {
  		id: null,
  		name: "New Recipe Name",
			creationDate: null,
			lastModified: null,
			tags: [],
			ingredients: [],
			steps: [],
			notes: []
  	}
  }

  ngOnInit() {
  }

  addRecipe(recipe: Recipe): void {
    if (!this.recipe.ingredients.length || !this.recipe.steps.length) {
      this.showError('Add at least 1 ingredient or step')
    } else {
    this.recipeService.addRecipe(recipe).
      subscribe(
        (recipe: Recipe) =>  {
          this.router.navigate(['/recipe/view', recipe.name.toLowerCase()])
        },
        (error) => {
          this.showError(error.message)
        })
    }
  }

  private showError(message: string): void {
    this.errorMessage = message
    $('#errorModal').modal('show')
  }
}
