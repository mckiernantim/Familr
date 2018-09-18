import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    RollComponent,
    DayComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
