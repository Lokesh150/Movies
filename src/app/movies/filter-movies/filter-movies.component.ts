import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.css']
})
export class FilterMoviesComponent implements OnInit {

  constructor(private formBuider :FormBuilder) { }

  form  : FormGroup   ;

  

  movies =[
    {title: 'Spider-Man' , poster : 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'},
    {title : 'Iron-Man' , poster : 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg'}
  ]

  originalMovies = this.movies;

  genres =[
    {id : 1 , name : 'Drama'},
    {id : 2 , name : 'Action'}
  ]

  ngOnInit(): void {
    this.form= this.formBuider.group({
      title : '',
      genreId : 0,
      upcomingReleases : false,
      inTheaters:false
    });

    this.form.valueChanges.subscribe(values  => {
      this.movies = this.originalMovies
      this.filterMovies(values);
      console.log(values)
   })
  }

  filterMovies(values : any){
    if(values.title){
      this.movies = this.movies.filter(movie=>movie.title.indexOf(values.title)!==-1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}


