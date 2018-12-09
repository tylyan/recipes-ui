import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { catchError, map, take } from 'rxjs/operators'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { Recipe } from '../model/recipe.model'
import { RecipeService } from './recipe.service'

@Injectable({
  providedIn: 'root'
})
export class RecipeResolveService implements Resolve<Recipe> {

  constructor(private router: Router, private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
  	return this.recipeService.getRecipeByName(route.params['name'])
  		.pipe(
  			take(1),
  			map(recipe => recipe),
  			catchError((error) => {
  				this.router.navigate(['/404'])
  				return throwError(error)
  			}))
  	}
}
