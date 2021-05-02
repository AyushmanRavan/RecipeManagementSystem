import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigurationService } from 'src/app/configuration/configuration.service';
import { ADD_UPDATE_DIALOG_OPTIONS, DELETE_DIALOG_OPTIONS, DIALOG_BUTTONS, DIALOG_HEADER, DIALOG_OPTIONS, MODE } from 'src/app/configuration/shared/config';
import { DATA } from 'src/app/core/data.enum';
import { StorageServiceService } from 'src/app/core/services/auth/storage-service.service';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  actionMode: string;

  dialogRef;
  errMessage: string;
  loaded: boolean;
  subscriber: Subscription;
  hiddenData: boolean;
  errhidden: boolean;
  username: string;
  currentPage = 0;
  pageSize = 10;
  array: any;

  datasetLength: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  constructor(private _intl: MatPaginatorIntl, private router: Router,
    private storageServiceService: StorageServiceService, private dialog: MatDialog,
    private configurationService: ConfigurationService) {
    this.username = this.storageServiceService.getStorageItem(DATA.USERNAME);
    this.getAllRecipe();
  }

  doFilter = (value: string) => {
    // this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    console.log(value)
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      console.log(data, filter);
      // return data['recipe_name'] == filter;
      return data['recipe_name'].toLowerCase().includes(filter)
    };
  }

  getAllRecipe() {
    this.subscriber = this.configurationService.getAllRecipe().subscribe(
      data => {

        console.log("============>", data)
        if (data == null) {
          this.handleErrorOFNoMoreData();
          this.hiddenData = true;
        } else {
          this.setTableData(data);
          this.loaded = true;
          this.hiddenData = false;
          this.errhidden = true;
        }
      },
      err => this.handleError(err)
    );
  }

  ngAfterViewInit() {
    this._intl.itemsPerPageLabel = "Records Per Page";
  }

  addRecipe() {
    // this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), {  message: "Do you want to add new recipe ?." });
    // this.dialogRef.afterClosed().subscribe(resp => {
    //   if (resp) {
    //     this.router.navigate(['dashboard/config/recipe/recipeCrud']);
    //   }
    // })
    this.router.navigate(['dashboard/config/recipe/recipeCrud']);
  }

  updateRecipe(recipeId) {
    this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), { message: "Do you want to update this recipe ?." });
    this.dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.router.navigate([`dashboard/config/recipe/recipeCrud/${recipeId}`]);
      }
    })
  }

  deleteRecipe(recipeId) {
    this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), { message: "Do you want to delete this recipe ?." });
    this.dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.configurationService.deleteRecipe(recipeId, this.username).subscribe(
          (resp) => { this.getAllRecipe(); },
          (err) => { console.log("Error while deleting batch", recipeId) }
        );
      }
    })
  }

  viewRecipe(recipeId) {
    this.dialogOpen(ADD_UPDATE_DIALOG_OPTIONS(200, 350), { message: "Do you want to view this recipe ?." });
    this.dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.router.navigate([`dashboard/config/recipe/recipeView/${recipeId}`]);
      }
    })
  }

  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  dialogOpen(options: DIALOG_OPTIONS, data) {

    this.dialogRef = this.dialog.open(PopUpComponent, {
      ...options,
      data: { ...data, status: true }
    });


  }

  updateDataset(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

  private setTableData(data) {

    if (data && data.length > 0) {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.array = data;
      this.datasetLength = this.array.length;
      this.iterator();
    } else {
      this.errMessage = this.configurationService.getErrorMessage(1);
    }
    this.reset();
  }

  private handleError(err) {
    this.reset();
    this.errMessage = this.configurationService.getErrorMessage(0);
    this.configurationService.throwError(err);
  }

  private handleErrorOFNoMoreData() {
    this.reset();
    this.hiddenData = true;
    this.errhidden = false;
    this.errMessage = this.configurationService.getErrorMessage(1);
  }

  private reset() {
    this.loaded = true;
  }
}
