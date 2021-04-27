import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../configuration/configuration.service';
import { DATA } from '../core/data.enum';
import { StorageServiceService } from '../core/services/auth/storage-service.service';
import { GlobalErrorHandler } from '../core/services/error-handler';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  errMessage: string;
  activeStepIndex: any = 1;
  submitted: boolean = false;
  loading: boolean = false;
  masterForm: FormGroup;
  username: string;
  id!: string;
  isAddMode!: boolean;
  data: any

  match: string
  constructor(
    private route: ActivatedRoute, private router: Router,
    private configurationService: ConfigurationService, private error: GlobalErrorHandler,
    private storageServiceService: StorageServiceService) {

    this.username = this.storageServiceService.getStorageItem(DATA.USERNAME);
    this.createMasterForm();
  }


  ValidateRecipeName(control: AbstractControl) {
    if (control.value.length > 20) {
      return { invalidName: true };
    }
    return null;
  }

  createMasterForm() {
    this.masterForm = new FormGroup({
      recipe_name: new FormControl('', [Validators.required, this.ValidateRecipeName]),
      liquid_addition: new FormControl(false),
      recipe_enable: new FormControl(false),
      // relative_recipe: new FormControl(true),
      userDetails: new FormGroup({
        silo_11_set_weight: this.formControl(),//new FormControl('', [Validators.required, Validators.pattern(/^[.\d]+$/), this.silo_11_set_weight]),  // 
        silo_11_course_weight: this.formControl(),
        silo_11_fine_weight: this.formControl(),
        silo_11_extra_fine_weight: this.formControl(),
        silo_11_inflight_weight: this.formControl(),
        silo_11_course_speed: this.formControl(),
        silo_11_fine_speed: this.formControl(),
        silo_11_extra_fine_speed: this.formControl(),
        silo_11_inflight_time: this.formControl(),
        silo_11_tollerence: this.formControl(),

        silo_12_set_weight: this.formControl(),
        silo_12_course_weight: this.formControl(),
        silo_12_fine_weight: this.formControl(),
        silo_12_extra_fine_weight: this.formControl(),
        silo_12_inflight_weight: this.formControl(),
        silo_12_course_speed: this.formControl(),
        silo_12_fine_speed: this.formControl(),
        silo_12_extra_fine_speed: this.formControl(),
        silo_12_inflight_time: this.formControl(),
        silo_12_tollerence: this.formControl(),

        cs_11_set_weight: this.formControl(),
        cs_11_course_weight: this.formControl(),
        cs_11_fine_weight: this.formControl(),
        cs_11_extra_fine_weight: this.formControl(),
        cs_11_inflight_weight: this.formControl(),
        cs_11_course_speed: this.formControl(),
        cs_11_fine_speed: this.formControl(),
        cs_11_extra_fine_speed: this.formControl(),
        cs_11_inflight_time: this.formControl(),
        cs_11_tollerence: this.formControl(),

        cs_12_set_weight: this.formControl(),
        cs_12_course_weight: this.formControl(),
        cs_12_fine_weight: this.formControl(),
        cs_12_extra_fine_weight: this.formControl(),
        cs_12_inflight_weight: this.formControl(),
        cs_12_course_speed: this.formControl(),
        cs_12_fine_speed: this.formControl(),
        cs_12_extra_fine_speed: this.formControl(),
        cs_12_inflight_time: this.formControl(),
        cs_12_tollerence: this.formControl(),

        cs_13_set_weight: this.formControl(),
        cs_13_course_weight: this.formControl(),
        cs_13_fine_weight: this.formControl(),
        cs_13_extra_fine_weight: this.formControl(),
        cs_13_inflight_weight: this.formControl(),
        cs_13_course_speed: this.formControl(),
        cs_13_fine_speed: this.formControl(),
        cs_13_extra_fine_speed: this.formControl(),
        cs_13_inflight_time: this.formControl(),
        cs_13_tollerence: this.formControl(),
        cs_14_set_weight: this.formControl(),
        cs_14_course_weight: this.formControl(),
        cs_14_fine_weight: this.formControl(),
        cs_14_extra_fine_weight: this.formControl(),
        cs_14_inflight_weight: this.formControl(),
        cs_14_course_speed: this.formControl(),
        cs_14_fine_speed: this.formControl(),
        cs_14_extra_fine_speed: this.formControl(),
        cs_14_inflight_time: this.formControl(),
        cs_14_tollerence: this.formControl(),
      }),
      contactDetails: new FormGroup({
        silo_21_set_weight: this.formControl(),
        silo_21_course_weight: this.formControl(),
        silo_21_fine_weight: this.formControl(),
        silo_21_extra_fine_weight: this.formControl(),
        silo_21_inflight_weight: this.formControl(),
        silo_21_course_speed: this.formControl(),
        silo_21_fine_speed: this.formControl(),
        silo_21_extra_fine_speed: this.formControl(),
        silo_21_inflight_time: this.formControl(),
        silo_21_tollerence: this.formControl(),

        silo_22_set_weight: this.formControl(),
        silo_22_course_weight: this.formControl(),
        silo_22_fine_weight: this.formControl(),
        silo_22_extra_fine_weight: this.formControl(),
        silo_22_inflight_weight: this.formControl(),
        silo_22_course_speed: this.formControl(),
        silo_22_fine_speed: this.formControl(),
        silo_22_extra_fine_speed: this.formControl(),
        silo_22_inflight_time: this.formControl(),
        silo_22_tollerence: this.formControl(),

        silo_23_set_weight: this.formControl(),
        silo_23_course_weight: this.formControl(),
        silo_23_fine_weight: this.formControl(),
        silo_23_extra_fine_weight: this.formControl(),
        silo_23_inflight_weight: this.formControl(),
        silo_23_course_speed: this.formControl(),
        silo_23_fine_speed: this.formControl(),
        silo_23_extra_fine_speed: this.formControl(),
        silo_23_inflight_time: this.formControl(),
        silo_23_tollerence: this.formControl(),

        cs_21_set_weight: this.formControl(),
        cs_21_course_weight: this.formControl(),
        cs_21_fine_weight: this.formControl(),
        cs_21_extra_fine_weight: this.formControl(),
        cs_21_inflight_weight: this.formControl(),
        cs_21_course_speed: this.formControl(),
        cs_21_fine_speed: this.formControl(),
        cs_21_extra_fine_speed: this.formControl(),
        cs_21_inflight_time: this.formControl(),
        cs_21_tollerence: this.formControl(),

        cs_22_set_weight: this.formControl(),
        cs_22_course_weight: this.formControl(),
        cs_22_fine_weight: this.formControl(),
        cs_22_extra_fine_weight: this.formControl(),
        cs_22_inflight_weight: this.formControl(),
        cs_22_course_speed: this.formControl(),
        cs_22_fine_speed: this.formControl(),
        cs_22_extra_fine_speed: this.formControl(),
        cs_22_inflight_time: this.formControl(),
        cs_22_tollerence: this.formControl(),

        cs_23_set_weight: this.formControl(),
        cs_23_course_weight: this.formControl(),
        cs_23_fine_weight: this.formControl(),
        cs_23_extra_fine_weight: this.formControl(),
        cs_23_inflight_weight: this.formControl(),
        cs_23_course_speed: this.formControl(),
        cs_23_fine_speed: this.formControl(),
        cs_23_extra_fine_speed: this.formControl(),
        cs_23_inflight_time: this.formControl(),
        cs_23_tollerence: this.formControl(),
      }),
      personalDetails: new FormGroup({
        silo_31_set_weight: this.formControl(),
        silo_31_course_weight: this.formControl(),
        silo_31_fine_weight: this.formControl(),
        silo_31_extra_fine_weight: this.formControl(),
        silo_31_inflight_weight: this.formControl(),
        silo_31_course_speed: this.formControl(),
        silo_31_fine_speed: this.formControl(),
        silo_31_extra_fine_speed: this.formControl(),
        silo_31_inflight_time: this.formControl(),
        silo_31_tollerence: this.formControl(),

        silo_32_set_weight: this.formControl(),
        silo_32_course_weight: this.formControl(),
        silo_32_fine_weight: this.formControl(),
        silo_32_extra_fine_weight: this.formControl(),
        silo_32_inflight_weight: this.formControl(),
        silo_32_course_speed: this.formControl(),
        silo_32_fine_speed: this.formControl(),
        silo_32_extra_fine_speed: this.formControl(),
        silo_32_inflight_time: this.formControl(),
        silo_32_tollerence: this.formControl(),

        silo_33_set_weight: this.formControl(),
        silo_33_course_weight: this.formControl(),
        silo_33_fine_weight: this.formControl(),
        silo_33_extra_fine_weight: this.formControl(),
        silo_33_inflight_weight: this.formControl(),
        silo_33_course_speed: this.formControl(),
        silo_33_fine_speed: this.formControl(),
        silo_33_extra_fine_speed: this.formControl(),
        silo_33_inflight_time: this.formControl(),
        silo_33_tollerence: this.formControl(),

        cs_31_set_weight: this.formControl(),
        cs_31_course_weight: this.formControl(),
        cs_31_fine_weight: this.formControl(),
        cs_31_extra_fine_weight: this.formControl(),
        cs_31_inflight_weight: this.formControl(),
        cs_31_course_speed: this.formControl(),
        cs_31_fine_speed: this.formControl(),
        cs_31_extra_fine_speed: this.formControl(),
        cs_31_inflight_time: this.formControl(),
        cs_31_tollerence: this.formControl(),

        cs_32_set_weight: this.formControl(),
        cs_32_course_weight: this.formControl(),
        cs_32_fine_weight: this.formControl(),
        cs_32_extra_fine_weight: this.formControl(),
        cs_32_inflight_weight: this.formControl(),
        cs_32_course_speed: this.formControl(),
        cs_32_fine_speed: this.formControl(),
        cs_32_extra_fine_speed: this.formControl(),
        cs_32_inflight_time: this.formControl(),
        cs_32_tollerence: this.formControl(),

        cs_33_set_weight: this.formControl(),
        cs_33_course_weight: this.formControl(),
        cs_33_fine_weight: this.formControl(),
        cs_33_extra_fine_weight: this.formControl(),
        cs_33_inflight_weight: this.formControl(),
        cs_33_course_speed: this.formControl(),
        cs_33_fine_speed: this.formControl(),
        cs_33_extra_fine_speed: this.formControl(),
        cs_33_inflight_time: this.formControl(),
        cs_33_tollerence: this.formControl(),
      }),
    });
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.getRecipeById(this.id);
    }


    const userDetails = this.masterForm.controls['userDetails'];
    const contactDetails = this.masterForm.controls['contactDetails'];
    const personalDetails = this.masterForm.controls['personalDetails'];
    userDetails.get("silo_11_set_weight").disable()
    userDetails.get("silo_12_set_weight").disable()
    userDetails.get("cs_11_set_weight").disable()
    userDetails.get("cs_12_set_weight").disable()
    userDetails.get("cs_13_set_weight").disable()
    userDetails.get("cs_14_set_weight").disable()

    contactDetails.get("silo_21_set_weight").disable()
    contactDetails.get("silo_22_set_weight").disable()
    contactDetails.get("silo_23_set_weight").disable()
    contactDetails.get("cs_21_set_weight").disable()
    contactDetails.get("cs_22_set_weight").disable()
    contactDetails.get("cs_23_set_weight").disable()

    personalDetails.get("silo_31_set_weight").disable()
    personalDetails.get("silo_32_set_weight").disable()
    personalDetails.get("silo_33_set_weight").disable()
    personalDetails.get("cs_31_set_weight").disable()
    personalDetails.get("cs_32_set_weight").disable()
    personalDetails.get("cs_33_set_weight").disable()

    userDetails.get("silo_11_course_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_inflight_weight").value);

      userDetails.get("silo_11_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_11_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_inflight_weight").value);

      userDetails.get("silo_11_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_11_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_inflight_weight").value);

      userDetails.get("silo_11_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_11_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_11_fine_weight").value);

      userDetails.get("silo_11_set_weight").setValue(totalValue)
    })

    /////////
    userDetails.get("silo_12_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_inflight_weight").value);

      userDetails.get("silo_12_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_12_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_inflight_weight").value);

      userDetails.get("silo_12_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_12_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_inflight_weight").value);

      userDetails.get("silo_12_set_weight").setValue(totalValue)
    })

    userDetails.get("silo_12_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("silo_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("silo_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("silo_12_inflight_weight").value);

      userDetails.get("silo_12_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_11_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_course_weight").value);

      userDetails.get("cs_11_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_11_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_course_weight").value);

      userDetails.get("cs_11_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_11_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_inflight_weight").value);

      userDetails.get("cs_11_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_11_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_11_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_11_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_11_inflight_weight").value);

      userDetails.get("cs_11_set_weight").setValue(totalValue)
    })
    userDetails.get("cs_12_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_fine_weight").value);

      userDetails.get("cs_12_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_12_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_fine_weight").value);

      userDetails.get("cs_12_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_12_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_fine_weight").value);

      userDetails.get("cs_12_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_12_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_12_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_12_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_12_fine_weight").value);

      userDetails.get("cs_12_set_weight").setValue(totalValue)
    })
    userDetails.get("cs_13_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_13_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_course_weight").value);

      userDetails.get("cs_13_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_13_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_13_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_course_weight").value);

      userDetails.get("cs_13_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_13_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_13_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_extra_fine_weight").value);

      userDetails.get("cs_13_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_13_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_13_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_course_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_13_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_13_extra_fine_weight").value);

      userDetails.get("cs_13_set_weight").setValue(totalValue)
    })


    userDetails.get("cs_14_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_14_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_course_weight").value);
      userDetails.get("cs_14_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_14_fine_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_14_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_course_weight").value);
      userDetails.get("cs_14_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_14_extra_fine_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_14_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_course_weight").value);
      userDetails.get("cs_14_set_weight").setValue(totalValue)
    })

    userDetails.get("cs_14_inflight_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(userDetails.get("cs_14_inflight_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_inflight_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_extra_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_fine_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_fine_weight").value);

      if (!isNaN(parseFloat(userDetails.get("cs_14_course_weight").value)))
        totalValue = totalValue + parseFloat(userDetails.get("cs_14_course_weight").value);
      userDetails.get("cs_14_set_weight").setValue(totalValue)
    })
    ///////////////////////////////////////
    /////////////////////////////////////////
    contactDetails.get("silo_21_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_course_weight").value);
      contactDetails.get("silo_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_21_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_course_weight").value);
      contactDetails.get("silo_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_21_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_course_weight").value);
      contactDetails.get("silo_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_21_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_21_course_weight").value);
      contactDetails.get("silo_21_set_weight").setValue(totalValue)
    })


    contactDetails.get("silo_22_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_inflight_weight").value);

      contactDetails.get("silo_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_22_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_inflight_weight").value);

      contactDetails.get("silo_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_22_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_inflight_weight").value);

      contactDetails.get("silo_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_22_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_22_inflight_weight").value);

      contactDetails.get("silo_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_23_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_inflight_weight").value);

      contactDetails.get("silo_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_23_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_inflight_weight").value);

      contactDetails.get("silo_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_23_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_inflight_weight").value);

      contactDetails.get("silo_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("silo_23_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("silo_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("silo_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("silo_23_inflight_weight").value);

      contactDetails.get("silo_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_21_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_course_weight").value);

      contactDetails.get("cs_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_21_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_course_weight").value);

      contactDetails.get("cs_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_21_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_course_weight").value);

      contactDetails.get("cs_21_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_21_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_21_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_21_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_21_course_weight").value);

      contactDetails.get("cs_21_set_weight").setValue(totalValue)
    })
    contactDetails.get("cs_22_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_inflight_weight").value);

      contactDetails.get("cs_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_22_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_inflight_weight").value);

      contactDetails.get("cs_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_22_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_inflight_weight").value);

      contactDetails.get("cs_22_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_22_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_22_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_course_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_22_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_22_inflight_weight").value);

      contactDetails.get("cs_22_set_weight").setValue(totalValue)
    })
    contactDetails.get("cs_23_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_course_weight").value);

      contactDetails.get("cs_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_23_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_course_weight").value);

      contactDetails.get("cs_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_23_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_course_weight").value);

      contactDetails.get("cs_23_set_weight").setValue(totalValue)
    })

    contactDetails.get("cs_23_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(contactDetails.get("cs_23_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_extra_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_fine_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_fine_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_inflight_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_inflight_weight").value);

      if (!isNaN(parseFloat(contactDetails.get("cs_23_course_weight").value)))
        totalValue = totalValue + parseFloat(contactDetails.get("cs_23_course_weight").value);

      contactDetails.get("cs_23_set_weight").setValue(totalValue)
    })
    ///////////////////////////////////////////
    //////////////////////////////////////////
    personalDetails.get("silo_31_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_inflight_weight").value);

      personalDetails.get("silo_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_31_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_inflight_weight").value);

      personalDetails.get("silo_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_31_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_inflight_weight").value);

      personalDetails.get("silo_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_31_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_31_inflight_weight").value);

      personalDetails.get("silo_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_32_course_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_course_weight").value);

      personalDetails.get("silo_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_32_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_course_weight").value);

      personalDetails.get("silo_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_32_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_course_weight").value);

      personalDetails.get("silo_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_32_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_32_course_weight").value);

      personalDetails.get("silo_32_set_weight").setValue(totalValue)
    })


    personalDetails.get("silo_33_course_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_fine_weight").value);

      personalDetails.get("silo_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_33_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_fine_weight").value);

      personalDetails.get("silo_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_33_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_fine_weight").value);

      personalDetails.get("silo_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("silo_33_inflight_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("silo_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("silo_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("silo_33_fine_weight").value);

      personalDetails.get("silo_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_31_course_weight").valueChanges.subscribe(selectedValue => {


      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_course_weight").value);

      personalDetails.get("cs_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_31_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_fine_weight").value);

      personalDetails.get("cs_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_31_extra_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_course_weight").value);

      personalDetails.get("cs_31_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_31_inflight_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_31_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_31_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_31_course_weight").value);

      personalDetails.get("cs_31_set_weight").setValue(totalValue)
    })


    personalDetails.get("cs_32_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_inflight_weight").value);

      personalDetails.get("cs_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_32_fine_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_inflight_weight").value);

      personalDetails.get("cs_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_32_extra_fine_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_inflight_weight").value);

      personalDetails.get("cs_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_32_inflight_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_32_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_32_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_32_inflight_weight").value);

      personalDetails.get("cs_32_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_33_course_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_course_weight").value);

      personalDetails.get("cs_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_33_fine_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_course_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_inflight_weight").value);

      personalDetails.get("cs_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_33_extra_fine_weight").valueChanges.subscribe(selectedValue => {

      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_course_weight").value);

      personalDetails.get("cs_33_set_weight").setValue(totalValue)
    })

    personalDetails.get("cs_33_inflight_weight").valueChanges.subscribe(selectedValue => {
      let totalValue = 0;
      if (!isNaN(parseFloat(personalDetails.get("cs_33_extra_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_extra_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_fine_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_fine_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_inflight_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_inflight_weight").value);

      if (!isNaN(parseFloat(personalDetails.get("cs_33_course_weight").value)))
        totalValue = totalValue + parseFloat(personalDetails.get("cs_33_course_weight").value);

      personalDetails.get("cs_33_set_weight").setValue(totalValue)
    })

  }


  getRecipeById(recipeById) {
    this.configurationService.getRecipeById(recipeById).subscribe((resp) => {
      this.data = resp;
      this.doMapping(this.data);
    })
  }

  doMapping(inputData) {

    const masterFormMapping = {
      recipe_name: inputData.recipe_name,
      liquid_addition: inputData.liquid_addition,
      recipe_enable: inputData.recipe_enable,
      // relative_recipe: inputData.relative_recipe,
      userDetails: {
        silo_11_set_weight: inputData['recipeData'].silo_11_set_weight,
        silo_11_course_weight: inputData['recipeData'].silo_11_course_weight,
        silo_11_fine_weight: inputData['recipeData'].silo_11_fine_weight,
        silo_11_extra_fine_weight: inputData['recipeData'].silo_11_extra_fine_weight,
        silo_11_inflight_weight: inputData['recipeData'].silo_11_inflight_weight,
        silo_11_course_speed: inputData['recipeData'].silo_11_course_speed,
        silo_11_fine_speed: inputData['recipeData'].silo_11_fine_speed,
        silo_11_extra_fine_speed: inputData['recipeData'].silo_11_extra_fine_speed,
        silo_11_inflight_time: inputData['recipeData'].silo_11_inflight_time,
        silo_11_tollerence: inputData['recipeData'].silo_11_tollerence,

        silo_12_set_weight: inputData['recipeData'].silo_12_set_weight,
        silo_12_course_weight: inputData['recipeData'].silo_12_course_weight,
        silo_12_fine_weight: inputData['recipeData'].silo_12_fine_weight,
        silo_12_extra_fine_weight: inputData['recipeData'].silo_12_extra_fine_weight,
        silo_12_inflight_weight: inputData['recipeData'].silo_12_inflight_weight,
        silo_12_course_speed: inputData['recipeData'].silo_12_course_speed,
        silo_12_fine_speed: inputData['recipeData'].silo_12_fine_speed,
        silo_12_extra_fine_speed: inputData['recipeData'].silo_12_extra_fine_speed,
        silo_12_inflight_time: inputData['recipeData'].silo_12_inflight_time,
        silo_12_tollerence: inputData['recipeData'].silo_12_tollerence,

        cs_11_set_weight: inputData['recipeData'].cs_11_set_weight,
        cs_11_course_weight: inputData['recipeData'].cs_11_course_weight,
        cs_11_fine_weight: inputData['recipeData'].cs_11_fine_weight,
        cs_11_extra_fine_weight: inputData['recipeData'].cs_11_extra_fine_weight,
        cs_11_inflight_weight: inputData['recipeData'].cs_11_inflight_weight,
        cs_11_course_speed: inputData['recipeData'].cs_11_course_speed,
        cs_11_fine_speed: inputData['recipeData'].cs_11_fine_speed,
        cs_11_extra_fine_speed: inputData['recipeData'].cs_11_extra_fine_speed,
        cs_11_inflight_time: inputData['recipeData'].cs_11_inflight_time,
        cs_11_tollerence: inputData['recipeData'].cs_11_tollerence,

        cs_12_set_weight: inputData['recipeData'].cs_12_set_weight,
        cs_12_course_weight: inputData['recipeData'].cs_12_course_weight,
        cs_12_fine_weight: inputData['recipeData'].cs_12_fine_weight,
        cs_12_extra_fine_weight: inputData['recipeData'].cs_12_extra_fine_weight,
        cs_12_inflight_weight: inputData['recipeData'].cs_12_inflight_weight,
        cs_12_course_speed: inputData['recipeData'].cs_12_course_speed,
        cs_12_fine_speed: inputData['recipeData'].cs_12_fine_speed,
        cs_12_extra_fine_speed: inputData['recipeData'].cs_12_extra_fine_speed,
        cs_12_inflight_time: inputData['recipeData'].cs_12_inflight_time,
        cs_12_tollerence: inputData['recipeData'].cs_12_tollerence,

        cs_13_set_weight: inputData['recipeData'].cs_13_set_weight,
        cs_13_course_weight: inputData['recipeData'].cs_13_course_weight,
        cs_13_fine_weight: inputData['recipeData'].cs_13_fine_weight,
        cs_13_extra_fine_weight: inputData['recipeData'].cs_13_extra_fine_weight,
        cs_13_inflight_weight: inputData['recipeData'].cs_13_inflight_weight,
        cs_13_course_speed: inputData['recipeData'].cs_13_course_speed,
        cs_13_fine_speed: inputData['recipeData'].cs_13_fine_speed,
        cs_13_extra_fine_speed: inputData['recipeData'].cs_13_extra_fine_speed,
        cs_13_inflight_time: inputData['recipeData'].cs_13_inflight_time,
        cs_13_tollerence: inputData['recipeData'].cs_13_tollerence,

        cs_14_set_weight: inputData['recipeData'].cs_14_set_weight,
        cs_14_course_weight: inputData['recipeData'].cs_14_course_weight,
        cs_14_fine_weight: inputData['recipeData'].cs_14_fine_weight,
        cs_14_extra_fine_weight: inputData['recipeData'].cs_14_extra_fine_weight,
        cs_14_inflight_weight: inputData['recipeData'].cs_14_inflight_weight,
        cs_14_course_speed: inputData['recipeData'].cs_14_course_speed,
        cs_14_fine_speed: inputData['recipeData'].cs_14_fine_speed,
        cs_14_extra_fine_speed: inputData['recipeData'].cs_14_extra_fine_speed,
        cs_14_inflight_time: inputData['recipeData'].cs_14_inflight_time,
        cs_14_tollerence: inputData['recipeData'].cs_14_tollerence,
      },
      contactDetails: {
        silo_21_set_weight: inputData['recipeData'].silo_21_set_weight,
        silo_21_course_weight: inputData['recipeData'].silo_21_course_weight,
        silo_21_fine_weight: inputData['recipeData'].silo_21_fine_weight,
        silo_21_extra_fine_weight: inputData['recipeData'].silo_21_extra_fine_weight,
        silo_21_inflight_weight: inputData['recipeData'].silo_21_inflight_weight,
        silo_21_course_speed: inputData['recipeData'].silo_21_course_speed,
        silo_21_fine_speed: inputData['recipeData'].silo_21_fine_speed,
        silo_21_extra_fine_speed: inputData['recipeData'].silo_21_extra_fine_speed,
        silo_21_inflight_time: inputData['recipeData'].silo_21_inflight_time,
        silo_21_tollerence: inputData['recipeData'].silo_21_tollerence,

        silo_22_set_weight: inputData['recipeData'].silo_22_set_weight,
        silo_22_course_weight: inputData['recipeData'].silo_22_course_weight,
        silo_22_fine_weight: inputData['recipeData'].silo_22_fine_weight,
        silo_22_extra_fine_weight: inputData['recipeData'].silo_22_extra_fine_weight,
        silo_22_inflight_weight: inputData['recipeData'].silo_22_inflight_weight,
        silo_22_course_speed: inputData['recipeData'].silo_22_course_speed,
        silo_22_fine_speed: inputData['recipeData'].silo_22_fine_speed,
        silo_22_extra_fine_speed: inputData['recipeData'].silo_22_extra_fine_speed,
        silo_22_inflight_time: inputData['recipeData'].silo_22_inflight_time,
        silo_22_tollerence: inputData['recipeData'].silo_22_tollerence,

        silo_23_set_weight: inputData['recipeData'].silo_23_set_weight,
        silo_23_course_weight: inputData['recipeData'].silo_23_course_weight,
        silo_23_fine_weight: inputData['recipeData'].silo_23_fine_weight,
        silo_23_extra_fine_weight: inputData['recipeData'].silo_23_extra_fine_weight,
        silo_23_inflight_weight: inputData['recipeData'].silo_23_inflight_weight,
        silo_23_course_speed: inputData['recipeData'].silo_23_course_speed,
        silo_23_fine_speed: inputData['recipeData'].silo_23_fine_speed,
        silo_23_extra_fine_speed: inputData['recipeData'].silo_23_extra_fine_speed,
        silo_23_inflight_time: inputData['recipeData'].silo_23_inflight_time,
        silo_23_tollerence: inputData['recipeData'].silo_23_tollerence,

        cs_21_set_weight: inputData['recipeData'].cs_21_set_weight,
        cs_21_course_weight: inputData['recipeData'].cs_21_course_weight,
        cs_21_fine_weight: inputData['recipeData'].cs_21_fine_weight,
        cs_21_extra_fine_weight: inputData['recipeData'].cs_21_extra_fine_weight,
        cs_21_inflight_weight: inputData['recipeData'].cs_21_inflight_weight,
        cs_21_course_speed: inputData['recipeData'].cs_21_course_speed,
        cs_21_fine_speed: inputData['recipeData'].cs_21_fine_speed,
        cs_21_extra_fine_speed: inputData['recipeData'].cs_21_extra_fine_speed,
        cs_21_inflight_time: inputData['recipeData'].cs_21_inflight_time,
        cs_21_tollerence: inputData['recipeData'].cs_21_tollerence,

        cs_22_set_weight: inputData['recipeData'].cs_22_set_weight,
        cs_22_course_weight: inputData['recipeData'].cs_22_course_weight,
        cs_22_fine_weight: inputData['recipeData'].cs_22_fine_weight,
        cs_22_extra_fine_weight: inputData['recipeData'].cs_22_extra_fine_weight,
        cs_22_inflight_weight: inputData['recipeData'].cs_22_inflight_weight,
        cs_22_course_speed: inputData['recipeData'].cs_22_course_speed,
        cs_22_fine_speed: inputData['recipeData'].cs_22_fine_speed,
        cs_22_extra_fine_speed: inputData['recipeData'].cs_22_extra_fine_speed,
        cs_22_inflight_time: inputData['recipeData'].cs_22_inflight_time,
        cs_22_tollerence: inputData['recipeData'].cs_22_tollerence,

        cs_23_set_weight: inputData['recipeData'].cs_23_set_weight,
        cs_23_course_weight: inputData['recipeData'].cs_23_course_weight,
        cs_23_fine_weight: inputData['recipeData'].cs_23_fine_weight,
        cs_23_extra_fine_weight: inputData['recipeData'].cs_23_extra_fine_weight,
        cs_23_inflight_weight: inputData['recipeData'].cs_23_inflight_weight,
        cs_23_course_speed: inputData['recipeData'].cs_23_course_speed,
        cs_23_fine_speed: inputData['recipeData'].cs_23_fine_speed,
        cs_23_extra_fine_speed: inputData['recipeData'].cs_23_extra_fine_speed,
        cs_23_inflight_time: inputData['recipeData'].cs_23_inflight_time,
        cs_23_tollerence: inputData['recipeData'].cs_23_tollerence,
      },
      personalDetails: {
        silo_31_set_weight: inputData['recipeData'].silo_31_set_weight,
        silo_31_course_weight: inputData['recipeData'].silo_31_course_weight,
        silo_31_fine_weight: inputData['recipeData'].silo_31_fine_weight,
        silo_31_extra_fine_weight: inputData['recipeData'].silo_31_extra_fine_weight,
        silo_31_inflight_weight: inputData['recipeData'].silo_31_inflight_weight,
        silo_31_course_speed: inputData['recipeData'].silo_31_course_speed,
        silo_31_fine_speed: inputData['recipeData'].silo_31_fine_speed,
        silo_31_extra_fine_speed: inputData['recipeData'].silo_31_extra_fine_speed,
        silo_31_inflight_time: inputData['recipeData'].silo_31_inflight_time,
        silo_31_tollerence: inputData['recipeData'].silo_31_tollerence,

        silo_32_set_weight: inputData['recipeData'].silo_32_set_weight,
        silo_32_course_weight: inputData['recipeData'].silo_32_course_weight,
        silo_32_fine_weight: inputData['recipeData'].silo_32_fine_weight,
        silo_32_extra_fine_weight: inputData['recipeData'].silo_32_extra_fine_weight,
        silo_32_inflight_weight: inputData['recipeData'].silo_32_inflight_weight,
        silo_32_course_speed: inputData['recipeData'].silo_32_course_speed,
        silo_32_fine_speed: inputData['recipeData'].silo_32_fine_speed,
        silo_32_extra_fine_speed: inputData['recipeData'].silo_32_extra_fine_speed,
        silo_32_inflight_time: inputData['recipeData'].silo_32_inflight_time,
        silo_32_tollerence: inputData['recipeData'].silo_32_tollerence,

        silo_33_set_weight: inputData['recipeData'].silo_33_set_weight,
        silo_33_course_weight: inputData['recipeData'].silo_33_course_weight,
        silo_33_fine_weight: inputData['recipeData'].silo_33_fine_weight,
        silo_33_extra_fine_weight: inputData['recipeData'].silo_33_extra_fine_weight,
        silo_33_inflight_weight: inputData['recipeData'].silo_33_inflight_weight,
        silo_33_course_speed: inputData['recipeData'].silo_33_course_speed,
        silo_33_fine_speed: inputData['recipeData'].silo_33_fine_speed,
        silo_33_extra_fine_speed: inputData['recipeData'].silo_33_extra_fine_speed,
        silo_33_inflight_time: inputData['recipeData'].silo_33_inflight_time,
        silo_33_tollerence: inputData['recipeData'].silo_33_tollerence,

        cs_31_set_weight: inputData['recipeData'].cs_31_set_weight,
        cs_31_course_weight: inputData['recipeData'].cs_31_course_weight,
        cs_31_fine_weight: inputData['recipeData'].cs_31_fine_weight,
        cs_31_extra_fine_weight: inputData['recipeData'].cs_31_extra_fine_weight,
        cs_31_inflight_weight: inputData['recipeData'].cs_31_inflight_weight,
        cs_31_course_speed: inputData['recipeData'].cs_31_course_speed,
        cs_31_fine_speed: inputData['recipeData'].cs_31_fine_speed,
        cs_31_extra_fine_speed: inputData['recipeData'].cs_31_extra_fine_speed,
        cs_31_inflight_time: inputData['recipeData'].cs_31_inflight_time,
        cs_31_tollerence: inputData['recipeData'].cs_31_tollerence,

        cs_32_set_weight: inputData['recipeData'].cs_32_set_weight,
        cs_32_course_weight: inputData['recipeData'].cs_32_course_weight,
        cs_32_fine_weight: inputData['recipeData'].cs_32_fine_weight,
        cs_32_extra_fine_weight: inputData['recipeData'].cs_32_extra_fine_weight,
        cs_32_inflight_weight: inputData['recipeData'].cs_32_inflight_weight,
        cs_32_course_speed: inputData['recipeData'].cs_32_course_speed,
        cs_32_fine_speed: inputData['recipeData'].cs_32_fine_speed,
        cs_32_extra_fine_speed: inputData['recipeData'].cs_32_extra_fine_speed,
        cs_32_inflight_time: inputData['recipeData'].cs_32_inflight_time,
        cs_32_tollerence: inputData['recipeData'].cs_32_tollerence,

        cs_33_set_weight: inputData['recipeData'].cs_33_set_weight,
        cs_33_course_weight: inputData['recipeData'].cs_33_course_weight,
        cs_33_fine_weight: inputData['recipeData'].cs_33_fine_weight,
        cs_33_extra_fine_weight: inputData['recipeData'].cs_33_extra_fine_weight,
        cs_33_inflight_weight: inputData['recipeData'].cs_33_inflight_weight,
        cs_33_course_speed: inputData['recipeData'].cs_33_course_speed,
        cs_33_fine_speed: inputData['recipeData'].cs_33_fine_speed,
        cs_33_extra_fine_speed: inputData['recipeData'].cs_33_extra_fine_speed,
        cs_33_inflight_time: inputData['recipeData'].cs_33_inflight_time,
        cs_33_tollerence: inputData['recipeData'].cs_33_tollerence,
      },
    };
    console.log("====patchValue========>", masterFormMapping);
    this.masterForm.patchValue(masterFormMapping);
  }

  formControl() {
    // const numRegex = /^\d*\.?\d?\d?$/g;
    return new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)])
  }



  //   <div>
  //   <label for="email">email</label>
  //   <input type="text" name="email" id="email" formControlName="email">

  //    <span class="text-danger" *ngIf="contactDetails.get('email').hasError('required') && submitted">Email is
  //     Required</span>
  //   <span class="text-danger" *ngIf="contactDetails.get('email').hasError('email') && submitted">Email is not in
  //     valid format</span> 
  // </div>
  // removeFormControl(index) {
  //   let usersArray = this.masterForm.controls.users as FormArray;
  //   usersArray.removeAt(index);
  // }
  // addFormControl() {
  //   let usersArray = this.masterForm.controls.users as FormArray;
  //   let arraylength = usersArray.length;

  //   let newUserGroup: FormGroup = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.pattern(emailRegex)]
  //   })
  //   usersArray.insert(arraylength, newUserGroup);
  // }

  get userDtls() {
    return this.masterForm.controls['userDetails']['controls'];
  }

  get contactDtls() {
    return this.masterForm.controls['contactDetails']['controls'];
  }

  get personalDtls() {
    return this.masterForm.controls['personalDetails']['controls'];
  }



  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.masterForm.invalid) {
      return;
    }

    this.loading = true;
    console.log('call rest api and redirect to another page');
    if (this.isAddMode) {
      this.createRecipe();
    } else {
      this.updateRecipe();
    }
  }


  goToPrevious() {
    console.log("Before Previous**********", this.activeStepIndex);
    this.activeStepIndex = this.activeStepIndex - 1;
    console.log("After Previous**********", this.activeStepIndex);
  }

  goToNext() {
    console.log("Before Next**********", this.activeStepIndex);
    this.submitted = true;

    // console.log("===========>",this.masterForm.controls['userDetails'].value)
    if (this.masterForm.controls.userDetails.invalid
      && this.activeStepIndex == 1) {
      // this.submitted = false;
      return;
    }
    if (this.masterForm.controls.contactDetails.invalid
      && this.activeStepIndex == 2) {
      // this.submitted = false;
      return;
    }
    // if (this.masterForm.controls.personalDetails.invalid
    //   && this.activeStepIndex == 3) {
    //   // this.submitted = false;
    //   return;
    // }
    this.submitted = false;
    this.activeStepIndex = this.activeStepIndex + 1;
    console.log("After Next**********", this.activeStepIndex);
  }

  private createRecipe() {

    const userDetails = this.masterForm.controls['userDetails'];




    let comp_11_size =
      parseFloat(userDetails.get("silo_11_set_weight").value) +
      parseFloat(userDetails.get("silo_12_set_weight").value) +
      parseFloat(userDetails.get("cs_11_set_weight").value) +
      parseFloat(userDetails.get("cs_12_set_weight").value) +
      parseFloat(userDetails.get("cs_13_set_weight").value) +
      parseFloat(userDetails.get("cs_14_set_weight").value);

    const contactDetails = this.masterForm.controls['contactDetails'];
    let comp_12_size =
      parseFloat(contactDetails.get("silo_21_set_weight").value) +
      parseFloat(contactDetails.get("silo_22_set_weight").value) +
      parseFloat(contactDetails.get("silo_23_set_weight").value) +
      parseFloat(contactDetails.get("cs_21_set_weight").value) +
      parseFloat(contactDetails.get("cs_22_set_weight").value) +
      parseFloat(contactDetails.get("cs_23_set_weight").value);


    const personalDetails = this.masterForm.controls['personalDetails'];
    let comp_13_size =
      parseFloat(personalDetails.get("silo_31_set_weight").value) +
      parseFloat(personalDetails.get("silo_32_set_weight").value) +
      parseFloat(personalDetails.get("silo_33_set_weight").value) +
      parseFloat(personalDetails.get("cs_31_set_weight").value) +
      parseFloat(personalDetails.get("cs_32_set_weight").value) +
      parseFloat(personalDetails.get("cs_33_set_weight").value);

    let batchSize = comp_11_size + comp_12_size + comp_13_size;

    const customCreate = { user_name: this.username, comp_1_size: comp_11_size, comp_2_size: comp_12_size, comp_3_size: comp_13_size, batch_size: batchSize };

    customCreate['recipe_name'] = this.masterForm.get("recipe_name").value;
    customCreate['liquid_addition'] = this.masterForm.get("liquid_addition").value;
    customCreate['recipe_enable'] = this.masterForm.get("recipe_enable").value;
    customCreate['relative_recipe'] = true;

    customCreate['recipeData'] = { ...this.masterForm.controls['userDetails'].value, ...this.masterForm.controls['contactDetails'].value, ...this.masterForm.controls['personalDetails'].value }

    customCreate['recipeData']['silo_11_set_weight'] = userDetails.get("silo_11_set_weight").value
    customCreate['recipeData']['silo_12_set_weight'] = userDetails.get("silo_12_set_weight").value
    customCreate['recipeData']['cs_11_set_weight'] = userDetails.get("cs_11_set_weight").value
    customCreate['recipeData']['cs_12_set_weight'] = userDetails.get("cs_12_set_weight").value
    customCreate['recipeData']['cs_13_set_weight'] = userDetails.get("cs_13_set_weight").value
    customCreate['recipeData']['cs_14_set_weight'] = userDetails.get("cs_14_set_weight").value

    customCreate['recipeData']['silo_21_set_weight'] = contactDetails.get("silo_21_set_weight").value
    customCreate['recipeData']['silo_22_set_weight'] = contactDetails.get("silo_22_set_weight").value
    customCreate['recipeData']['silo_23_set_weight'] = contactDetails.get("silo_23_set_weight").value
    customCreate['recipeData']['cs_21_set_weight'] = contactDetails.get("cs_21_set_weight").value
    customCreate['recipeData']['cs_22_set_weight'] = contactDetails.get("cs_22_set_weight").value
    customCreate['recipeData']['cs_23_set_weight'] = contactDetails.get("cs_23_set_weight").value

    customCreate['recipeData']['silo_31_set_weight'] = personalDetails.get("silo_31_set_weight").value
    customCreate['recipeData']['silo_32_set_weight'] = personalDetails.get("silo_32_set_weight").value
    customCreate['recipeData']['silo_33_set_weight'] = personalDetails.get("silo_33_set_weight").value
    customCreate['recipeData']['cs_31_set_weight'] = personalDetails.get("cs_31_set_weight").value
    customCreate['recipeData']['cs_32_set_weight'] = personalDetails.get("cs_32_set_weight").value
    customCreate['recipeData']['cs_33_set_weight'] = personalDetails.get("cs_33_set_weight").value


    console.log(customCreate)
    this.configurationService.createRecipe(customCreate)
      .subscribe((resp) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
        (err) => {
          this.handleError(err);
        })
  }

  get name() { return this.masterForm.get('recipe_name'); }

  private updateRecipe() {

    const userDetails = this.masterForm.controls['userDetails'];

    let comp_11_size =
      parseFloat(userDetails.get("silo_11_set_weight").value) +
      parseFloat(userDetails.get("silo_12_set_weight").value) +
      parseFloat(userDetails.get("cs_11_set_weight").value) +
      parseFloat(userDetails.get("cs_12_set_weight").value) +
      parseFloat(userDetails.get("cs_13_set_weight").value) +
      parseFloat(userDetails.get("cs_14_set_weight").value);

    const contactDetails = this.masterForm.controls['contactDetails'];
    let comp_12_size =
      parseFloat(contactDetails.get("silo_21_set_weight").value) +
      parseFloat(contactDetails.get("silo_22_set_weight").value) +
      parseFloat(contactDetails.get("silo_23_set_weight").value) +
      parseFloat(contactDetails.get("cs_21_set_weight").value) +
      parseFloat(contactDetails.get("cs_22_set_weight").value) +
      parseFloat(contactDetails.get("cs_23_set_weight").value);


    const personalDetails = this.masterForm.controls['personalDetails'];
    let comp_13_size =
      parseFloat(personalDetails.get("silo_31_set_weight").value) +
      parseFloat(personalDetails.get("silo_32_set_weight").value) +
      parseFloat(personalDetails.get("silo_33_set_weight").value) +
      parseFloat(personalDetails.get("cs_31_set_weight").value) +
      parseFloat(personalDetails.get("cs_32_set_weight").value) +
      parseFloat(personalDetails.get("cs_33_set_weight").value);

    let batchSize = comp_11_size + comp_12_size + comp_13_size;

    const customUpdate = { recipeId: this.data.recipeId, user_name: this.username, comp_1_size: comp_11_size, comp_2_size: comp_12_size, comp_3_size: comp_13_size, batch_size: batchSize };

    customUpdate['recipe_name'] = this.masterForm.get("recipe_name").value;
    customUpdate['liquid_addition'] = this.masterForm.get("liquid_addition").value;
    customUpdate['recipe_enable'] = this.masterForm.get("recipe_enable").value;
    customUpdate['relative_recipe'] = true;

    customUpdate['recipeData'] = { ...this.masterForm.controls['userDetails'].value, ...this.masterForm.controls['contactDetails'].value, ...this.masterForm.controls['personalDetails'].value }
    customUpdate['recipeData']['silo_11_set_weight'] = userDetails.get("silo_11_set_weight").value
    customUpdate['recipeData']['silo_12_set_weight'] = userDetails.get("silo_12_set_weight").value
    customUpdate['recipeData']['cs_11_set_weight'] = userDetails.get("cs_11_set_weight").value
    customUpdate['recipeData']['cs_12_set_weight'] = userDetails.get("cs_12_set_weight").value
    customUpdate['recipeData']['cs_13_set_weight'] = userDetails.get("cs_13_set_weight").value
    customUpdate['recipeData']['cs_14_set_weight'] = userDetails.get("cs_14_set_weight").value

    customUpdate['recipeData']['silo_21_set_weight'] = contactDetails.get("silo_21_set_weight").value
    customUpdate['recipeData']['silo_22_set_weight'] = contactDetails.get("silo_22_set_weight").value
    customUpdate['recipeData']['silo_23_set_weight'] = contactDetails.get("silo_23_set_weight").value
    customUpdate['recipeData']['cs_21_set_weight'] = contactDetails.get("cs_21_set_weight").value
    customUpdate['recipeData']['cs_22_set_weight'] = contactDetails.get("cs_22_set_weight").value
    customUpdate['recipeData']['cs_23_set_weight'] = contactDetails.get("cs_23_set_weight").value

    customUpdate['recipeData']['silo_31_set_weight'] = personalDetails.get("silo_31_set_weight").value
    customUpdate['recipeData']['silo_32_set_weight'] = personalDetails.get("silo_32_set_weight").value
    customUpdate['recipeData']['silo_33_set_weight'] = personalDetails.get("silo_33_set_weight").value
    customUpdate['recipeData']['cs_31_set_weight'] = personalDetails.get("cs_31_set_weight").value
    customUpdate['recipeData']['cs_32_set_weight'] = personalDetails.get("cs_32_set_weight").value
    customUpdate['recipeData']['cs_33_set_weight'] = personalDetails.get("cs_33_set_weight").value




    console.log(customUpdate)
    this.configurationService.updateRecipe(customUpdate)
      .subscribe((resp) => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      },
        (err) => {
          this.handleError(err);
        })

  }


  private handleError(err) {
    this.loading = false;
    console.log(err)
    if (err.error.message) {
      this.errMessage = err.error.message;
    } else {
      this.errMessage = this.error.getErrorMessage(100);
    }
  }

  // submit() {
  // console.log("********submit**********")
  // this.submitted = true;
  // if (this.masterForm.controls.userDetails.invalid
  //   && this.activeStepIndex == 1) {
  //   return;    //this.submitted=false;
  // }
  // if (this.masterForm.controls.contactDetails.invalid
  //   && this.activeStepIndex == 2) {
  //   return;
  // }
  // if (this.masterForm.controls.personalDetails.invalid
  //   && this.activeStepIndex == 3) {
  //   return;
  // }

  // this.activeStepIndex = this.activeStepIndex + 1;
  // if (this.activeStepIndex == 4) {
  // or call rest api and redirect to another page
  // console.log('call rest api and redirect to another page');
  // this.activeStepIndex = 1;
  // this.masterForm.reset();
  // }
  // }



}
