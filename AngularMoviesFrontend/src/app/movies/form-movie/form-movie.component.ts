import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipeSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { moviesCreationDto } from '../movies';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form:any = FormGroup;

  nonSelectedGenres: multipeSelectorModel[]=[
    {key:1 , value:'Drama'},
    {key:2 , value:'Comedy'},
    {key:3 , value:'Horror'},
    {key:4 , value:'Action'}
  ];

  selectedGenres : multipeSelectorModel[]=[];

  nonSelectedMovieTheaters: multipeSelectorModel[]=[
    {key:1 , value:'Asian Jyothi'},
    {key:2 , value:'Asian Cinemas'},
    {key:3 , value:'AMB'},
    {key:4 , value:'Inox'},
  ]

  selectedMovieTheaters:multipeSelectorModel[]=[];

  @Input()
  model:any;

  @Output()
  onSaveChanges =new EventEmitter<moviesCreationDto>();

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      title:['',{
        validators: [Validators.required]
      }],
      summary : '',
      inTheaters:false,
      releaseDate: '',
      trailer:'',
      poster:'',
      genresId: '',
      movieTheatersId:''
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model)
    }
    
  }

  onImgSelected(image : any){
    this.form.get('poster').setValue(image);
  }

  changeMarkdown(markdown : any){
    this.form.get('summary').setValue(markdown)
  }

  saveChanges(){
    if(this.form.valid){
      const genresId = this.selectedGenres.map(value=>value.key);
      this.form.get('genresId').setValue(genresId);
      const movieTheatersId = this.selectedMovieTheaters.map(value=>value.key);
      this.form.get('movieTheatersId').setValue(movieTheatersId);
      this.onSaveChanges.emit(this.form.value)
    }
  }

}
