import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { beachEvents } from './beach-events';
import { RollService } from './roll.service';
import { Injectable } from '@angular/core';
import { MonsterService } from './monster.service';


interface monsterData  {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})


export class BeachService {

  constructor(private _rollService: RollService, private weatherService: WeatherService, private monsterService: MonsterService, private http: HttpClient ) { }
  response:any;
  beach = beachEvents
  rolls:any= {
    monsterName:"",
    monsterNumbers:[],
    dice:[],
    monsters: [],
}

  
  getBeach(){
    this.rolls.monsters = [];
    this.rolls.dice = [];
    this.rolls.monsterName = null;
    for (let i = 0; i<3; i++){
      var dieRoll=this._rollService.roll20()
      console.log(dieRoll)
        
       if( dieRoll >= 1){

         var x = this._rollService.roll100();
         this.rolls.dice.push(x +" was rolled on the event table", this.beach[x-1])
         
         this.rolls.monsterName = this.beach[x-1].name.replace(" ", "+");
         console.log(this.rolls.monsterName  + "%%%%%%%%%%% going into the url finder")
         var monsterStats = this.monsterService.getMonsterUrl(this.rolls.monsterName)
         if (monsterStats != undefined){
          console.log
          this.rolls.monsters.push(monsterStats);
        }
        else
          console.log("no URL for this monster")
         
        //     console.log(monsterUrl + "THIS IS THE URL")
        //     var monsterStats = this.getCurrentMonster(monsterUrl);
        //     console.log(monsterStats + "DATA BROUGHT BACK FROM API")
            
            console.log(monsterStats)
           
        ;
       }
       
        // this.rolls.dice.push("nothing happened");
    };

    if(this.rolls.monsters){
      console.log(this.rolls.monsters + "MONSTER STATS$$$$$$$$$$$")
  }
    else 
      console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%")
    // this.rolls.push(this.weatherService.getWeather());
    return this.rolls.dice 
  };

//   getCurrentMonster(url){
//     this.http.get<monsterData>(url)
//     .subscribe(data =>{
//       this.response = data;
//       console.log(data.name + " HP: " + data.hit_points + " Attacks: " data.actions[0].desc + "%%%%%%%%%%%%%%%% monste stats brought back from api");
//       return data
//    })
//   }
  
}
