import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDto, genreDto } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http : HttpClient) { }

  private apiURL = environment.apiURL +"/genres";

  getAll() : Observable<genreDto[]>{
    return this.http.get<genreDto[]>(this.apiURL);
  }

  getById(id : number) : Observable<genreDto>{
    return this.http.get<genreDto>("https://localhost:44320/api/Genres/"+id);
  }

  create(genre : genreCreationDto){
    return this.http.post(this.apiURL,genre);
  }

  edit(id : number , genre : genreCreationDto){
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }

  delete(id : number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
