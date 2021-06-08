import { Component, OnInit } from "@angular/core";
import { ConfigurationService } from "src/app/configuration/configuration.service";
import { GlobalErrorHandler } from "src/app/core/services/error-handler";
@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"]
})
export class DefaultComponent {
  loaded: boolean;
  errMessage: string;
  summary: any[];
  gridColumns = 3;

  constructor(private configurationService: ConfigurationService,
    private error: GlobalErrorHandler,) {
    this.getBatchDashBoardSummery();
  }

  toggleGridColumns() {
    // this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  OnInit(): void {
  }

  ngOnDestroy() {
  }

  getBatchDashBoardSummery() {
    this.loaded = true;
    this.configurationService.getIPAddress().
      subscribe(data => {
        this.loaded = false;
        console.log(data);
        this.summary = data;
        // this.summary.push({
        //   alarmName: "tally pc disconnected",
        //   interval: 3,
        //   ipAddress: "172.17.1.243",
        //   lastUpdated: "2021-05-21 14:02:47.0",
        //   pcName: "tally pc",
        //   status: true
        // })
        // this.summary.push({
        //   alarmName: "tally pc disconnected",
        //   interval: 3,
        //   ipAddress: "172.17.1.243",
        //   lastUpdated: "2021-05-21 14:02:47.0",
        //   pcName: "tally pc",
        //   status: true
        // })
        if (!this.summary.length) {
          this.errMessage = this.error.getErrorMessage(1);
        }
      }, err => {
        this.loaded = false;
        this.errMessage = err.error.errorMessage
      });
  }


}

