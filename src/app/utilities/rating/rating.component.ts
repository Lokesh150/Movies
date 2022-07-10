import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Output()
  onRating :EventEmitter<any> = new EventEmitter<any>();

  @Input()
  maxRating=5;

  maxRatingArr:any;
  previousRate=0;

  @Input()
  selectedRate =0;
  ngOnInit(): void {
    this.maxRatingArr=Array(this.maxRating).fill(0);
  }

  handleMouseEnter(rate: any){
    this.selectedRate= rate+1;
  }

  handleClick(rate : any){
    this.selectedRate = rate+1;
    this.previousRate = this.selectedRate
    this.onRating.emit(this.selectedRate);

  }

  handleMouseLeave(rate : any){
    if(this.previousRate !=0)
    {
      this.selectedRate = this.previousRate
    }
    else{
      this.selectedRate=0;
    }
  }

}
