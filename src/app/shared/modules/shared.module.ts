import { NgModule } from "@angular/core";
import { SpinnerModule } from "../../components/spinner/spinner.module";
import { MaterialModule } from "../../material/material.module";
import { SelectionModule } from "../../components/selection/selection.module";
import { SummaryModule } from "../../components/summary/summary.module";
import { ErrorModule } from "../../components/error/error.module";

const sharedModule: any[] = [
  ErrorModule,
  MaterialModule,
  SelectionModule,
  SpinnerModule,
  SummaryModule
];

@NgModule({
  imports: [...sharedModule],
  exports: [...sharedModule]
})
export class SharedModule { }
