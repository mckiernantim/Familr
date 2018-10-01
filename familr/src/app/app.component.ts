import { HttpClient } from '@angular/common/http';
import { BeachService } from './beach.service';
import { Component, Injectable } from '@angular/core';

// import { resolve } from 'path';

@Injectable()
class FindMonsterService {
  providedIn: 'root'
  apiRoot: string = 'http://dnd5eapi.co/api/monsters/?name='
 
  results: Object[];
  loading:boolean;

  constructor(private http:HttpClient){
    this.results= [];
    this.loading = false;
 

  }
  // getMonsterUrl(monsterName: string){
  //   let promise = new Promise((resolve, reject )=>{
  //     let apiUrl = `${this.apiRoot}`+monsterName;
  //     this.http.get(apiUrl)
  //       .toPromise()
  //       .then(
  //         res => {
  //           console.log(res.json())
  //         }
  //       )

  //   });
  //   return promise

  // }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'familr';
  // getUrl(name){
  //   this.apiCall.getMonsterUrl(name)
  // }

  

  // constructor( private BeachService: BeachService, private apiCall:FindMonsterService){
    
   
  // }
}

