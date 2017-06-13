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

  it('should return ["FizzBuzz", 16, 17] given (15, 17)', () => {
    expect(fizzBuzz(15, 17)).to.deep.equal(['FizzBuzz', 16, 17])
  })

  it('should return correct answers given (1, 50)', () => {
    expect(fizzBuzz(1, 50)).to.deep.equal([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz',
      'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz',
      31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz',
      41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz'
    ])
  })
})
