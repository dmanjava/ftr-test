import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-frequency-dialogue',
  templateUrl: './frequency-dialog.component.html',
  styleUrls: ['./frequency-dialog.component.css']
})
export class FrequencyDialogComponent implements OnInit {
  @Input() appComponent: AppComponent;
  visible = true;
  frequency: any;

  constructor() {
  }

  ngOnInit() {

  }

  btnClick(event) {
    // TODO - could be better
    const freqTxt = document.getElementById('freq') as HTMLInputElement;
    let f: any = freqTxt.value;
    if (freqTxt.value.length >= 1 && freqTxt.value !== '0') {
      if (!isNaN(f)) {
        this.appComponent.setFrequency(this.frequency);

        // TODO initialize the timer not the prompt dialog soon... dude
        this.appComponent.initPromptDialog();
        this.visible = false;
      } else {
        alert('Please enter a valid number greater than 0.');
        freqTxt.value = '';
        freqTxt.focus();
      }

    } else {
      alert('Please enter a frequency in seconds greater than 0.');
      freqTxt.focus();
    }

  }

}
