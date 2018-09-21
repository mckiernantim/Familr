
import { Component,} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'familr';
  private apiUrl = `http://dnd5eapi.co/api/`;
  data: any = {};
  

  constructor(){
    console.log("Greetings API should work soon");
   
  }
}

