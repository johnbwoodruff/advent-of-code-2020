import { getInput } from '../utils';

const input = getInput('day3');

const TREE = '#';

// Helper traverse slopes function to determine proper `x` coordinate
function traverseSlopes(
  currPosition: SlopePosition,
  increase: SlopePosition,
  length: number
): SlopePosition {
  let newPosition = {
    x: (currPosition.x + increase.x) % length,
    y: currPosition.y + increase.y
  };

  return newPosition;
}

// Part 1
function part1(input: string[]): number {
  let x = 0,
    y = 0,
    numTrees = 0;

  const slope = { x: 3, y: 1 };

  for (let i = 0; i < input.length; i = i + slope.y) {
    if (input[i][x] === TREE) {
      numTrees++;
    }

    const newPosition = traverseSlopes({ x, y }, slope, input[i].length);
    x = newPosition.x;
    y = newPosition.y;
  }

  return numTrees;
}

// Part 2
function part2(input: string[]): number {
  const slopes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 }
  ];
  let results: number[] = [];

  slopes.forEach(slope => {
    let x = 0,
      y = 0,
      numTrees = 0;

    for (let i = 0; i < input.length; i = i + slope.y) {
      if (input[i][x] === TREE) {
        numTrees++;
      }

      const newPosition = traverseSlopes({ x, y }, slope, input[i].length);
      x = newPosition.x;
      y = newPosition.y;
    }

    results.push(numTrees);
  });

  return results.reduce((a, b) => a * b, 1);
}

const result1 = part1(input);
const result2 = part2(input);

console.log('PART 1: ', result1);
console.log('PART 2: ', result2);

// Interfaces
interface SlopePosition {
  x: number;
  y: number;
}
