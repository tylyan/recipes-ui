import { Pipe, PipeTransform } from '@angular/core'
import { Recipe } from '../model/recipe.model'

@Pipe({
  name: 'filterRecipeByFirstChar'
})
export class FilterRecipeByFirstCharPipe implements PipeTransform {

  transform(recipes: Recipe[], character?: string): Recipe[] {
    return recipes.filter((recipe) => {
    	return recipe.name.charAt(0).toUpperCase() === character.toUpperCase()
    })
  }

}
