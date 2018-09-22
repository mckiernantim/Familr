import { beachEvents } from './beach-events';
import { RollService } from './roll.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BeachService {

  constructor(private _rollService: RollService, ) { }
  beach = beachEvents
  rolls: any[] = []
  
  getBeach(){
    
    this.rolls = [];
    
    for (let i =0; i<3; i++){
        
        var dieRoll=this._rollService.roll20()
        console.log(dieRoll)
       if( dieRoll >= 17){
         var x = this._rollService.roll100();
         var event =this.rolls.push(x +" was rolled on the event table",this.beach[x-1]);
         console.log(event)
         console.log(x+ "this is the d100") ;
        ;
       }else this.rolls.push("nothing happened")
    }
    console.log(this.rolls + "THESE ARE THE TOTAL ROLLS ")
    return this.rolls
  }
  
}
