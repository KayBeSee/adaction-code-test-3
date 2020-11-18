import { FizzBuzzReturnValue } from '../types';

export const fizzBuzzer = (number: number): FizzBuzzReturnValue | number => {
  let result = '';
  if (number > 0) {
    // convert number to string and check each digit for 3
    const numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
      if (numberAsString.charAt(i) === '3') {
        return 'lucky' as FizzBuzzReturnValue;
      }
    }

    if (number % 3 === 0) {
      result = result.concat('fizz')
    }
    if (number % 5 === 0) {
      result = result.concat('buzz');
    }
  }

  if (result.length === 0) {
    return number;
  }

  return result as FizzBuzzReturnValue;
}

export const getFizzBuzzTotals = (numbers: number[]) => {
  const totalMap = {
    "integer": 0,
    "fizz": 0,
    "buzz": 0,
    "fizzbuzz": 0,
    "lucky": 0
  }

  for (let i = 0; i < numbers.length; i++) {
    const value = fizzBuzzer(numbers[i]);
    if (typeof value === 'number') {
      totalMap['integer'] = totalMap['integer'] + 1;
    } else {
      totalMap[value] = totalMap[value] + 1;
    }
  }

  return totalMap;
}