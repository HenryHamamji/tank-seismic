import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxSpaceTypeComponent } from './filter-box-space-type.component';

describe('FilterBoxSpaceTypeComponent', () => {
  let component: FilterBoxSpaceTypeComponent;
  let fixture: ComponentFixture<FilterBoxSpaceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBoxSpaceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBoxSpaceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
