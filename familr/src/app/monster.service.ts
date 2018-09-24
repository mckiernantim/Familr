import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

interface monsterData  {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  response:any;
  constructor(public http: HttpClient) { }
  getMonsterUrl(){
   this.http.get<monsterData>('http://dnd5eapi.co/api/monsters/?name=Guard')
    .subscribe(data =>{
      this.response = data;
      console.log("%%%%%%%%%%%  REQUEST MADE %%%%%%%%%%%")
      console.log(this.response)
      if(this.response.results[0].url){
        console.log(this.response.results[0].url)
        return this.response.results[0].url
      }
    })
    };
    getCurrentMonster(monsterUrl){
      this.http.get<monsterData>(monsterUrl)
      .subscribe(data =>{
        this.response = data;
        console.log(data + "%%%%%%%%%%%%%%%% monste stats brought back from api")
        return this.response
     })
    }
    mapMonsterStats(data){
      
    }
  }
