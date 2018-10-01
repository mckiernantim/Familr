import { RollService } from './roll.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { BeachService } from './beach.service';
import { MonsterComponent } from './monster/monster.component';
import { CreatureComponent } from './creature/creature.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RollComponent,
    DayComponent,
    EventComponent,
    MonsterComponent,
    CreatureComponent,
    WeatherComponent,
    

    
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    

    
  ],
  providers: [RollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
