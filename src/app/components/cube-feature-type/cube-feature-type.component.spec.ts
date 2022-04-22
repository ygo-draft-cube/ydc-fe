import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFeatureTypeComponent } from './cube-feature-type.component';

describe('CubeFeatureTypeComponent', () => {
  let component: CubeFeatureTypeComponent;
  let fixture: ComponentFixture<CubeFeatureTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFeatureTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeFeatureTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
