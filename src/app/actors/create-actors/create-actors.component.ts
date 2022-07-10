import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { actorsCreationDto } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent implements OnInit {

  constructor(private router : Router , private actorsService : ActorsService ) { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO : actorsCreationDto){
    console.warn(actorCreationDTO);
    this.actorsService.create(actorCreationDTO).subscribe(()=>{

    })
  }

}
