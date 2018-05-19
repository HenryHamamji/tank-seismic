import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsProjectComponent } from './inputs-project.component';

describe('InputsProjectComponent', () => {
  let component: InputsProjectComponent;
  let fixture: ComponentFixture<InputsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
