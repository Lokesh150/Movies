import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from './utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  @Input()
  currentImgUrl : any;

  @Output()
  onimgSelected = new EventEmitter<any>();

  imgBase64:any;

  ngOnInit(): void {
  }

  change(event : any){
    if(event.target.files.length > 0){
      console.log(event);
      const file : File = event.target.files[0];
      console.log(file);
      toBase64(file).then((value : any)=>{
        this.imgBase64=value;
        this.currentImgUrl ='';
        this.onimgSelected.emit(this.imgBase64);
        this.currentImgUrl='';
      })
    
    }
  }

}
