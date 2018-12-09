import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RecipeComponent } from './recipe.component'
import { AddRecipeComponent } from './add-recipe/add-recipe.component'
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component'
import { RecipeResolveService } from '../service/recipe.resolve.service'


const routes: Routes = [
	{
		path: 'add',
		component: AddRecipeComponent
	},
	{
		path: '',
		redirectTo: 'add',
		pathMatch: 'full'
	},
	{
		path: 'view/:name',
		component: RecipeComponent,
		resolve: {
			recipe: RecipeResolveService
		}
	},
	{
		path: 'edit/:name',
		component: EditRecipeComponent,
		resolve: {
			recipe: RecipeResolveService
		}
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [ RouterModule ],
	providers: [
		RecipeResolveService
	]
})
export class RecipeRoutingModule { }