import { Injectable } from "@angular/core";
import { map, orderBy } from "lodash";
import { GlobalErrorHandler } from "../core/services/error-handler";
import { RestService } from "../core/services/rest.service";

/**
 * @author Hardik Pithva
 */
@Injectable()
export class ProductService {
  constructor(private error: GlobalErrorHandler, private rest: RestService) { }
//
  getProductionDetails = (name: number) =>
    this.rest.get(`productionInformation/${name}`);

  getErrorMessage = errorId => this.error.getErrorMessage(errorId);

  getChartData = (collection: any) => {
    const x1: number[] = this.getEmptyArray(24),
      x2: number[] = this.getEmptyArray(24);
    map(collection, (item: any) => {
      const h = new Date(item.startDate).getHours();
        x1[h] = item.perHrsGoodProduction;
        x2[h] = item.perHrsRejectProduction;
      
    });
    return [
      { data: [...x1], label: "Good" },
      { data: [...x2], label: "Rejection" }
    ];
  };

  getChartOptions = () => {
    return {
      colors: [
        {
          backgroundColor: "#5cb85c"
        },
        {
          backgroundColor: "#d9534f"
        }
      ],
      labels: this.getHours(24),
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Production Count (pkts)',
              fontColor: '#3e6ceb'
            }

          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time',
              fontColor: '#3e6ceb',
            }
          }]
        }
      
      }
    };
  };

  getTableColumns = () => [
    "startDate",
    "endDate",
    "perHrsTotalProduction",
    "perHrsGoodProduction",
    "perHrsRejectProduction"
  ];

  sortBy = (collection: any, fields, by = ["desc"]) =>
    orderBy(collection, [...fields], ["desc"]);

  throwError = (error: any) => this.error.handleError(error);

  private getEmptyArray = n => Array.from(new Array(n), (x, i) => 0);

  private getHours = n => Array.from(new Array(n), (x, i) => i);
}
