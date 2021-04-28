import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CalculatedRecipeDataComponent } from './calculated-recipe-data.component';
import { FiltersModule } from '../filters/filters.module';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { ErrorModule } from '../components/error/error.module';
import { ConfigurationService } from '../configuration/configuration.service';
import { GlobalErrorHandler } from '../core/services/error-handler';

@NgModule({
  declarations: [CalculatedRecipeDataComponent],
  exports: [CalculatedRecipeDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ErrorModule,
    SpinnerModule,
    FiltersModule,
  ],
  providers: [GlobalErrorHandler, ConfigurationService]
})
export class CalculatedRecipeDataModule { }
