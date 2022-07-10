import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorsCreationDto } from '../actors.model';

@Component({
  selector: 'app-form-actors',
  templateUrl: './form-actors.component.html',
  styleUrls: ['./form-actors.component.css']
})
export class FormActorsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form : any = FormGroup;

  @Input()
  model :any ;

  @Output()
  onSaveChanges :EventEmitter<actorsCreationDto> = new EventEmitter<actorsCreationDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators: [Validators.required]
      }],
      dateOfBirth:'',
      picture:'',
      biography:''

    });

    if(this.model !== undefined){
      this.form.patchValue(this.model)
    }
  }

  onImgSelected(image : any){
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(markdown : any){
    this.form.get('biography').setValue(markdown);
  }

  saveChanges(){
    if(this.form.valid)
    {
      this.onSaveChanges.emit(this.form.value)
    }
    
  }

  

}
