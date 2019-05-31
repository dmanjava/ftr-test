import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
    if ( freqTxt.value.length >= 1 ) {
      this.appComponent.setFrequency(this.frequency);
      this.visible = false;
    } else {
      alert('Enter a valid frequency in seconds.');
      freqTxt.focus();
    }

  }

  isNumber(): boolean {
    let num: number;
    try {
      num = this.frequency;
      return true;
    } catch (e) {
      this.frequency = 0;
      return false;
    }
  }


}
