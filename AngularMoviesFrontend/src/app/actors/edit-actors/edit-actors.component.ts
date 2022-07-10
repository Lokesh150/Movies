import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorsCreationDto, actorsDto } from '../actors.model';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router : Router) { }

  model: actorsDto = {
    id :1,
    name: 'Lokesh',
    dateOfBirth : new Date('2000-3-10'),
    biography: 'default',
    picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h'
   
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params =>{
    //   alert(params['id'])
      
    // });
  }

  saveChanges(actors : any){
    console.log(actors);
    this.router.navigate(["/actors"]);
  }

}
