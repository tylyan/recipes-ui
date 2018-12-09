import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from '../not-found/not-found.component'
import { UserLoggedInGuard } from '../service/user-login.service';

function testGuard() {
	return false
}

const routes: Routes = [
	{
		path: 'user',
		loadChildren: '../user/user.module#UserModule'
	},
	{
		path: 'browse',
		loadChildren: '../browse/browse.module#BrowseModule',
		canLoad: [UserLoggedInGuard]
	},
	{
		path: 'recipe',
		loadChildren: '../recipe/recipe.module#RecipeModule',
		canLoad: [UserLoggedInGuard]
	},
	{
		path: '',
		redirectTo: '/browse/name',
		pathMatch: 'full'
	},
	{
		path: '404',
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: '/404'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ],
	providers: [UserLoggedInGuard]
})
export class AppRoutingModule { }

