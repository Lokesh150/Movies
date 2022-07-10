import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheaterCreationDto } from '../movie-theater.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater : movieTheaterCreationDto){
    console.log(movieTheater);
    this.router.navigate(['/movietheaters'])
  }

}
