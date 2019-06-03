import {Component, OnInit, ViewChild} from '@angular/core';
import {FrequencyDialogComponent} from './components/frequency-dialog/frequency-dialog.component';
import {PromptDialogComponent} from './components/prompt-dialog/prompt-dialog.component';
import {FibonacciDirective} from './util/fibonacci.directive';

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

  title = 'FTR - Fibonacci Fun';

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
  numbers: Array<number>;

  // this our numbers with frequency and is fib
  freqNumbers: Array<MyNumber>;

  // this is the numbers with frequency sorted in descending order
  sortedFreqNumbers: Array<MyNumber>;

  // had to...
  promptDisplaying: boolean;

  // our fibonacci helper
  fib: FibonacciDirective;

  ngOnInit(): void {
    this.inited = false;
    this.setFrequency(0);
    this.appStatus = AppStatus.INIT;
    this.output = '';
    this.numbers = new Array<number>();
    this.freqNumbers = new Array<MyNumber>();
    // init our sorted frequency numbers each time
    this.sortedFreqNumbers = new Array<MyNumber>();

    this.promptDisplaying = false;
    // initialize our fibs
    this.fib = new FibonacciDirective();
    this.updateOutPut('Got the first ' + this.fib.max + ' Fibs: \n' + this.fib.getAllFibs());
  }


  // TODO this only be called by the FrequencyDialogComponent upon validation
  // FIX
  initPromptDialog() {
    this.initTimer();

    // change this after timer is working.
    this.showPromptDialog(true);
  }

  initTimer() {
    // TODO do this here for now
    const fmillis = this.frequency * 1000;
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
    this.showPromptDialog(false);
  }

  updateOutPut(s?): string {
    let tempoutput = this.output;
    // timer notification
    this.output = '\n' + ' timer ' + this.getAppStatus() + '\n' + tempoutput;

    if (this.freqNumbers.length > 0) {
      this.output = '\n\n ' + JSON.stringify(this.freqNumbers) + '\n' + tempoutput;
    }

    // string to update with
    if (s) {
      this.output = '\n' + s + '\n' + tempoutput;
    }
    return this.output;
  }

  addNumber(anum: number) {
    debugger;
    this.updateOutPut('\n You entered: ' + anum + '.');
    this.numbers.push(anum);

    // create our MyNumber
    let tempmynumber = new MyNumber();
    tempmynumber.aNumber = anum;
    tempmynumber.isFib = false;
    tempmynumber.frequency = 1;

    const result = this.fib.isFib(anum);
    if (result) {
      // update if we have a fib
      tempmynumber.isFib = true;
      const tempoutput = 'FIB';
      // check if it already been added.
      this.calculateAndOrderFreqency(tempmynumber);

      this.updateOutPut(tempoutput);
    } else {
      // check if it already been added.
      this.calculateAndOrderFreqency(tempmynumber);
    }
  }

  calculateAndOrderFreqency(n: MyNumber): Array<MyNumber> {
    debugger;
    let found = false;

    // add only the first element this way
    if (this.freqNumbers.length === 0) {
      this.freqNumbers.push(n);
      return this.freqNumbers;
    }

    // check if we already have that number
    for (let i = 0; i < this.freqNumbers.length; i++) {
      let mynum = this.freqNumbers[i];

      // did we find it add it to the new sorted frequency array and
      // increment the frequency
      if (n.aNumber == mynum.aNumber) {
        // this.freqNumbers[i].frequency++;
        mynum.frequency++;
        this.sortedFreqNumbers.push(mynum);
        found = true;
        break;
      }
    }

    // if we did not find it add the new number to our freq and sorted arrays
    if (!found) {
      this.freqNumbers.push(n);
      this.sortedFreqNumbers.push(n);
    }
    return this.freqNumbers;
  }

  doSort(): Array<MyNumber> {


    return this.sortedFreqNumbers;
  }
}

export enum AppStatus {
  PROMPT = 'Please enter a number',
  INIT = 'Initialized...',
  HALT = 'Halted...',
  RESUME = 'Running...',
  QUIT = 'Done. Mahalo for playing Fibonacci Fun!'
}

export class MyNumber {
  aNumber: number;
  frequency: number;
  isFib: boolean;
}
