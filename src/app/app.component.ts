import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  const APPSTATUS = AppStatus;

  title = 'FTR Test App';
  frequency: number;

  appStatus: string;

  ngOnInit(): void {
    this.setFrequency(0);
    this.appStatus = AppStatus.INIT;
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
  }

  resumeClick(e) {
    this.setAppStatus(AppStatus.RESUME);
  }

  quitClick(e) {
    this.setAppStatus(AppStatus.QUIT);
  }
}

export enum AppStatus {
  INIT = 'Initialized...',
  HALT = 'Halted...',
  RESUME = 'Resume...',
  QUIT = 'Done.'
}
