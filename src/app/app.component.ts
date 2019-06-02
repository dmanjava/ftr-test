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

  // our app status enum...
  APPSTATUS = AppStatus;

  // are we initizialized and united?
  inited: boolean;

  title = 'FTR Test App';

  // frequency to display output in seconds
  frequency: number;

  // TODO this is our timer for now
  timerPaused: boolean;
  timer: any;

  // status of our app
  appStatus: string;

  // this is our output
  output: string;

  // this is our array or numbers
  numbers: Array<MyNumber>;

  // had to...
  promptDisplaying: boolean;

  ngOnInit(): void {
    this.inited = false;
    this.setFrequency(0);
    this.appStatus = AppStatus.INIT;
    this.output = '';
    this.numbers = new Array<MyNumber>();
    this.promptDisplaying = false;
  }


  // TODO this only be called by the FrequencyDialogComponent upon validation
  // FIX
  initPromptDialog() {
    debugger;
    this.initTimer();

    // change this after timer is working.
    this.showPromptDialog(true);
  }

  initTimer() {
    debugger;
    // TODO do this here for now
    const fmillis = this.frequency * 1000
    this.timerPaused = false;
    this.timer = setInterval(() => {
      if (!this.timerPaused) {
        this.updateOutPut();
      }
    }, fmillis);

    this.setAppStatus(AppStatus.RESUME);

  }

  // TODO this displays the prompt and the last output at the same time
  promptAndDisplay() {
    this.promptDialogComponent.visible = true;
  }

  isPromptDispalying(): boolean {
    return this.promptDisplaying;
  }

  showPromptDialog(show: boolean) {
    this.promptDisplaying = show;
    this.promptDialogComponent.visible = this.promptDisplaying;
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
    this.timerPaused = true;
    this.setAppStatus(AppStatus.HALT);
    this.updateOutPut();
  }

  resumeClick(e) {
    this.timerPaused = false;
    this.setAppStatus(AppStatus.RESUME);
    this.updateOutPut();
  }

  quitClick(e) {
    this.setAppStatus(AppStatus.QUIT);
    this.updateOutPut();
    clearInterval(this.timer);
  }

  addNumber(anum: MyNumber) {
    debugger;
    this.output += '\n You entered: ' + anum + '.';
    this.numbers.push(anum);
    // this.showPromptDialog(false);
  }

  updateOutPut(s?): string {
    debugger;
    // timer notification
    this.output += '\n' + ' timer ' + this.getAppStatus();

    // string to update with
    if (s) {
      this.output += '\n' + s;
    }
    return this.output;
  }

}

export enum AppStatus {
  PROMPT = 'Please enter a number',
  INIT = 'Initialized...',
  HALT = 'Halted...',
  RESUME = 'Running...',
  QUIT = 'Done. Mahalo for playing!'
}

export class MyNumber {
   aNumber: number;
   isFib: boolean;

  getNumber(): number {
    return this.aNumber;
  }

  setNumber(num: number) {
    this.aNumber = num;
  }

}
