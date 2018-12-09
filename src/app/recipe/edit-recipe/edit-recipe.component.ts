import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe } from '../../model/recipe.model'
import { RecipeService } from '../../service/recipe.service'
declare var $: any

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

	private recipe: Recipe
  private errorTitle = 'Error Editing Recipe'
  private errorMessage: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
  	this.route.data
  		.subscribe((data: {recipe: Recipe}) => {
  			this.recipe = data.recipe
  		})
  }

  private updateRecipe(recipe: Recipe) {
    if (!this.recipe.ingredients.length || !this.recipe.steps.length) {
      this.showError('Add at least 1 ingredient or step')
    } else {
      this.recipeService.updateRecipe(recipe)
        .subscribe(
          (recipe: Recipe) => {
            this.router.navigate(['/recipe/view', recipe.name.toLowerCase()])
          },
          (error) => {
            this.showError(error.message)
          }
        )
    }
  }

  private showError(message: string): void {
    this.errorMessage = message
    $('#errorModal').modal('show')
  }
}
