import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../filters/filters.component';
import { MaterialModule } from '../material/material.module';
import { ConfigurationService } from '../configuration/configuration.service';
import { GlobalErrorHandler } from '../core/services/error-handler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule, 
    ReactiveFormsModule
  ],
  providers: [GlobalErrorHandler, ConfigurationService]
})
export class FiltersModule { }
