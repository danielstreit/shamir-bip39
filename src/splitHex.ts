import { horner } from './horner';
import randomBytes from 'randombytes';
import { hexToIntVector } from './hex';
import { leftPad } from './leftPad';

/**
 * Split a hex secrety into numShares, requiring threshold shares to recover.
 *
 * Note: No input validation at this point.
 * Based on https://github.com/grempe/secrets.js/blob/14a4b682a28242b1dbe5506674b5d5f476b78dbf/secrets.js#L901
 */
export function splitHex(secret: string, numShares: number, threshold: number) {
  return hexToIntVector(secret)
    .map(s => {
      const randomValues = Array(threshold - 1)
        .fill(0)
        .map(() => randomBytes(1))
        .map(buf => buf.toString('hex'))
        .map(v => parseInt(v, 16));

      const coeffs = [s].concat(randomValues);

      return Array(numShares)
        .fill(0)
        .map((_, i) => {
          const x = i + 1;
          return {
            x,
            y: horner(x, coeffs),
          };
        });
    })
    .map(current =>
      current.map(share => {
        const hexY = leftPad(share.y.toString(16), '0', 2);
        return { x: share.x.toString(), y: hexY };
      })
    )
    .reduce<Record<string, string>>((accum, current) => {
      current.forEach(share => {
        if (!accum[share.x]) {
          accum[share.x] = share.y;
        } else {
          accum[share.x] += share.y;
        }
      });
      return accum;
    }, {});
}
