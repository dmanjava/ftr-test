import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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
    this.appComponent.setFrequency(34);
    this.visible = false;
  }


}
