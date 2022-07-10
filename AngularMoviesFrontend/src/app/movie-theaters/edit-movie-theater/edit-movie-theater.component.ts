import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheaterCreationDto } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private router : Router) { }

  model : movieTheaterCreationDto ={
    name:'Lokesh',
    latitude: '17.49908524583483',
    longitude:'78.40071201324464'
  } 

  ngOnInit(): void {
    
  }

  onSaveChanges(movieTheater : any){
    console.log(movieTheater);
    this.router.navigate(['/movietheaters'])
  }

}
