export default class Blank {
  constructor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
  }

  combineBlank() {
    return this.input1.concat(this.input2);
  }
}