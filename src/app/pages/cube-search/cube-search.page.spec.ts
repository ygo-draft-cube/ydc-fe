import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeSearchPage } from './cube-search.page';

describe('CubeSearchPage', () => {
  let component: CubeSearchPage;
  let fixture: ComponentFixture<CubeSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeSearchPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
