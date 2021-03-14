import { splitHex } from '../src/splitHex';
import { recoverHex } from '../src/recoverHex';

describe('Hex and recover a hex secret', () => {
  [
    { secret: '0000', numShares: 3, threshold: 2 },
    { secret: 'abcdef', numShares: 3, threshold: 2 },
    { secret: '0a', numShares: 3, threshold: 2 },
    { secret: '1289850912345a15ecdf', numShares: 3, threshold: 2 },
    { secret: '0000', numShares: 8, threshold: 5 },
    { secret: '0000', numShares: 10, threshold: 6 },
  ].forEach(({ secret, numShares, threshold }) => {
    it(`recover secret ${secret} from an ${threshold} of ${numShares} Hex, using all shares`, () => {
      const shares = splitHex(secret, numShares, threshold);
      const recovered = recoverHex(shares);

      expect(recovered).toBe(secret);
    });
  });
});
