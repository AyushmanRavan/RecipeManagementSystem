import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ConfigurationService } from '../configuration/configuration.service';
import { ADD_UPDATE_DIALOG_OPTIONS, DIALOG_BUTTONS, DIALOG_HEADER, DIALOG_OPTIONS } from '../configuration/shared/config/dialog-config';
import { GlobalErrorHandler } from '../core/services/error-handler';
import { NotificationService } from '../core/services/notification.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

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
  batchSizeControl: boolean = true;
  errorMessage: string = "";
  reportType: string;
  dialogRef;
  recipeOptions = [];
  status: boolean = false;
  machineOptions = [];

  constructor(private configurationService: ConfigurationService,
    private globalErrorHandler: GlobalErrorHandler, private dialog: MatDialog,
    private formBuilder: FormBuilder, private notificationService: NotificationService) {
    this.report = this.formBuilder.group({
      recipeName: [null, Validators.required],
      batchSize: [null],
      downloadingMachine: [null, Validators.required],
      numberOfBatches: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      autoBatch: [null]
    });
    this.report.get('batchSize').disable();
    this.loadAllRecipes();
    this.downloadEnable();
  }

  onCheckboxChange(event) {
    if (event.checked) {
      this.report.get('batchSize').enable()
      this.report.get('batchSize').setValidators([Validators.required, Validators.pattern(/^[.\d]+$/)]);
    } else {
      this.report.get('batchSize').reset();
      this.report.get('batchSize').disable();
      this.report.get('batchSize').setValidators(null);
      this.report.get('batchSize').updateValueAndValidity();
    }
  }

  loadAllRecipes() {
    this.configurationService.getAllRecipe().subscribe(data => {
      this.recipeOptions = data;
      console.log("loadAllRecipes", data)
    }, error => {
      this.handleError(error)
    });
  }


  dialogOpen(options: DIALOG_OPTIONS, data) {

    this.dialogRef = this.dialog.open(PopUpComponent, {
      ...options,
      data: { ...data, status: false }
    });


  }

  downloadEnable() {
    this.configurationService.downloadEnable().subscribe(data => {
      // alert(" message " + data['message'] + " status " + data['status']);
      this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), { status: data['status'], message: data['message'] });

      this.dialogRef.afterClosed().subscribe(resp => {
        this.status = data['status'];
        this.machineOptions = data['machines'];
      })

    },
      (err) => {
        // alert(" message " + err.error['message'] + " status " + err.error['status']);
        this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), { status: err.error['status'], message: err.error['message'] });
        this.dialogRef.afterClosed().subscribe(resp => {
          this.status = err.error['status'];
          this.machineOptions = err.error['machines'];
        })
      });
  }

  get noOfBtch() { return this.report.get('numberOfBatches'); }

  get batchWeight() { return this.report.get('batchSize'); }

  changeRecipeName(event) {

  }

  changeMachineName(event) {
  }


  ngOnInit() {
  }

  onGenerate() {
    if (this.report.valid) {
      if (this.report.get('autoBatch').value) {
        this.passFormValues(this.report.value);
        this.report.disable()
      } else {
        this.passFormValues({ ...this.report.value, batchSize: 0 });
        this.report.disable()
      }
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
