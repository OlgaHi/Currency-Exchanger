import Blank from '../src/js/blank.js'

describe('Blank', () => {

  let blank;

  beforeEach(() => {
    blank = new Blank("inputString1","inputString2");
  })

  test('should correctly create a Blank object using two inputes', () => {
    expect(blank.input1).toEqual("inputString1");
    expect(blank.input2).toEqual("inputString2");
  })
  test('should correctly create a rectangle object using two sides', () => {
    expect(blank.combineBlank()).toEqual("inputString1inputString2");
  })
});