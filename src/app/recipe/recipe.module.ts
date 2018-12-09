import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { RecipeRoutingModule } from './recipe-routing.module'

import { ListNumbersPipe } from '../pipe/list-numbers.pipe'
import { RecipeComponent } from './recipe.component'
import { AddRecipeComponent } from './add-recipe/add-recipe.component'
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component'
import { RecipeFormComponent } from './recipe-form/recipe-form.component'
import { ItemPointComponent } from './recipe-form/item-point/item-point.component'
import { TagPointComponent } from './recipe-form/tag-point/tag-point.component'
import { IngredientFormComponent } from './recipe-form/ingredient-form/ingredient-form.component'
import { StepsFormComponent } from './recipe-form/steps-form/steps-form.component'
import { NotesFormComponent } from './recipe-form/notes-form/notes-form.component'
import { TagsFormComponent } from './recipe-form/tags-form/tags-form.component'
import { ListGroupComponent } from './recipe-form/list-group/list-group.component';
import { BulkAddFormComponent } from './recipe-form/bulk-add-form/bulk-add-form.component'

import { BulkAddService } from '../service/bulk-add.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RecipeRoutingModule
  ],
  declarations: [
  	RecipeComponent,
  	AddRecipeComponent,
  	EditRecipeComponent,
  	RecipeFormComponent,
  	ItemPointComponent,
  	TagPointComponent,
  	IngredientFormComponent,
  	StepsFormComponent,
  	NotesFormComponent,
  	TagsFormComponent,
  	ListGroupComponent,
    ListNumbersPipe,
    BulkAddFormComponent
  ],
  providers: [
    BulkAddService
  ]
})
export class RecipeModule { }
