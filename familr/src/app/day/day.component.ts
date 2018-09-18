import { RollComponent } from './../roll/roll.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent  {
  results:any[] = [];
  rolls:RollComponent[] = [];
 
  
  compileDay(){

    for( let i = 0; i< 3; i++){
      if (this.results.length>2){
        this.results=[];
        }
      this.rolls[i] = new RollComponent;
      this.rolls[i].roll(1,20);
      if(this.rolls[i].result>=17){
        this.results.push(this.rolls[i].result)}
        else{this.results.push("Nothing Happened Today")}
   

     

}
  }

  constructor() { }

  

}

