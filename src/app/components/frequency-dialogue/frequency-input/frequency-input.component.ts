import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequency-input',
  templateUrl: './frequency-input.component.html',
  styleUrls: ['./frequency-input.component.css']
})
export class FrequencyInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClick(event) {
    alert('click dude ' + event);
  }

}
