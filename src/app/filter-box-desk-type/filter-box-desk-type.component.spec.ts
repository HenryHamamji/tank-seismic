import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxDeskTypeComponent } from './filter-box-desk-type.component';

describe('FilterBoxDeskTypeComponent', () => {
  let component: FilterBoxDeskTypeComponent;
  let fixture: ComponentFixture<FilterBoxDeskTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBoxDeskTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBoxDeskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
