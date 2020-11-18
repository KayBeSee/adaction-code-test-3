import { fizzBuzzer, getFizzBuzzTotals } from '../utils/fizzbuzz';

describe('fizzBuzzer function', () => {
  test('it returns 0 if index === 0', () => {
    const result = fizzBuzzer(0);
    expect(result).toEqual(0)
  })

  test('it returns input if input % 3 !== 0 && input % 5 !== 0', () => {
    const result = fizzBuzzer(16);
    expect(result).toEqual(16)
  })

  test('it returns fizz for input % 3 === 0', () => {
    const result = fizzBuzzer(3);
    expect(result).toEqual('lucky')
  })

  test('it returns buzz for input % 5 === 0', () => {
    const result = fizzBuzzer(5);
    expect(result).toEqual('buzz')
  })

  test('it returns fizzbuzz for input % 3 === 0 && input % 5 === 0', () => {
    const result = fizzBuzzer(15);
    expect(result).toEqual('fizzbuzz')
  })

  test('it returns lucky if any digit in the number is a 3', () => {
    const result = fizzBuzzer(13);
    expect(result).toEqual('lucky')
  })
})

describe('getFizzBuzzTotals function', () => {
  test('it returns valid values', () => {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const result = getFizzBuzzTotals(items);

    expect(result).toEqual({
      "buzz": 2,
      "fizz": 3,
      "fizzbuzz": 1,
      "integer": 10,
      "lucky": 2,
    })
  })
})