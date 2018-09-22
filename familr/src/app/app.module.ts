import { RollService } from './roll.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { BeachService } from './beach.service';
import { MonsterComponent } from './monster/monster.component';


@NgModule({
  declarations: [
    AppComponent,
    RollComponent,
    DayComponent,
    EventComponent,
    MonsterComponent,

    
  
    
  ],
  imports: [
    BrowserModule,
    

    
  ],
  providers: [RollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
