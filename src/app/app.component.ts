import {Component, ViewChild} from '@angular/core';
import {FrequencyDialogueComponent} from './components/frequency-dialogue/frequency-dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dialog') dialog: FrequencyDialogueComponent;

  title = 'For The Record Test';

  frequency: number;

  setFrequency(frequency: number) {
    this.frequency = frequency;
  }

  getFrequency(): number {
    return this.frequency;
  }
}
