import { input } from './input';

function part1(input: number[]): number {
  for (let num of input) {
    if(input.includes(2020 - num)) {
      return num * (2020 - num);
    }
  }
  throw new Error('WAT');
}

function part2(input: number[]): number {
  for (let num of input) {
    for (let num2 of input) {
      if(input.includes(2020 - num - num2)) {
        return num * num2 * (2020 - num - num2);
      }
    }
  }
  throw new Error('WAT');
}

const result1 = part1(input);
const result2 = part2(input);
console.log('RESULT 1: ', result1);
console.log('RESULT 2: ', result2);
