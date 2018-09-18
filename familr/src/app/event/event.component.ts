import { DayComponent } from './../day/day.component';
import { RollComponent } from './../roll/roll.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  _id:number;
  text:string;
  
  monsters:{
    
    _id:number;
    name:string;
    ammount: number,
    
  }

  makeEvents(){
    for (let i = 0; i <10; i++) {
    
      let current = new EventComponent();
      current._id = idCount;
      current.text = "a skeleton oh noes"
      // current.monsters.name = "skeleton" +idCount.toString
      // current.monsters._id = 1;
      // current.monsters.ammount = 1; 
      idCount++;
      events.push(current);
      console.log(events)
   }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
let idCount = 1;
let events = [];
