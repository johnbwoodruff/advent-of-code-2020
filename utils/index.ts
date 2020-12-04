import { readFileSync } from 'fs';
import { join } from 'path';

export function getInput(filename: string) {
  return readFileSync(join(__dirname, '../inputs', `${filename}.txt`))
    .toString()
    .split(/\n/)
    .filter(v => !!v); // Remove empty lines
}
