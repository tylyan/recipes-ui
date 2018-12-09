import { Pipe, PipeTransform } from '@angular/core'
import { Recipe } from '../model/recipe.model'
@Pipe({
  name: 'filterRecipeByTag'
})
export class FilterRecipeByTagPipe implements PipeTransform {

  transform(recipes: Recipe[], tag?: string): any {
    return recipes.filter((recipe) => {
    	return recipe.tags && recipe.tags.includes(tag)
    })
  }

}
