export const fizzBuzzer = (number: number) => {
  let result = '';
  if (number > 0) {
    // convert number to string and check each digit for 3
    const numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
      if (numberAsString.charAt(i) === '3') {
        return 'lucky';
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

  return result;
}