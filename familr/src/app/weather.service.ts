import { Event } from './event';
import { weatherEvents } from './weather/weatherEvents';
import { RollService, } from './roll.service';


import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  result: any = {};
  constructor(private rollService: RollService) { }
  getWeather(){
   this.result =  weatherEvents[this.rollService.roll20()];
    return this.result;
  }
}
