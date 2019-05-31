import {Component, OnInit, ViewChild} from '@angular/core';
import {FrequencyDialogComponent} from './components/frequency-dialog/frequency-dialog.component';
import {PromptDialogComponent} from './components/prompt-dialog/prompt-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('frequencyDialogComponent') frequencyDialogComponent: FrequencyDialogComponent;
  @ViewChild('promptDialogComponent') promptDialogComponent: PromptDialogComponent;

  APPSTATUS = AppStatus;

  title = 'FTR Test App';

  // frequency to display output in seconds
  frequency: number;

  // status of our app
  appStatus: string;

  // this is our output
  output: string;

  //this is our array or numbers
  numbers: Array<MyNumber>;

  ngOnInit(): void {
    this.setFrequency(0);
    this.appStatus = AppStatus.INIT;
    this.output = '';
    this.numbers = new Array<MyNumber>();
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

  addNumber(anum: MyNumber) {
    this.numbers.push(anum);
  }

  initPromptDialog(){
    this.promptDialogComponent.visible = true;
  }

}

export enum AppStatus {
  PROMPT = 'Please enter a number',
  INIT = 'Initialized...',
  HALT = 'Halted...',
  RESUME = 'Resume...',
  QUIT = 'Done. Mahalo for playing!'
}

export class MyNumber {
  private aNumber: number;
  private isFib: boolean;

  getNumber(): number {
    return this.aNumber;
  }

  setNumber(num: number) {
    this.aNumber = num;
  }

}
