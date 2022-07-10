import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/input-img/utils';
import { actorsCreationDto } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor( private http : HttpClient) { }

  private apiURL = environment.apiURL +"/actors";

  create(actor : actorsCreationDto){
    const formData = this.buildFormData(actor);
    console.warn(formData);
    return this.http.post(this.apiURL,formData);
  }

  private buildFormData(actor : actorsCreationDto) : FormData {
    const formData = new FormData()

    formData.append('name' , actor.name)

    if(actor.biography){
      formData.append('biography' , actor.biography)
    }

    if(actor.dateOfBirth){
      formData.append('dateOfBirth' , formatDateFormData(actor.dateOfBirth))
    }

    if(actor.picture){
      // console.log(actor.picture);
      formData.append('picture' , actor.picture)
      console.log(formData.get('picture'));
    }

    return formData;
  }
}
