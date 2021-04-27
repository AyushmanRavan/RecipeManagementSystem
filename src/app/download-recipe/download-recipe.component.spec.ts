import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadRecipeComponent } from './download-recipe.component';

describe('DownloadRecipeComponent', () => {
  let component: DownloadRecipeComponent;
  let fixture: ComponentFixture<DownloadRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
