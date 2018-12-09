import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RecipeService } from '../service/recipe.service'
import { Recipe } from '../model/recipe.model'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {recipes: Recipe[]}) => {
      this.recipeService.setRecipes(data.recipes)
    })
  }
}
