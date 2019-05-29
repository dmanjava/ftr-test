import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {DialogModule} from 'primeng/dialog';
import {FrequencyDialogueComponent} from './components/frequency-dialogue/frequency-dialogue.component';
import { FrequencyInputComponent } from './components/frequency-dialogue/frequency-input/frequency-input.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FrequencyDialogueComponent,
    FrequencyInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      [
        {path: 'main', component: MainComponent}
      ]
    ),
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
