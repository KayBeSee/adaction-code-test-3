import { fizzBuzzer } from '../utils/fizzbuzz';

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