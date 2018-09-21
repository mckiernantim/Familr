import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollService {

 
  roll4(){
    return  1 * (Math.floor(Math.random() * 4) + 1)
  }
  roll6(){
    return  1 * (Math.floor(Math.random() * 6) + 1)
  }
  roll8(){
    return  1 * (Math.floor(Math.random() * 8) + 1)
  }
  roll10(){
     return 1 * (Math.floor(Math.random() * 10) + 1)
  }
  roll12(){
    return 1 * (Math.floor(Math.random() * 10) + 1)
 }
 roll20(){
  return 1 * (Math.floor(Math.random() * 20) + 1)
}
roll100(){
  return 1 * (Math.floor(Math.random() * 100) + 1)
}


  constructor() { }
}
