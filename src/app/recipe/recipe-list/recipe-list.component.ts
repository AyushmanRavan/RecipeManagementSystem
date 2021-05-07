import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigurationService } from 'src/app/configuration/configuration.service';
import { ADD_UPDATE_DIALOG_OPTIONS, DELETE_DIALOG_OPTIONS, DIALOG_BUTTONS, DIALOG_HEADER, DIALOG_OPTIONS, MODE } from 'src/app/configuration/shared/config';
import { DATA } from 'src/app/core/data.enum';
import { StorageServiceService } from 'src/app/core/services/auth/storage-service.service';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { isArray } from 'util';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  actionMode: string;
  displayedColumns: string[] = ['recipe_name', 'details', 'update', 'delete'];
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
  searchKey: string;
  tempData = [
    {
      "recipe_name": "ravan",
      "user_name": "2",
      "recipe_machine": "R10",
      "loggingTime": "2021-04-19 12:16:28.0",
      "number_of_batches": 5,
      "recipeId": 3,
      "liquid_addition": true,
      "relative_recipe": false,
      "recipe_enable": true,
      "batch_size": 123.1,
      "comp_1_size": 12.0,
      "comp_2_size": 13.0,
      "comp_3_size": 14.0,
      "recipeData": {
        "silo_23_extra_fine_weight": "4.0",
        "cs_23_fine_speed": "7.0",
        "silo_11_inflight_time": "9.0",
        "cs_12_inflight_weight": "5.0",
        "silo_23_set_weight": "1.0",
        "silo_32_inflight_time": "9.0",
        "cs_21_course_speed": "6.0",
        "cs_33_extra_fine_weight": "44.0",
        "cs_12_inflight_time": "9.0",
        "silo_21_tollerence": "10.0",
        "silo_31_tollerence": "10.0",
        "silo_32_course_speed": "6.0",
        "cs_33_fine_speed": "77.0",
        "silo_11_tollerence": "10.0",
        "cs_21_course_weight": "2.0",
        "cs_11_extra_fine_speed": "8.0",
        "cs_33_inflight_time": "99.0",
        "silo_11_extra_fine_speed": "8.0",
        "cs_13_extra_fine_speed": "8.0",
        "silo_33_inflight_weight": "5.0",
        "silo_11_extra_fine_weight": "4.0",
        "silo_23_inflight_time": "9.0",
        "cs_21_extra_fine_weight": "4.0",
        "silo_33_set_weight": "1.0",
        "cs_13_fine_speed": "7.0",
        "cs_13_tollerence": "10.0",
        "cs_23_tollerence": "10.0",
        "silo_31_fine_speed": "7.0",
        "cs_32_inflight_weight": "5.0",
        "cs_33_tollerence": "100.0",
        "cs_12_course_weight": "2.0",
        "cs_33_course_weight": "22.0",
        "silo_11_fine_speed": "7.0",
        "silo_22_course_weight": "2.0",
        "silo_21_fine_speed": "7.0",
        "silo_11_inflight_weight": "5.0",
        "cs_14_tollerence": "10.0",
        "cs_23_course_weight": "2.0",
        "cs_33_course_speed": "66.0",
        "silo_22_extra_fine_weight": "4.0",
        "silo_21_extra_fine_speed": "8.0",
        "silo_12_extra_fine_weight": "4.0",
        "cs_32_course_speed": "6.0",
        "cs_23_inflight_weight": "5.0",
        "silo_31_course_weight": "2.0",
        "silo_31_fine_weight": "3.0",
        "silo_31_inflight_weight": "5.0",
        "silo_23_course_weight": "2.0",
        "silo_11_fine_weight": "3.0",
        "silo_23_fine_speed": "7.0",
        "cs_32_course_weight": "2.0",
        "silo_31_course_speed": "6.0",
        "silo_32_fine_weight": "3.0",
        "cs_33_extra_fine_speed": "88.0",
        "cs_13_set_weight": "1.0",
        "cs_23_extra_fine_weight": "4.0",
        "silo_32_extra_fine_speed": "8.0",
        "silo_33_fine_speed": "7.0",
        "cs_21_inflight_weight": "5.0",
        "silo_33_course_speed": "6.0",
        "cs_23_set_weight": "1.0",
        "silo_33_fine_weight": "3.0",
        "silo_32_set_weight": "1.0",
        "cs_33_set_weight": "11.0",
        "silo_12_fine_weight": "3.0",
        "cs_31_inflight_time": "9.0",
        "cs_32_extra_fine_speed": "8.0",
        "cs_32_fine_speed": "7.0",
        "silo_21_extra_fine_weight": "4.0",
        "silo_31_extra_fine_speed": "8.0",
        "cs_31_extra_fine_weight": "4.0",
        "cs_11_course_weight": "2.0",
        "cs_11_extra_fine_weight": "4.0",
        "silo_23_extra_fine_speed": "8.0",
        "silo_11_course_weight": "2.0",
        "silo_32_course_weight": "2.0",
        "silo_23_course_speed": "6.0",
        "cs_31_set_weight": "1.0",
        "cs_13_course_speed": "6.0",
        "silo_21_course_speed": "6.0",
        "cs_21_set_weight": "1.0",
        "silo_21_set_weight": "1.0",
        "cs_11_set_weight": "1.0",
        "silo_12_inflight_time": "9.0",
        "cs_11_course_speed": "6.0",
        "silo_11_set_weight": "1.0",
        "silo_33_inflight_time": "9.0",
        "cs_14_fine_weight": "3.0",
        "cs_14_fine_speed": "7.0",
        "silo_22_set_weight": "1.0",
        "silo_12_extra_fine_speed": "8.0",
        "cs_13_fine_weight": "3.0",
        "cs_22_set_weight": "1.0",
        "cs_21_extra_fine_speed": "8.0",
        "cs_33_fine_weight": "33.0",
        "silo_12_set_weight": "1.0",
        "cs_11_inflight_time": "9.0",
        "cs_12_set_weight": "1.0",
        "cs_12_fine_weight": "3.0",
        "cs_13_extra_fine_weight": "4.0",
        "silo_22_inflight_weight": "5.0",
        "cs_32_inflight_time": "9.0",
        "silo_11_course_speed": "6.0",
        "cs_32_fine_weight": "3.0",
        "cs_31_fine_weight": "3.0",
        "cs_11_fine_weight": "3.0",
        "cs_31_course_weight": "2.0",
        "silo_31_set_weight": "1.0",
        "cs_32_set_weight": "1.0",
        "silo_12_inflight_weight": "5.0",
        "silo_21_fine_weight": "3.0",
        "cs_13_course_weight": "2.0",
        "silo_22_fine_weight": "3.0",
        "cs_12_tollerence": "10.0",
        "silo_21_course_weight": "2.0",
        "cs_33_inflight_weight": "55.0",
        "silo_23_fine_weight": "3.0",
        "silo_31_extra_fine_weight": "4.0",
        "cs_22_course_weight": "2.0",
        "cs_22_inflight_weight": "5.0",
        "cs_22_tollerence": "10.0",
        "cs_32_tollerence": "10.0",
        "cs_14_set_weight": "1.0",
        "silo_32_fine_speed": "7.0",
        "silo_22_fine_speed": "7.0",
        "silo_12_fine_speed": "7.0",
        "cs_23_course_speed": "6.0",
        "silo_31_inflight_time": "9.0",
        "cs_14_extra_fine_speed": "8.0",
        "silo_23_tollerence": "10.0",
        "cs_13_inflight_time": "9.0",
        "silo_33_tollerence": "10.0",
        "cs_31_fine_speed": "7.0",
        "cs_22_extra_fine_speed": "8.0",
        "cs_12_fine_speed": "7.0",
        "silo_23_inflight_weight": "5.0",
        "cs_22_fine_speed": "7.0",
        "cs_14_inflight_weight": "5.0",
        "cs_11_inflight_weight": "5.0",
        "silo_32_inflight_weight": "5.0",
        "cs_11_fine_speed": "7.0",
        "cs_31_course_speed": "6.0",
        "silo_32_extra_fine_weight": "4.0",
        "silo_33_course_weight": "2.0",
        "silo_12_course_weight": "2.0",
        "cs_12_extra_fine_speed": "8.0",
        "cs_21_fine_speed": "7.0",
        "cs_21_tollerence": "10.0",
        "cs_31_tollerence": "10.0",
        "silo_21_inflight_time": "9.0",
        "silo_33_extra_fine_weight": "4.0",
        "cs_14_inflight_time": "9.0",
        "silo_32_tollerence": "10.0",
        "cs_23_inflight_time": "9.0",
        "silo_22_tollerence": "10.0",
        "cs_23_extra_fine_speed": "8.0",
        "cs_31_inflight_weight": "5.0",
        "silo_21_inflight_weight": "5.0",
        "silo_12_tollerence": "10.0",
        "cs_22_course_speed": "6.0",
        "cs_14_extra_fine_weight": "4.0",
        "cs_12_course_speed": "6.0",
        "silo_22_course_speed": "6.0",
        "cs_31_extra_fine_speed": "8.0",
        "cs_21_inflight_time": "9.0",
        "silo_22_extra_fine_speed": "8.0",
        "cs_14_course_weight": "2.0",
        "cs_32_extra_fine_weight": "4.0",
        "cs_13_inflight_weight": "5.0",
        "cs_22_extra_fine_weight": "4.0",
        "silo_22_inflight_time": "9.0",
        "cs_12_extra_fine_weight": "4.0",
        "cs_23_fine_weight": "3.0",
        "silo_33_extra_fine_speed": "8.0",
        "cs_21_fine_weight": "3.0",
        "cs_22_inflight_time": "9.0",
        "silo_12_course_speed": "6.0",
        "cs_22_fine_weight": "3.0",
        "cs_11_tollerence": "10.0",
        "cs_14_course_speed": "6.0"
      }
    },
    {
      "recipe_name": "ayushman",
      "user_name": "2",
      "recipe_machine": "R10",
      "loggingTime": "2021-04-19 12:16:28.0",
      "number_of_batches": 5,
      "recipeId": 3,
      "liquid_addition": true,
      "relative_recipe": false,
      "recipe_enable": true,
      "batch_size": 123.1,
      "comp_1_size": 12.0,
      "comp_2_size": 13.0,
      "comp_3_size": 14.0,
      "recipeData": {
        "silo_23_extra_fine_weight": "4.0",
        "cs_23_fine_speed": "7.0",
        "silo_11_inflight_time": "9.0",
        "cs_12_inflight_weight": "5.0",
        "silo_23_set_weight": "1.0",
        "silo_32_inflight_time": "9.0",
        "cs_21_course_speed": "6.0",
        "cs_33_extra_fine_weight": "44.0",
        "cs_12_inflight_time": "9.0",
        "silo_21_tollerence": "10.0",
        "silo_31_tollerence": "10.0",
        "silo_32_course_speed": "6.0",
        "cs_33_fine_speed": "77.0",
        "silo_11_tollerence": "10.0",
        "cs_21_course_weight": "2.0",
        "cs_11_extra_fine_speed": "8.0",
        "cs_33_inflight_time": "99.0",
        "silo_11_extra_fine_speed": "8.0",
        "cs_13_extra_fine_speed": "8.0",
        "silo_33_inflight_weight": "5.0",
        "silo_11_extra_fine_weight": "4.0",
        "silo_23_inflight_time": "9.0",
        "cs_21_extra_fine_weight": "4.0",
        "silo_33_set_weight": "1.0",
        "cs_13_fine_speed": "7.0",
        "cs_13_tollerence": "10.0",
        "cs_23_tollerence": "10.0",
        "silo_31_fine_speed": "7.0",
        "cs_32_inflight_weight": "5.0",
        "cs_33_tollerence": "100.0",
        "cs_12_course_weight": "2.0",
        "cs_33_course_weight": "22.0",
        "silo_11_fine_speed": "7.0",
        "silo_22_course_weight": "2.0",
        "silo_21_fine_speed": "7.0",
        "silo_11_inflight_weight": "5.0",
        "cs_14_tollerence": "10.0",
        "cs_23_course_weight": "2.0",
        "cs_33_course_speed": "66.0",
        "silo_22_extra_fine_weight": "4.0",
        "silo_21_extra_fine_speed": "8.0",
        "silo_12_extra_fine_weight": "4.0",
        "cs_32_course_speed": "6.0",
        "cs_23_inflight_weight": "5.0",
        "silo_31_course_weight": "2.0",
        "silo_31_fine_weight": "3.0",
        "silo_31_inflight_weight": "5.0",
        "silo_23_course_weight": "2.0",
        "silo_11_fine_weight": "3.0",
        "silo_23_fine_speed": "7.0",
        "cs_32_course_weight": "2.0",
        "silo_31_course_speed": "6.0",
        "silo_32_fine_weight": "3.0",
        "cs_33_extra_fine_speed": "88.0",
        "cs_13_set_weight": "1.0",
        "cs_23_extra_fine_weight": "4.0",
        "silo_32_extra_fine_speed": "8.0",
        "silo_33_fine_speed": "7.0",
        "cs_21_inflight_weight": "5.0",
        "silo_33_course_speed": "6.0",
        "cs_23_set_weight": "1.0",
        "silo_33_fine_weight": "3.0",
        "silo_32_set_weight": "1.0",
        "cs_33_set_weight": "11.0",
        "silo_12_fine_weight": "3.0",
        "cs_31_inflight_time": "9.0",
        "cs_32_extra_fine_speed": "8.0",
        "cs_32_fine_speed": "7.0",
        "silo_21_extra_fine_weight": "4.0",
        "silo_31_extra_fine_speed": "8.0",
        "cs_31_extra_fine_weight": "4.0",
        "cs_11_course_weight": "2.0",
        "cs_11_extra_fine_weight": "4.0",
        "silo_23_extra_fine_speed": "8.0",
        "silo_11_course_weight": "2.0",
        "silo_32_course_weight": "2.0",
        "silo_23_course_speed": "6.0",
        "cs_31_set_weight": "1.0",
        "cs_13_course_speed": "6.0",
        "silo_21_course_speed": "6.0",
        "cs_21_set_weight": "1.0",
        "silo_21_set_weight": "1.0",
        "cs_11_set_weight": "1.0",
        "silo_12_inflight_time": "9.0",
        "cs_11_course_speed": "6.0",
        "silo_11_set_weight": "1.0",
        "silo_33_inflight_time": "9.0",
        "cs_14_fine_weight": "3.0",
        "cs_14_fine_speed": "7.0",
        "silo_22_set_weight": "1.0",
        "silo_12_extra_fine_speed": "8.0",
        "cs_13_fine_weight": "3.0",
        "cs_22_set_weight": "1.0",
        "cs_21_extra_fine_speed": "8.0",
        "cs_33_fine_weight": "33.0",
        "silo_12_set_weight": "1.0",
        "cs_11_inflight_time": "9.0",
        "cs_12_set_weight": "1.0",
        "cs_12_fine_weight": "3.0",
        "cs_13_extra_fine_weight": "4.0",
        "silo_22_inflight_weight": "5.0",
        "cs_32_inflight_time": "9.0",
        "silo_11_course_speed": "6.0",
        "cs_32_fine_weight": "3.0",
        "cs_31_fine_weight": "3.0",
        "cs_11_fine_weight": "3.0",
        "cs_31_course_weight": "2.0",
        "silo_31_set_weight": "1.0",
        "cs_32_set_weight": "1.0",
        "silo_12_inflight_weight": "5.0",
        "silo_21_fine_weight": "3.0",
        "cs_13_course_weight": "2.0",
        "silo_22_fine_weight": "3.0",
        "cs_12_tollerence": "10.0",
        "silo_21_course_weight": "2.0",
        "cs_33_inflight_weight": "55.0",
        "silo_23_fine_weight": "3.0",
        "silo_31_extra_fine_weight": "4.0",
        "cs_22_course_weight": "2.0",
        "cs_22_inflight_weight": "5.0",
        "cs_22_tollerence": "10.0",
        "cs_32_tollerence": "10.0",
        "cs_14_set_weight": "1.0",
        "silo_32_fine_speed": "7.0",
        "silo_22_fine_speed": "7.0",
        "silo_12_fine_speed": "7.0",
        "cs_23_course_speed": "6.0",
        "silo_31_inflight_time": "9.0",
        "cs_14_extra_fine_speed": "8.0",
        "silo_23_tollerence": "10.0",
        "cs_13_inflight_time": "9.0",
        "silo_33_tollerence": "10.0",
        "cs_31_fine_speed": "7.0",
        "cs_22_extra_fine_speed": "8.0",
        "cs_12_fine_speed": "7.0",
        "silo_23_inflight_weight": "5.0",
        "cs_22_fine_speed": "7.0",
        "cs_14_inflight_weight": "5.0",
        "cs_11_inflight_weight": "5.0",
        "silo_32_inflight_weight": "5.0",
        "cs_11_fine_speed": "7.0",
        "cs_31_course_speed": "6.0",
        "silo_32_extra_fine_weight": "4.0",
        "silo_33_course_weight": "2.0",
        "silo_12_course_weight": "2.0",
        "cs_12_extra_fine_speed": "8.0",
        "cs_21_fine_speed": "7.0",
        "cs_21_tollerence": "10.0",
        "cs_31_tollerence": "10.0",
        "silo_21_inflight_time": "9.0",
        "silo_33_extra_fine_weight": "4.0",
        "cs_14_inflight_time": "9.0",
        "silo_32_tollerence": "10.0",
        "cs_23_inflight_time": "9.0",
        "silo_22_tollerence": "10.0",
        "cs_23_extra_fine_speed": "8.0",
        "cs_31_inflight_weight": "5.0",
        "silo_21_inflight_weight": "5.0",
        "silo_12_tollerence": "10.0",
        "cs_22_course_speed": "6.0",
        "cs_14_extra_fine_weight": "4.0",
        "cs_12_course_speed": "6.0",
        "silo_22_course_speed": "6.0",
        "cs_31_extra_fine_speed": "8.0",
        "cs_21_inflight_time": "9.0",
        "silo_22_extra_fine_speed": "8.0",
        "cs_14_course_weight": "2.0",
        "cs_32_extra_fine_weight": "4.0",
        "cs_13_inflight_weight": "5.0",
        "cs_22_extra_fine_weight": "4.0",
        "silo_22_inflight_time": "9.0",
        "cs_12_extra_fine_weight": "4.0",
        "cs_23_fine_weight": "3.0",
        "silo_33_extra_fine_speed": "8.0",
        "cs_21_fine_weight": "3.0",
        "cs_22_inflight_time": "9.0",
        "silo_12_course_speed": "6.0",
        "cs_22_fine_weight": "3.0",
        "cs_11_tollerence": "10.0",
        "cs_14_course_speed": "6.0"
      }
    },
    {
      "recipe_name": "pritam",
      "user_name": "2",
      "recipe_machine": "R10",
      "loggingTime": "2021-04-19 12:16:28.0",
      "number_of_batches": 5,
      "recipeId": 3,
      "liquid_addition": true,
      "relative_recipe": false,
      "recipe_enable": true,
      "batch_size": 123.1,
      "comp_1_size": 12.0,
      "comp_2_size": 13.0,
      "comp_3_size": 14.0,
      "recipeData": {
        "silo_23_extra_fine_weight": "4.0",
        "cs_23_fine_speed": "7.0",
        "silo_11_inflight_time": "9.0",
        "cs_12_inflight_weight": "5.0",
        "silo_23_set_weight": "1.0",
        "silo_32_inflight_time": "9.0",
        "cs_21_course_speed": "6.0",
        "cs_33_extra_fine_weight": "44.0",
        "cs_12_inflight_time": "9.0",
        "silo_21_tollerence": "10.0",
        "silo_31_tollerence": "10.0",
        "silo_32_course_speed": "6.0",
        "cs_33_fine_speed": "77.0",
        "silo_11_tollerence": "10.0",
        "cs_21_course_weight": "2.0",
        "cs_11_extra_fine_speed": "8.0",
        "cs_33_inflight_time": "99.0",
        "silo_11_extra_fine_speed": "8.0",
        "cs_13_extra_fine_speed": "8.0",
        "silo_33_inflight_weight": "5.0",
        "silo_11_extra_fine_weight": "4.0",
        "silo_23_inflight_time": "9.0",
        "cs_21_extra_fine_weight": "4.0",
        "silo_33_set_weight": "1.0",
        "cs_13_fine_speed": "7.0",
        "cs_13_tollerence": "10.0",
        "cs_23_tollerence": "10.0",
        "silo_31_fine_speed": "7.0",
        "cs_32_inflight_weight": "5.0",
        "cs_33_tollerence": "100.0",
        "cs_12_course_weight": "2.0",
        "cs_33_course_weight": "22.0",
        "silo_11_fine_speed": "7.0",
        "silo_22_course_weight": "2.0",
        "silo_21_fine_speed": "7.0",
        "silo_11_inflight_weight": "5.0",
        "cs_14_tollerence": "10.0",
        "cs_23_course_weight": "2.0",
        "cs_33_course_speed": "66.0",
        "silo_22_extra_fine_weight": "4.0",
        "silo_21_extra_fine_speed": "8.0",
        "silo_12_extra_fine_weight": "4.0",
        "cs_32_course_speed": "6.0",
        "cs_23_inflight_weight": "5.0",
        "silo_31_course_weight": "2.0",
        "silo_31_fine_weight": "3.0",
        "silo_31_inflight_weight": "5.0",
        "silo_23_course_weight": "2.0",
        "silo_11_fine_weight": "3.0",
        "silo_23_fine_speed": "7.0",
        "cs_32_course_weight": "2.0",
        "silo_31_course_speed": "6.0",
        "silo_32_fine_weight": "3.0",
        "cs_33_extra_fine_speed": "88.0",
        "cs_13_set_weight": "1.0",
        "cs_23_extra_fine_weight": "4.0",
        "silo_32_extra_fine_speed": "8.0",
        "silo_33_fine_speed": "7.0",
        "cs_21_inflight_weight": "5.0",
        "silo_33_course_speed": "6.0",
        "cs_23_set_weight": "1.0",
        "silo_33_fine_weight": "3.0",
        "silo_32_set_weight": "1.0",
        "cs_33_set_weight": "11.0",
        "silo_12_fine_weight": "3.0",
        "cs_31_inflight_time": "9.0",
        "cs_32_extra_fine_speed": "8.0",
        "cs_32_fine_speed": "7.0",
        "silo_21_extra_fine_weight": "4.0",
        "silo_31_extra_fine_speed": "8.0",
        "cs_31_extra_fine_weight": "4.0",
        "cs_11_course_weight": "2.0",
        "cs_11_extra_fine_weight": "4.0",
        "silo_23_extra_fine_speed": "8.0",
        "silo_11_course_weight": "2.0",
        "silo_32_course_weight": "2.0",
        "silo_23_course_speed": "6.0",
        "cs_31_set_weight": "1.0",
        "cs_13_course_speed": "6.0",
        "silo_21_course_speed": "6.0",
        "cs_21_set_weight": "1.0",
        "silo_21_set_weight": "1.0",
        "cs_11_set_weight": "1.0",
        "silo_12_inflight_time": "9.0",
        "cs_11_course_speed": "6.0",
        "silo_11_set_weight": "1.0",
        "silo_33_inflight_time": "9.0",
        "cs_14_fine_weight": "3.0",
        "cs_14_fine_speed": "7.0",
        "silo_22_set_weight": "1.0",
        "silo_12_extra_fine_speed": "8.0",
        "cs_13_fine_weight": "3.0",
        "cs_22_set_weight": "1.0",
        "cs_21_extra_fine_speed": "8.0",
        "cs_33_fine_weight": "33.0",
        "silo_12_set_weight": "1.0",
        "cs_11_inflight_time": "9.0",
        "cs_12_set_weight": "1.0",
        "cs_12_fine_weight": "3.0",
        "cs_13_extra_fine_weight": "4.0",
        "silo_22_inflight_weight": "5.0",
        "cs_32_inflight_time": "9.0",
        "silo_11_course_speed": "6.0",
        "cs_32_fine_weight": "3.0",
        "cs_31_fine_weight": "3.0",
        "cs_11_fine_weight": "3.0",
        "cs_31_course_weight": "2.0",
        "silo_31_set_weight": "1.0",
        "cs_32_set_weight": "1.0",
        "silo_12_inflight_weight": "5.0",
        "silo_21_fine_weight": "3.0",
        "cs_13_course_weight": "2.0",
        "silo_22_fine_weight": "3.0",
        "cs_12_tollerence": "10.0",
        "silo_21_course_weight": "2.0",
        "cs_33_inflight_weight": "55.0",
        "silo_23_fine_weight": "3.0",
        "silo_31_extra_fine_weight": "4.0",
        "cs_22_course_weight": "2.0",
        "cs_22_inflight_weight": "5.0",
        "cs_22_tollerence": "10.0",
        "cs_32_tollerence": "10.0",
        "cs_14_set_weight": "1.0",
        "silo_32_fine_speed": "7.0",
        "silo_22_fine_speed": "7.0",
        "silo_12_fine_speed": "7.0",
        "cs_23_course_speed": "6.0",
        "silo_31_inflight_time": "9.0",
        "cs_14_extra_fine_speed": "8.0",
        "silo_23_tollerence": "10.0",
        "cs_13_inflight_time": "9.0",
        "silo_33_tollerence": "10.0",
        "cs_31_fine_speed": "7.0",
        "cs_22_extra_fine_speed": "8.0",
        "cs_12_fine_speed": "7.0",
        "silo_23_inflight_weight": "5.0",
        "cs_22_fine_speed": "7.0",
        "cs_14_inflight_weight": "5.0",
        "cs_11_inflight_weight": "5.0",
        "silo_32_inflight_weight": "5.0",
        "cs_11_fine_speed": "7.0",
        "cs_31_course_speed": "6.0",
        "silo_32_extra_fine_weight": "4.0",
        "silo_33_course_weight": "2.0",
        "silo_12_course_weight": "2.0",
        "cs_12_extra_fine_speed": "8.0",
        "cs_21_fine_speed": "7.0",
        "cs_21_tollerence": "10.0",
        "cs_31_tollerence": "10.0",
        "silo_21_inflight_time": "9.0",
        "silo_33_extra_fine_weight": "4.0",
        "cs_14_inflight_time": "9.0",
        "silo_32_tollerence": "10.0",
        "cs_23_inflight_time": "9.0",
        "silo_22_tollerence": "10.0",
        "cs_23_extra_fine_speed": "8.0",
        "cs_31_inflight_weight": "5.0",
        "silo_21_inflight_weight": "5.0",
        "silo_12_tollerence": "10.0",
        "cs_22_course_speed": "6.0",
        "cs_14_extra_fine_weight": "4.0",
        "cs_12_course_speed": "6.0",
        "silo_22_course_speed": "6.0",
        "cs_31_extra_fine_speed": "8.0",
        "cs_21_inflight_time": "9.0",
        "silo_22_extra_fine_speed": "8.0",
        "cs_14_course_weight": "2.0",
        "cs_32_extra_fine_weight": "4.0",
        "cs_13_inflight_weight": "5.0",
        "cs_22_extra_fine_weight": "4.0",
        "silo_22_inflight_time": "9.0",
        "cs_12_extra_fine_weight": "4.0",
        "cs_23_fine_weight": "3.0",
        "silo_33_extra_fine_speed": "8.0",
        "cs_21_fine_weight": "3.0",
        "cs_22_inflight_time": "9.0",
        "silo_12_course_speed": "6.0",
        "cs_22_fine_weight": "3.0",
        "cs_11_tollerence": "10.0",
        "cs_14_course_speed": "6.0"
      }
    }
  ];

  datasetLength: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(private _intl: MatPaginatorIntl, private router: Router,
    private storageServiceService: StorageServiceService, private dialog: MatDialog,
    private configurationService: ConfigurationService) {
    this.username = this.storageServiceService.getStorageItem(DATA.USERNAME);
    this.getAllRecipe();
  }

  createFilter(): (contact: any, filter: string) => boolean {

    let filterFunction = function (contact, filter): boolean {
      console.log(contact, "<<======>>", filter);
      return contact.recipe_name.toLowerCase().includes(filter);
    }
    return filterFunction;
  }

  clearSearch() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngOnInit() {
    // this.dataSource.filterPredicate = (data: any, filter: string) => {
    //   console.log(data, "<<======>>", filter);
    //   // return data['recipe_name'] == filter;
    //   return data['recipe_name'].trim().toLowerCase().includes(filter)
    // };
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
      err => this.setTableData(this.tempData)//this.handleError(err)
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
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data, filter) => {
          return  data['recipe_name'].toLowerCase().includes(filter);
      };
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
