import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreationDto, genreDto } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router : Router,
    private genresService : GenresService) { }

  model: genreDto ;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.genresService.getById(params['id']).subscribe(genre=>
        {
          console.log(genre)
          this.model=genre;
          console.warn(this.model)
        })
     })
  }

  saveChanges(genreCreationDto : genreCreationDto){
   this.genresService.edit(this.model.id ,genreCreationDto)
   .subscribe(()=>{
    this.router.navigate(["/genres"]);
   })
  }

}
