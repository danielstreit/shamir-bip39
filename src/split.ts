import { Shares } from './types';
import { MAX_SHARES } from './constants';
import { random } from './random';
import { horner } from './horner';
import { mnemonictToIntVector } from './mnemonicToIntVector';
import { wordlist } from './wordlist';

const INVALID_INPUT = 'Invalid input';

export function split(
  mnemonic: string,
  numShares: number,
  threshold: number
): Shares {
  if (numShares > MAX_SHARES) {
    throw new Error(INVALID_INPUT);
  }
  if (threshold < 2) {
    throw new Error(INVALID_INPUT);
  }
  if (threshold > numShares) {
    throw new Error(INVALID_INPUT);
  }

  return mnemonictToIntVector(mnemonic)
    .map(s => {
      const randomValues = Array(threshold - 1)
        .fill(0)
        .map(() => random());

      const coeffs = [s].concat(randomValues);

      return Array(numShares)
        .fill(0)
        .map((_, i) => {
          const x = i + 1;
          return { x, y: horner(x, coeffs) };
        });
    })
    .map(current =>
      current.map(share => ({ x: share.x.toString(), y: wordlist[share.y] }))
    )
    .reduce<Shares>((accum, current) => {
      // TODO: Simplify with a map?
      current.forEach(share => {
        if (!accum[share.x]) {
          accum[share.x] = share.y;
        } else {
          accum[share.x] += ` ${share.y}`;
        }
      });

      return accum;
    }, {});
}
