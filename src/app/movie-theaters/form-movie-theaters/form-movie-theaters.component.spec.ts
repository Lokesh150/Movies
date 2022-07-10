import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovieTheatersComponent } from './form-movie-theaters.component';

describe('FormMovieTheatersComponent', () => {
  let component: FormMovieTheatersComponent;
  let fixture: ComponentFixture<FormMovieTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMovieTheatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovieTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
