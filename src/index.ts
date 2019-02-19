import { add } from './utils';

class A {
  public value: number;

  public constructor() {
    this.value = add(1, 1);
  }
}

//  eslint-disable-next-line no-console
console.log(new A().value);
