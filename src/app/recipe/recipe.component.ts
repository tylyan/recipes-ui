import { Component, OnInit, Input } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe } from '../model/recipe.model'
import { RecipeService } from '../service/recipe.service'
declare var $: any

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

	private recipe: Recipe
	
  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  	private location: Location,
  	private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {recipe: Recipe}) => {
        this.recipe = data.recipe
      })
  }

  confirmDelete(): void {
    $('#deleteModal').modal('show')
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe)
      .subscribe(
        (recipe: Recipe) => {
          this.router.navigate(['/browse'])
        },
        (error) => {

        })
  }

  back(): void {
  	this.location.back()
  }
}
