import {Directive} from '@angular/core';

@Directive({
  selector: '[appFibonacci]'
})

export class FibonacciDirective {

  max = 1000;
  baseLine: Array<any>;
  // baseLine: any;

  constructor() {
  }

  // TODO - Change this later if there is time but works for now.
  getAllFibs() {

    // setup our constants
    const zero: number = 0;
    const one: number = 1;
    const two: number = 2;

    // the fibonacci formula
    this.baseLine = new Array<any>();
    this.baseLine.push(zero);
    this.baseLine.push(one);

    for (let i = two; i <= this.max; i++) {
      const first = this.baseLine[i - one];
      const second = this.baseLine[i - two];
      this.baseLine.push(first + second);
    }
    console.log(this.baseLine);
    return this.baseLine;
  }

  isFibonacci(num: any): boolean {
    const index = this.isItThere(num);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  private isItThere(value): number {
    let found = false;
    let result = -1
    for (let i = 0; i < this.baseLine.length; i++ ) {
      let v = this.baseLine[i];
      if (v == value) {
        result = i;
        found = true;
        break;
      }
    }
    return result;
  }

}
