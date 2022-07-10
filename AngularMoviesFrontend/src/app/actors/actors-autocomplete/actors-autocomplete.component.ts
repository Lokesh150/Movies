import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorsCreationDto } from '../actors.model';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }

  selectedActors :any =[];
  
  control :FormControl= new FormControl();
  actors = [
    {name: 'Tom Holland' , picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {name: 'Ram Charan' , picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ram_Charan_at_Promotion_of_%27Zanjeer%27_on_Jhalak_Dikhhla_Jaa.jpg/220px-Ram_Charan_at_Promotion_of_%27Zanjeer%27_on_Jhalak_Dikhhla_Jaa.jpg'},
    {name: 'NTR' , picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/N.T.Rama_Rao_Jr._at_the_RRR_Press_Meet_in_Chennai.jpg/220px-N.T.Rama_Rao_Jr._at_the_RRR_Press_Meet_in_Chennai.jpg'}
  ];

  originalActors =this.actors;

  columnsToDisplay = ['picture','name','character','actions'];

  @ViewChild(MatTable) table : MatTable<any> | any;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value =>{
      this.actors=this.originalActors;
      this.actors =this.actors.filter(actor=>actor.name.indexOf(value) !== -1)
    })
  }

  optionSelected(event :MatAutocompleteSelectedEvent){
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(actor :any){
    console.log(actor);
    const index = this.selectedActors.findIndex((a: { name: any; }) =>a.name === actor.name);
    console.log(index);
    this.selectedActors.splice(index , 1);
    this.table.renderRows();
  }

  dropped(event : CdkDragDrop<any[]>){
    const previousIndex =this.selectedActors.findIndex((actor: any)=>actor=== event.item.data);
    moveItemInArray(this.selectedActors,previousIndex , event.currentIndex);
    this.table.renderRows();
  }

}
