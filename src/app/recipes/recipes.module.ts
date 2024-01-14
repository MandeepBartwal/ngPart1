import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';



@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent]
})
export class RecipesModule { }
