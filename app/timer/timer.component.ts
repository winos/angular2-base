import {Component} from '@angular/core';

@Component({
  selector: 'timer',
  template: `
    <h1>{{minutes}}:{{seconds | number:'2.0'}} </h1>
    <button (click)="togglePause()"> {{btnLabel}}</button>
    `
})
export class TimerComponent {

  seconds: number;
  minutes: number;
  btnLabel: string;
  isPaused: boolean;

  constructor () {
    this.reset();
    setInterval(() => this.tick(), 1000);
  }

  reset () : void {
    this.seconds = 59;
    this.minutes = 24;
    this.btnLabel = "Empezar"
    this.togglePause()
  }

  private tick () : void {
    if (!this.isPaused) {
      this.btnLabel = "Detener"
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes > 0) this.reset();
      }
    }
  }

  public togglePause () : void {
    this.isPaused = !this.isPaused;
    this.btnLabel = this.isPaused ? 'Reanudar' : 'Detener';
  }
}
