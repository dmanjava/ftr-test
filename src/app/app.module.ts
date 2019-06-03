import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {DialogModule} from 'primeng/dialog';
import {FrequencyDialogComponent} from './components/frequency-dialog/frequency-dialog.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromptDialogComponent} from './components/prompt-dialog/prompt-dialog.component';
import { FibonacciDirective } from './util/fibonacci.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FrequencyDialogComponent,
    PromptDialogComponent,
    FibonacciDirective
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
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
