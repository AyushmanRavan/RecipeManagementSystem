
import { GlobalErrorHandler } from "../core/services/error-handler";
import {
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { ProductService } from "./product.service";
import { DATA } from "../core/data.enum";
import { StorageServiceService } from "../core/services/auth/storage-service.service";
import { MatTableDataSource } from "@angular/material/table";
/**
 * @author Hardik Pithva
 */
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  barChartOptions: any;
  barChartLabels: number[] = [];
  barChartLegend: boolean = true;
  barChartData: any[];
  chartColors: Array<any> = [];

  displayedColumns = ["start_time", "production_count", "production_22", "production_50"];
  dataSource = new MatTableDataSource<any>();
  datasetLength: number;

  loaded: boolean = true;
  loadedSpinner: boolean = true;
  isPaginatorLoading: boolean;
  Errormsg: boolean;
  errMessage: string;
  empty: boolean = true;


  machineName: string;
  plantFilter: string;
  departmentFilter: string;
  assemblyFilter: string;
  machinesFilter: string;
  summary: any;
  machineID: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private product: ProductService,
    private _intl: MatPaginatorIntl, private error: GlobalErrorHandler,
    private storageServiceService: StorageServiceService
  ) {
    // this.setupChart();
    // this.displayedColumns = this.product.getTableColumns();
    console.log("displayedColumns",this.displayedColumns)
  }

  ngOnInit() {
    this.storageServiceService.setStorageItem(DATA.LAST_ACTION, Date.now().toString());
  }

  ngAfterViewInit() {
    this._intl.itemsPerPageLabel = "Record per Page";
    this.dataSource.paginator = this.paginator;
  }

  onSelect(e) {
    this.loaded = true;
    this.empty = true;
    this.loadedSpinner = true;
    this.Errormsg = true;
    this.machineID = e.machineID;
    this.getProductionDetails(e.machineID);
  }

  private getProductionDetails(name: number) {
    if (undefined !== name) {
      //-----------------------For Chart---------------------------------------------      
      // this.product.getProductionDetails(name).subscribe(
      //   data => {
      //     this.setChartData(data);
      //     console.log("setChartData", data)
      //   }
      // );   //   Call Set Chart Data

      this.product.getProductionDetails(name).subscribe(
        data => {
          this.setData(data);
          console.log("setData", data)
        }
      );   //   Call Set Chart Data

      //-----------------------For Table---------------------------------------------   
    }
  }
  //For table     
  // private setChartData(data: any) {
  //   if (data != null) {
  //     this.barChartData = this.product.getChartData(data);
  //     this.loaded = false;
  //     this.empty = false;
  //     this.loadedSpinner = false;
  //     this.isPaginatorLoading = false;
  //   } else {
  //     this.Errormsg = false;
  //     this.loadedSpinner = false;
  //     this.errMessage = this.error.getErrorMessage(1);
  //   }
  // }

  // private setupChart() {
  //   const chart = this.product.getChartOptions();
  //   this.barChartOptions = chart.options;
  //   this.chartColors = chart.colors;
  //   this.barChartLabels = chart.labels;
  // }

  //For Table
  private setData(data: any) {

    if (data != null) {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.loaded = false;
      this.empty = false;
      this.loadedSpinner = false;
      this.Errormsg = true;
    } else {
      this.Errormsg = false;
      this.loaded = true;
      this.loadedSpinner = false;
      this.errMessage = this.error.getErrorMessage(1);
    }

  }


}
