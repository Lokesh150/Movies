import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 

  handleRating(rate : any){
    alert(`you selected ${rate}`);
  }

  title = 'crudAngular';
  relaeseDate = Date.now();
  price = 5000;
 
  
}
