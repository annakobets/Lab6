import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeRecipeComponent } from './edite-recipe.component';

describe('EditeRecipeComponent', () => {
  let component: EditeRecipeComponent;
  let fixture: ComponentFixture<EditeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
