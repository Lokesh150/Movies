import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  saveChanges(movie : any){
    console.log(movie);
    this.router.navigate(['/home']);
  }

}
