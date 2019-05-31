import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-frequency-dialogue',
  templateUrl: './frequency-dialogue.component.html',
  styleUrls: ['./frequency-dialogue.component.css']
})
export class FrequencyDialogueComponent implements OnInit {
  @Input() appComponent: AppComponent;
  visible = true;
  frequency: any;

  constructor() {
  }

  ngOnInit() {

  }

  btnClick(event) {
    const freqTxt = document.getElementById('freq') as HTMLInputElement;
    debugger;
    if (freqTxt.value.length >= 1) {
      if (!isNaN(freqTxt.value)) {
        this.appComponent.setFrequency(this.frequency);
        this.visible = false;
      } else {
        alert('Please enter a valid number.');
        freqTxt.value = '';
        freqTxt.focus();
      }

    } else {
      alert('Please enter a frequency in seconds.');
      freqTxt.focus();
    }

  }

}
