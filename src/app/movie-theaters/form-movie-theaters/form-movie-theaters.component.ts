import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinates } from 'src/app/utilities/map/coordinates';
import { movieTheaterCreationDto } from '../movie-theater.model';

@Component({
  selector: 'app-form-movie-theaters',
  templateUrl: './form-movie-theaters.component.html',
  styleUrls: ['./form-movie-theaters.component.css']
})
export class FormMovieTheatersComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form :any = FormGroup;

  @Output()
  onSaveChanges = new EventEmitter<movieTheaterCreationDto>();

  @Input()
  model :any;

  theaterCoordinates: coordinates[]=[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators: [Validators.required]
      }],
      latitude:['',{
        validators: [Validators.required]
      }],
      longitude:['',{
        validators: [Validators.required]
      }],
    }) ;
    
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.theaterCoordinates.push({latitude:this.model.latitude, longitude:this.model.longitude})
    }
  }

  onSelectedCoordinates(event : coordinates){
    this.form.patchValue(event);
  }

  saveChanges(){
    if(this.form.valid){
      this.onSaveChanges.emit(this.form.value);
    }
  }

}
