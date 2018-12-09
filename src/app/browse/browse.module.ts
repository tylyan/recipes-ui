import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { BrowseRoutingModule } from '../routes/browse-routing.module'

import { BrowseComponent } from './browse.component'
import { FilterRecipeByFirstCharPipe } from '../pipe/filter-recipe-by-first-char.pipe'
import { FilterRecipeByTagPipe } from '../pipe/filter-recipe-by-tag.pipe'
import { SortAlphabetPipe } from '../pipe/sort-alphabet.pipe'

import { RecipeService } from '../service/recipe.service';
import { NameListComponent } from './name-list/name-list.component';
import { TagListComponent } from './tag-list/tag-list.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowseRoutingModule
  ],
  declarations: [
  	BrowseComponent,
  	FilterRecipeByFirstCharPipe,
    FilterRecipeByTagPipe,
    SortAlphabetPipe,
    NameListComponent,
    TagListComponent
  ],
  providers: [
  	RecipeService
  ]
})
export class BrowseModule { }
