import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeComponent } from './recipe.component';

const routes: Routes = [
  { path: 'recipeList', component: RecipeListComponent },
  { path: 'recipeCrud/:id', component: RecipeComponent },
  { path: 'recipeCrud', component: RecipeComponent },
  { path: "recipeView/:id", component: RecipeViewComponent },
  { path: "", redirectTo: "recipeList", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
