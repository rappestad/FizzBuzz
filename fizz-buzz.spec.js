const expect = require('chai').expect
const fizzBuzz = require('./fizz-buzz')

describe('FizzBuzz', () => {
  it('should return [0] given (0, 0)', () => {
    expect(fizzBuzz(0, 0)).to.deep.equal([0])
  })
})
