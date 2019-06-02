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
    // TODO also coule be better with inheritance ... but it works.
    const promptTxt = document.getElementById('prompt') as HTMLInputElement;
    let n: any = promptTxt.value;
    if (promptTxt.value.length >= 1) {
      if (!isNaN(n)) {
        // this.visible = false;
        this.aNumber = promptTxt.value;
        // we have a number houston
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
