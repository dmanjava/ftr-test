import {Directive} from '@angular/core';

@Directive({
  selector: '[appFibonacci]'
})

export class FibonacciDirective {

  max = 1000;
  baseLine: any;

  constructor() {
  }

  // TODO - Change this later if there is time but works for now.
  getAllFibs() {

    // setup our constants
    const zero = 0;
    const one = 1;
    const two = 2;

    this.baseLine = [zero, one];
    for (let i = two; i <= this.max; i++) {
      const first = this.baseLine[i - one];
      const second = this.baseLine[i - two];
      const result = first + second;
      this.baseLine.push(first + second);
    }
    console.log(this.baseLine);
    debugger;
    return this.baseLine;
  }

}
