import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxDatePickerComponent } from './filter-box-date-picker.component';

describe('FilterBoxDatePickerComponent', () => {
  let component: FilterBoxDatePickerComponent;
  let fixture: ComponentFixture<FilterBoxDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBoxDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBoxDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
