import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { moviesCreationDto } from '../movies';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private router : Router) { }

  model : moviesCreationDto={
    title:'Spider',
    summary:'xyz',
    inTheaters:true,
    releaseDate:new Date('2023-12-12'),
    trailer:'xyz',
    poster:'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
    genresId:[1,2],
    movieTheatersId:[1,2]
  }

  ngOnInit(): void {
    
  }

  saveChanges(movie :any){
    console.log(movie);
    this.router.navigate(['/home']);
  }

}
