function fizzBuzz(start, end) {
  return Array.from({ length: end - start + 1 }, (v, k) => {
    const currentNumber = k + start

    if (currentNumber === 0) {
      return 0
    }

    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      return 'FizzBuzz'
    }

    if (currentNumber % 3 === 0) {
      return 'Fizz'
    }

    if (currentNumber % 5 === 0) {
      return 'Buzz'
    }

    return currentNumber
  })
}

module.exports = fizzBuzz
