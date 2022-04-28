import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDraftLoadPagePage } from './start-draft-load-page.page';

describe('StartDraftLoadPagePage', () => {
  let component: StartDraftLoadPagePage;
  let fixture: ComponentFixture<StartDraftLoadPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDraftLoadPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDraftLoadPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
