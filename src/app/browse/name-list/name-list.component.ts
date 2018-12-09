import { Component, OnInit } from '@angular/core'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../model/recipe.model'

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  private recipes: Recipe[]
	private alphabet: Set<string>

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()

    this.alphabet = new Set<string>()
    this.recipes.forEach((recipe) => {
      this.alphabet.add(recipe.name.charAt(0).toUpperCase())
    })
  }
}
