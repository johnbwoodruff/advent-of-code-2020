import { getInput } from '../utils';

const input = getInput('day2');

const matcher = /(\d+)-(\d+) ([a-z]): (.*)/;

// Helper function to parse password and rules
function parseLine(line: string): PasswordLine {
  const lineMatch = line.match(matcher);
  const num1 = parseInt(lineMatch![1], 10);
  const num2 = parseInt(lineMatch![2], 10);
  const character = lineMatch![3];
  const password = lineMatch![4];

  return {
    password,
    rule: {
      num1,
      num2,
      character
    }
  };
}

// Part 1
function part1(input: string[]) {
  return input.reduce((prev: number, curr: string) => {
    const line = parseLine(curr);
    // Check number of times character appears
    const arr = line.password.split(line.rule.character);
    if (arr.length - 1 >= line.rule.num1 && arr.length - 1 <= line.rule.num2) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

// Part 2
function part2(input: string[]) {
  return input.reduce((prev: number, curr: string) => {
    const line = parseLine(curr);
    // Check character positions
    const char1 = line.password[line.rule.num1 - 1];
    const char2 = line.password[line.rule.num2 - 1];
    // If one or the other matches the character rule, but not both
    if (
      (char1 === line.rule.character || char2 === line.rule.character) &&
      char1 !== char2
    ) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

// Log results
const result1 = part1(input);
const result2 = part2(input);
console.log('RESULT 1: ', result1);
console.log('RESULT 2: ', result2);

// Interfaces
interface PasswordLine {
  password: string;
  rule: {
    num1: number;
    num2: number;
    character: string;
  };
}
