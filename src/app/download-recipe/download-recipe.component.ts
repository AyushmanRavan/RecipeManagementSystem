import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../configuration/configuration.service';
import { GlobalErrorHandler } from '../core/services/error-handler';

@Component({
  selector: 'app-download-recipe',
  templateUrl: './download-recipe.component.html',
  styleUrls: ['./download-recipe.component.scss']
})
export class DownloadRecipeComponent implements OnInit {
  showForm: boolean = false;
  errMessage: string;
  loading: boolean = false;
  data: any;

  recipeId: any
  downloadingMachine: string
  batchSize: any
  autoBatch: boolean
  numberOfBatches: any
  constructor(
    private configurationService: ConfigurationService,
    private error: GlobalErrorHandler
  ) {

  }
  
  ngOnInit(): void {

  }

  onSelect(event: any) {
    // console.log("event======>>>", event)
    this.recipeId = event['reportValue']['recipeName'].recipeId
    this.downloadingMachine = event['reportValue']['downloadingMachine']
    this.batchSize = event['reportValue']['batchSize']
    this.autoBatch = event['reportValue']['autoBatch']  //numberOfBatches
    this.numberOfBatches = event['reportValue']['numberOfBatches']

    const payload = {
      recipeId: this.recipeId,
      downloadingMachine: this.downloadingMachine,
      batchSize: this.batchSize,
      autoBatch: this.autoBatch,
      numberOfBatches: this.numberOfBatches
    }
    console.log("Payload===>", payload)
    this.configurationService.generateRecipe(payload).subscribe(resp => {
      this.data = resp;
      this.data['payload'] = payload;
      console.log("API data", this.data);
      this.showForm = true;
    },
      err => {
        this.showForm = false;
      })
  }


  private handleError(err) {
    this.loading = false;
    if (err.error.message) {
      this.errMessage = err.error.message;
    } else {
      this.errMessage = this.error.getErrorMessage(100);
    }
  }


}
