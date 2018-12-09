import { Component, OnInit } from '@angular/core'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../model/recipe.model'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

	private recipes: Recipe[]
	private tags: Set<string>

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.recipes = this.recipeService.getRecipes()
  	this.tags = new Set<string>()
  	this.recipes.forEach((recipe) => {
  		if (recipe.tags) {
  			recipe.tags.forEach((tag) => {
  				this.tags.add(tag)
  			})
  		}
  	})
  }
}
