export const fizzBuzzer = (number: number) => {
  let result = '';
  if (number > 0) {
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