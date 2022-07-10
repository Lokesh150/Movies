import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-erros',
  templateUrl: './display-erros.component.html',
  styleUrls: ['./display-erros.component.css']
})
export class DisplayErrosComponent implements OnInit {

  constructor() { }

  @Input()
  errors : string[]=[];

  ngOnInit(): void {
  }

}
