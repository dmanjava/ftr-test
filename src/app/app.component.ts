import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  APPSTATUS = AppStatus;

  title = 'FTR Test App';

  // frequency to display output in seconds
  frequency: number;

  // status of our app
  appStatus: string;

  output: string;

  ngOnInit(): void {
    this.setFrequency(0);
    this.appStatus = AppStatus.INIT;
    this.output = '';
  }

  getAppStatus() {
    return this.appStatus;
  }

  setAppStatus(s: string) {
    this.appStatus = s;
  }

  setFrequency(frequency: number) {
    this.frequency = frequency;
  }

  getFrequency(): number {
    return this.frequency;
  }

  haltClick(e) {
    this.setAppStatus(AppStatus.HALT);
    this.output += this.output + '\n' + ' timer ' + this.getAppStatus();
  }

  resumeClick(e) {
    this.setAppStatus(AppStatus.RESUME);
    this.output += this.output + '\n' + ' timer ' + this.getAppStatus();
  }

  quitClick(e) {
    this.setAppStatus(AppStatus.QUIT);
    this.output += this.output + '\n' + ' timer ' + this.getAppStatus();
  }

}

export enum AppStatus {
  PROMPT = 'Please enter a number',
  INIT = 'Initialized...',
  HALT = 'Halted...',
  RESUME = 'Resume...',
  QUIT = 'Done. Mahalo for playing!'
}
