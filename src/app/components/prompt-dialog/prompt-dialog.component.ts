import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.css']
})
export class PromptDialogComponent implements OnInit {
  @Input() appComponent: AppComponent;
  visible = false;
  aNumber: any;

  constructor() {
  }

  ngOnInit() {
  }

  btnClick(event) {
    const promptTxt = document.getElementById('prompt') as HTMLInputElement;
    debugger;
    if (promptTxt.value.length >= 1) {
      if (!isNaN(promptTxt.value)) {
        this.visible = false;
        this.aNumber = promptTxt.value;
        this.appComponent.addNumber(this.aNumber);
      } else {
        alert('Please enter a valid number.');
        promptTxt.value = '';
        promptTxt.focus();
      }

    } else {
      alert('Number cannot be blank.');
      promptTxt.focus();
    }
  }
}
