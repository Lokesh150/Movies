import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActorsComponent } from './form-actors.component';

describe('FormActorsComponent', () => {
  let component: FormActorsComponent;
  let fixture: ComponentFixture<FormActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
