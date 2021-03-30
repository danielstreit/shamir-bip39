import { BIT_SIZE } from './constants';
import randomBytes from 'randombytes';

const hex = 'ffffffff';
const MAX = parseInt(hex, 16) + 1;

/**
 * Return a random element from GF(BIT_SIZE)
 */
export function random() {
  const rand = parseInt(randomBytes(hex.length / 2).toString('hex'), 16) / MAX;

  return Math.floor(rand * BIT_SIZE);
}
