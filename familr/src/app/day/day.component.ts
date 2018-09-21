import { BeachService } from './../beach.service';
import { RollService } from './../roll.service';
import { EventComponent } from './../event/event.component';

import { RollComponent } from './../roll/roll.component';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent  {
  rollResults: any;

  constructor(private _beachService: BeachService){};
  

 
    getBeach(){
      this.rollResults = [];
      this.rollResults = (this._beachService.getBeach())
      console.log(this.rollResults);

    }

 
    
  }



