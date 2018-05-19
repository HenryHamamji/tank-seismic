import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBoxPriceComponent } from './filter-box-price.component';

describe('FilterBoxComponent', () => {
  let component: FilterBoxPriceComponent;
  let fixture: ComponentFixture<FilterBoxPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBoxPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBoxPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
