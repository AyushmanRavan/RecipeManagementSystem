import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedRecipeDataComponent } from './calculated-recipe-data.component';

describe('CalculatedRecipeDataComponent', () => {
  let component: CalculatedRecipeDataComponent;
  let fixture: ComponentFixture<CalculatedRecipeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedRecipeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedRecipeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
