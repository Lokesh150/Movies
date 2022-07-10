import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IndexGenresComponent} from './genres/index-genres/index-genres.component'
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import {FilterMoviesComponent} from './movies/filter-movies/filter-movies.component'

const routes: Routes = [
  { path:'' , component:HomeComponent } ,

  { path : 'genres' , component:IndexGenresComponent},
  { path : 'genres/create' , component: CreateGenreComponent},
  { path : 'genres/edit/:id' , component: EditGenreComponent},

  { path : 'actors' , component:IndexActorsComponent},
  { path : 'actors/create' , component: CreateActorsComponent},
  { path : 'actors/edit/:id' , component: EditActorsComponent},

  { path : 'movietheaters' , component:IndexMovieTheaterComponent},
  { path : 'movietheaters/create' , component: CreateMovieTheaterComponent},
  { path : 'movietheaters/edit/:id' , component: EditMovieTheaterComponent},

  { path : 'movies/create' , component: CreateMovieComponent},
  { path : 'movies/edit/:id' , component: EditMovieComponent},
  {path : 'movies/filter' , component: FilterMoviesComponent},

  { path:'**' , redirectTo:'' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
