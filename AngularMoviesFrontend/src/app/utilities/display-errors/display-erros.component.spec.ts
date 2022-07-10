import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrosComponent } from './display-erros.component';

describe('DisplayErrosComponent', () => {
  let component: DisplayErrosComponent;
  let fixture: ComponentFixture<DisplayErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
