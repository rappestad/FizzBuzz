const expect = require('chai').expect
const fizzBuzz = require('./fizz-buzz')

describe('FizzBuzz', () => {
  it('should return [0] given (0, 0)', () => {
    expect(fizzBuzz(0, 0)).to.deep.equal([0])
  })

  it('should return [0, 1] given (0, 1)', () => {
    expect(fizzBuzz(0, 1)).to.deep.equal([0, 1])
  })

  it('should return [0, 1, 2] given (0, 2)', () => {
    expect(fizzBuzz(0, 2)).to.deep.equal([0, 1, 2])
  })

  it('should return [1, 2, "Fizz"] given (1, 3)', () => {
    expect(fizzBuzz(1, 3)).to.deep.equal([1, 2, 'Fizz'])
  })

  it('should return ["Fizz", 4, "Buzz"] given (3, 5)', () => {
    expect(fizzBuzz(3, 5)).to.deep.equal(['Fizz', 4, 'Buzz'])
  })
})
