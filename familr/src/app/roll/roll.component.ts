import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent {

 result:number;
 sides:number;
 ammount:number;
 constructor(){}

  roll(ammount, sides){
 
  this.result =  ammount * (Math.floor(Math.random() * sides) + 1)
  console.log('fuck')
  console.log(this.result)
    
  }

}




