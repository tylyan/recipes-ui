import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Recipe } from '../model/recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

	private recipeApiUrl = 'http://localhost:3000'
  private recipes: Recipe[]

  constructor(private http: HttpClient) { }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    const url = this.recipeApiUrl + '/recipe'
    return this.http.post<Recipe>(url, recipe)
      .pipe(
        catchError(this.handleError))
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const url = this.recipeApiUrl + '/recipe/' + recipe.id
    return this.http.put<Recipe>(url, recipe)
      .pipe(
        catchError(this.handleError))
  }

  deleteRecipe(recipe:Recipe): Observable<Recipe> {
    const url = this.recipeApiUrl + '/recipe/' + recipe.id
    return this.http.delete<Recipe>(url)
      .pipe(
        catchError(this.handleError))
  }

  getAllRecipes(): Observable<Recipe[]> {
  	const url = this.recipeApiUrl + '/recipes'
  	return this.http.get<Recipe[]>(url)
      .pipe(
        catchError(this.handleError))
  }

  getRecipe(name: string): Observable<Recipe> {
    const url = this.recipeApiUrl + '/recipe?name=' + name
    return this.http.get<Recipe>(url)
      .pipe(
        catchError(this.handleError))
  }

  getRecipes(): Recipe[] {
    return this.recipes.sort((a, b) => {
        const aName = a.name.toUpperCase()
        const bName = b.name.toUpperCase()
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0
      })
  }
  
  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes
  }

  getRecipeByName(name: string): Observable<Recipe> {
    if (this.recipes && this.recipes.map((recipe) => recipe.name.toLowerCase()).includes(decodeURIComponent(name))) {
        return Observable.create((observer) => {
          observer.next(this.recipes.find((recipe) => {
            return recipe.name.toUpperCase() === decodeURIComponent(name).toUpperCase()
          }))
          observer.complete()
        })
    } else {
      return this.getRecipe(name)
    }
  }

  private titleCase(name: string): string {
    return name.split(' ').map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:`, error.error)
    }
    return throwError(error.error)
  }
}