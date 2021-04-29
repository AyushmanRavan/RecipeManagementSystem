import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from 'src/app/configuration/configuration.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  id: string
  data: any
  activeStepIndex: any = 1;
  constructor(private route: ActivatedRoute, 
    private router: Router, private configurationService: ConfigurationService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getRecipeById(this.id);
  }

  ngOnInit(): void {

  }

  goToPrevious() {
    this.activeStepIndex = this.activeStepIndex - 1;
  }

  goToNext() {
    this.activeStepIndex = this.activeStepIndex + 1;
  }

  getRecipeById(recipeById) {
    this.configurationService.getRecipeById(recipeById).subscribe((resp) => {
      console.log("data===>", resp);
      this.data = resp;
    })
  }

  submit() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  

}






