import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowseComponent } from '../browse/browse.component'
import { NameListComponent } from '../browse/name-list/name-list.component'
import { TagListComponent } from '../browse/tag-list/tag-list.component'
import { RecipesResolveService } from '../service/recipes.resolve.service'


const routes: Routes = [
	{
		path: '',
		component: BrowseComponent,
		resolve: {
			recipes: RecipesResolveService
		},
		children: [
			{
				path: '',
				redirectTo: 'name',
				pathMatch: 'prefix'
			},
			{
				path: 'name',
				component: NameListComponent
			},
			{
				path: 'tag',
				component: TagListComponent
			}
		]
	}
]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	providers: [
		RecipesResolveService
	]
})
export class BrowseRoutingModule { }