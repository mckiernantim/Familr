import { DayComponent } from './../day/day.component';
import { RollComponent } from './../roll/roll.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent  {
  events =[
  
  {
    _id: 1,
    text: "some bird people appear",
    monsters:{
        
        exist:true,
        name: "Arracockra",
        roll:[1,4,1]
    }
 },
 {
     _id: 2,
     text: "some bird people appear",
     monsters:{
         exist:true,
         name: "Arracockra",
         roll:[1,4,1]
     }
  },
  {
     _id: 3,
     text: "some bird people appear",
     monsters:{
         exist:true,
         name: "Arracockra",
         roll:[1,4,1]
     }
  },
  {
     _id: 4,
     text: "some bird people appear",
     monsters:{
         exist:true,
         name: "Arracockra",
         roll:[1,4,1]
     }
  },
  {
     _id: 5,
     text: "some bird people appear",
     monsters:{
         exist:true,
         name: "Arracockra",
         roll:[1,4,1]
     }
  }
]
  


  
  
  constructor() { }

  

}




