import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-frequency-dialogue',
  templateUrl: './frequency-dialogue.component.html',
  styleUrls: ['./frequency-dialogue.component.css']
})
export class FrequencyDialogueComponent implements OnInit {
  @Input() appComponent: AppComponent;
  form: any;
  visible = true;
  frequency: any;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {

  }

  btnClick(event) {
    alert('click dude ' + JSON.stringify(event));
    this.appComponent.setFrequency(this.frequency);
    this.visible = false;
  }

  isNumber(): boolean {
    let num: number;
    try {
      num = this.frequency;
      return true;
    }
    catch (e) {
      this.frequency = 0;
      return false;
    }
  }


}
