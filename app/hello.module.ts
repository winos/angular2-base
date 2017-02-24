import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent }  from './hello.component';
import { TimerComponent }  from './timer/timer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloComponent, TimerComponent],
  bootstrap:    [ HelloComponent, TimerComponent]
})
export class HelloModule { }
