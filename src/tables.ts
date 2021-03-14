import { BIT_SIZE, PRIMITIVE_POLYNOMIAL, MAX_SHARES } from './constants';

export const logs: number[] = [];
export const exps: number[] = [];

for (let i = 0, x = 1; i < BIT_SIZE; ++i) {
  exps[i] = x;
  logs[x] = i;
  x = x << 1;
  if (x >= BIT_SIZE) {
    x = x ^ PRIMITIVE_POLYNOMIAL;
    x = x & MAX_SHARES;
  }
}
