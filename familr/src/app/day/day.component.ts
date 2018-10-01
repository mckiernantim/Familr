import { NoUndeadService} from './../no-undead.service';
import { HttpClient } from '@angular/common/http';
import { MonsterService } from './../monster.service';
import { MonsterComponent } from './../monster/monster.component';
import { weatherEvents } from './../weather/weatherEvents';
import { WeatherService } from './../weather.service';
import { WeatherComponent } from './../weather/weather.component';
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
  response:any;
  rollResults: any;
  nameResults: any[] =[];
  dayTracker:number = 1;
  weather:any = null;
  monsterUrl:any =null;
  
 

  constructor(private _beachService: BeachService, private weatherService: WeatherService, private monsterService: MonsterService, private noUndeadService: NoUndeadService  ){};
  

    getWeather(){
      this.weather = this.weatherService.getWeather();
      this.dayTracker++;

    }

    getBeach(){
      
      this.rollResults = [];
      this.nameResults = [];
      var returnedResults = (this._beachService.getBeach())
      
      this.nameResults = returnedResults.monsterNames;
      console.log(this.nameResults)
      this.rollResults = returnedResults;
      
      
      this.weather = this.getWeather()
  }
    getNoUndead(){
      
      this.rollResults = [];
      this.nameResults = [];
      var returnedResults = (this.noUndeadService.getNoUndead())
     
      
      this.nameResults = returnedResults.monsterName;
      this.rollResults = returnedResults;
      
      
      
      this.weather = this.getWeather()
    }


 
}



