import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ConfigurationService } from '../configuration/configuration.service';
import { GlobalErrorHandler } from '../core/services/error-handler';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  report: FormGroup;
  //@Output & EventEmitter is used when you want to pass data from the child to the parent 
  //@Output emits the data using the EventEmitter method to the parent component
  @Output() select = new EventEmitter();

  //@Input is used to pass data from parent to child
  @Input() pageType: String;

  errorMessage: string = "";
  reportType: string;

  recipeOptions = [];
  status: boolean;
  machineOptions = ["R10", "R30"]


  constructor(private configurationService: ConfigurationService,
    private globalErrorHandler: GlobalErrorHandler,
    private formBuilder: FormBuilder, private notificationService: NotificationService) {
    this.report = this.formBuilder.group({
      recipeName: [null, Validators.required],
      batchSize: [null, [Validators.required, Validators.pattern(/^[.\d]+$/)]],
      downloadingMachine: [null, Validators.required],
      autoBatch: [null, Validators.required]
    });

    this.downloadEnable();
    this.loadAllRecipes();
  }

  get batchWeight() { return this.report.get('batchSize'); }

  loadAllRecipes() {
    this.configurationService.getAllRecipe().subscribe(data => {
      this.recipeOptions = data;
      console.log("loadAllRecipes",data)
    }, error => {
      this.handleError(error)
    });
  }

  downloadEnable() {
    this.configurationService.downloadEnable().subscribe(data => {
      this.status = data['status'];
      console.log("downloadEnable",data)
    });
  }

  changeRecipeName(event) {

  }

  changeMachineName(event) {

  }


  ngOnInit() {
    
  }


  onGenerate() {
    if (this.report.valid) {
      this.passFormValues(this.report.value);
      this.status = !this.status
    }
  }

  passFormValues(reportValue) {
    const { assembly, department, plant, machine, ...rest } = reportValue;
    this.select.emit({ reportValue, extraField: 100, });
  }

  private handleError(err) {
    this.globalErrorHandler.handleError(err);
  }

}
