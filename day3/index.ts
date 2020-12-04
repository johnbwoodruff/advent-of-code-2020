import { readFileSync } from 'fs';
import { join } from 'path';

// Get input, split by newline, remove nulls
const input = readFileSync(join(__dirname, './input.txt'))
  .toString()
  .split(/\n/)
  .filter(v => !!v);
