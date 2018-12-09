import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { Recipe } from '../model/recipe.model'
import { RecipeService } from './recipe.service'

@Injectable({
  providedIn: 'root'
})
export class RecipesResolveService implements Resolve<Recipe[]> {

  constructor(private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Recipe[]> {
  	return this.recipeService.getAllRecipes()
  }
}
