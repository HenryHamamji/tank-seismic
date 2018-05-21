import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTypeFormComponent } from './space-type-form.component';

describe('SpaceTypeFormComponent', () => {
  let component: SpaceTypeFormComponent;
  let fixture: ComponentFixture<SpaceTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
