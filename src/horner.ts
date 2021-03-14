import { MAX_SHARES } from './constants';
import { exps, logs } from './tables';

/**
 * Evaluate the given polinomial over GF(256) (with MAX_SHARES = 255)
 *
 * https://github.com/grempe/secrets.js/blob/14a4b682a28242b1dbe5506674b5d5f476b78dbf/secrets.js#L364
 */
export function horner(x: number, coeffs: number[]) {
  let fx = 0;

  for (let i = coeffs.length - 1; i >= 0; --i) {
    if (fx !== 0) {
      fx = exps[(logs[x] + logs[fx]) % MAX_SHARES] ^ coeffs[i];
    } else {
      fx = coeffs[i];
    }
  }

  return fx;
}
