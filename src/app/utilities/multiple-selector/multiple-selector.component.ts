import { Component, Input, OnInit } from '@angular/core';
import { multipeSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  nonSelectedItems:multipeSelectorModel[]=[];

  @Input()
  selectedItems:multipeSelectorModel[]=[];

  

  ngOnInit(): void {
  }

  select(item :any ,index :any){
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index , 1);
  }

  deSelect(item : any, index: any){
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index , 1);
  }

  selectAll(){
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems=[];
  }

  deSelectAll(){
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems=[];
  }

}
