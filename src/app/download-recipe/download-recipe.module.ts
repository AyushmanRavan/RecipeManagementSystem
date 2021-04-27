import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRecipeRoutingModule } from './download-recipe-routing.module';
import { DownloadRecipeComponent } from './download-recipe.component';
import { ErrorModule } from '../components/error/error.module';
import { MaterialModule } from '../material/material.module';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { FiltersModule } from '../filters/filters.module';


@NgModule({
  declarations: [DownloadRecipeComponent],
  imports: [
    CommonModule,
    DownloadRecipeRoutingModule,
    MaterialModule,
    ErrorModule,
    SpinnerModule,
    FiltersModule,
  ]
})
export class DownloadRecipeModule { }
