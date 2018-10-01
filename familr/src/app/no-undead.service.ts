import { noUndeadEvents } from './no-undead-events';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { RollService } from './roll.service';
import { Injectable } from '@angular/core';
import { MonsterService } from './monster.service';


@Injectable({
  providedIn: 'root'
})
export class NoUndeadService {
  constructor(private _rollService: RollService, private weatherService: WeatherService, private monsterService: MonsterService, private http: HttpClient ) { }
  response:any;
  jungle = noUndeadEvents;
  rolls:any= {
    monsterName:"",
    monsterNumbers:[],
    dice:[],
    monsters: [],
}

getNoUndead(){
  this.rolls.monsters = [];
  this.rolls.dice = [];
  this.rolls.monsterName = null;
  for (let i = 0; i<3; i++){
    var dieRoll=this._rollService.roll20()
   
    if(dieRoll>=1){
      
      var newRandomEvent = this._rollService.roll100();
      this.rolls.dice.push(newRandomEvent +" was rolled on the event table", this.jungle[newRandomEvent-1])
      console.log(this.rolls.dice)
    }
   }
   console.log(this.rolls.dice)
    return this.rolls.dice
  }
}