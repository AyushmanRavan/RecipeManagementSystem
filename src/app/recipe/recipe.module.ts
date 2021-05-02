import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
// import { PopUpComponent } from '../pop-up/pop-up.component';
 

@NgModule({
  declarations: [RecipeComponent, RecipeListComponent, RecipeViewComponent,
    // PopUpComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    MaterialModule, 
    ReactiveFormsModule
  ],
    // entryComponents: [PopUpComponent]
})
export class RecipeModule { }
