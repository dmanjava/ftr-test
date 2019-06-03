import {Directive} from '@angular/core';

@Directive({
  selector: '[appFibonacci]'
})

export class FibonacciDirective {

  max = 1000;

  constructor() {
  }

  getFibonacciNumbers(amax?: number) {
    if (amax) {
      this.max = amax;
    }


  }

}
