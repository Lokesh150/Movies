import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDto } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor( private formBuilder : FormBuilder) { }

  form :any = FormGroup;

  @Input()
  model: any;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDto> = new EventEmitter<genreCreationDto>();

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      name:['',{
        validators : [Validators.required,Validators.minLength(3),firstLetterUppercase()]
      }]
    });

    if(this.model !== undefined )
    {
      this.form.patchValue(this.model)
    }
  }

  saveChanges(){
    if(this.form.valid)
    {
      this.onSaveChanges.emit(this.form.value)
    }
    
  }

  getErrorMsg(){
    const feild = this.form.get('name');
    if(feild.hasError('required')){
      return 'please enter the  name';
    }
    if(feild.hasError('minlength')){
      return 'please enter atleast 3 characters';
    }
    if(feild.hasError('firstLetterUppercase')){
      return feild.getError('firstLetterUppercase').message;
    }
    return '';
    
  }

}
