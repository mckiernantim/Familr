import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


interface monsterData {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  response: any;
  constructor(public http: HttpClient) { }

  getMonsterUrl(monsterName) {
    var promise = new Promise((resolve, reject) => {
      this.http.get<monsterData>('http://dnd5eapi.co/api/monsters/?name=' + monsterName)
        .subscribe(
          data => { this.response = data },
          err => console.error(err),
          () => {
            if (this.response.results.length >= 1) {
              return (this.response.results[0].url)
            }

          })

    }

      //   getCurrentMonster(monsterUrl){
      //     this.http.get<monsterData>(monsterUrl)
      //     .subscribe(data =>{
      //       this.response = data;
      //       console.log(data.name + "%%%%%%%%%%%%%%%% monster stats brought back from api")
      //       return this.response
      //    })
      //   }
      //   mapMonsterStats(data){

      //   }
      // }
    )
  }
}
