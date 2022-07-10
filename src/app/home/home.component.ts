import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters=[
      {
        title : 'Spider-Man',
        date : new Date('2016-7-21'),
        cost : 3000,
        poster : 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'
      },
      {
        title : 'Iron-Man',
        date : new Date('2011-5-16'),
        cost : 2000,
        poster : 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg'
      },
    ];

    this.moviesInFuture=[
      {
        title : 'Avungers',
        date : new Date('2022-12-10'),
        cost : 3000,
        poster : 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg'
      },
      {
        title : 'Thor',
        date : new Date('2022-11-09'),
        cost : 2000,
        poster : 'https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg'
      },
    ]
  }

  moviesInTheaters:any;
  moviesInFuture:any;

}
