function fizzBuzz(start, end) {
  return Array.from({ length: end - start + 1 }, (v, k) => {
    if (k + start === 0) {
      return 0
    }

    if ((k + start) % 3 === 0) {
      return 'Fizz'
    }

    return k + start
  })
}

module.exports = fizzBuzz
