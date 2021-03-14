import { logs, exps } from './tables';
import { MAX_SHARES } from './constants';

/**
 * Evaluate the Lagrange interpolation polynomial at x = `at`
 * using x and y Arrays that are of the same length, with
 * corresponding elements constituting points on the polynomial.
 *
 * Based on https://github.com/grempe/secrets.js/blob/14a4b682a28242b1dbe5506674b5d5f476b78dbf/secrets.js#L385
 */
export function lagrange(at: number, x: number[], y: number[]) {
  let sum = 0;
  let product;

  for (let i = 0; i < x.length; i++) {
    if (y[i]) {
      product = logs[y[i]];

      for (let j = 0; j < x.length; j++) {
        if (i !== j) {
          /* istanbul ignore if */
          if (at === x[j]) {
            // happens when computing a share that is in the list of shares used to compute it
            product = -1; // fix for a zero product term, after which the sum should be sum^0 = sum, not sum^1
            break;
          }
          product =
            (product + logs[at ^ x[j]] - logs[x[i] ^ x[j]] + MAX_SHARES) %
            MAX_SHARES; // to make sure it's not negative
        }
      }

      // though exps[-1] === undefined and undefined ^ anything = anything in
      // chrome, this behavior may not hold everywhere, so do the check
      /* istanbul ignore next */
      sum = product === -1 ? sum : sum ^ exps[product];
    }
  }

  return sum;
}
