import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadRecipeComponent } from './download-recipe.component';

const routes: Routes = [
  { path: 'recipe-download', component: DownloadRecipeComponent },
  { path: "", redirectTo: "recipe-download", pathMatch: "full" },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DownloadRecipeRoutingModule { }
