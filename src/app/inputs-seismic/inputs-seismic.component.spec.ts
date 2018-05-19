import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsSeismicComponent } from './inputs-seismic.component';

describe('InputsSeismicComponent', () => {
  let component: InputsSeismicComponent;
  let fixture: ComponentFixture<InputsSeismicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsSeismicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsSeismicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
