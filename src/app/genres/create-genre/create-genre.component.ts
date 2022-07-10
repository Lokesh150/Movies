import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebApiErrors } from 'src/app/utilities/input-img/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDto } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor( private router : Router , private formBuilder : FormBuilder , 
    private genresService : GenresService) { }

  form :any = FormGroup;

  errors : string[]=[];

  ngOnInit(): void {
    
  }

  saveChanges(genres : genreCreationDto){
   this.genresService.create(genres).subscribe(()=>
   {
    this.router.navigate(["/genres"]);
   },error=>this.errors=parseWebApiErrors(error));
    
  }

  

}
