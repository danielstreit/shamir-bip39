import { split, recover } from '../src';
import { testVectors } from './vectors';
import { pick, sampleSize } from 'lodash';

describe('split and recover test vectors', () => {
  testVectors.forEach(({ mnemonic, numShares, threshold }) => {
    it(`should split and recover the mnemonic for ${mnemonic}`, () => {
      const shares = split(mnemonic, numShares, threshold);
      const sampledShareIds = sampleSize(Object.keys(shares), threshold);
      const recovered = recover(pick(shares, sampledShareIds));

      expect(recovered).toBe(mnemonic);
    });
  });

  describe('with fewer than the threshold shares', () => {
    testVectors.forEach(({ mnemonic, numShares, threshold }) => {
      it(`fail recover the mnemonic for ${mnemonic}`, () => {
        const shares = split(mnemonic, numShares, threshold);

        const sampledShareIds = sampleSize(Object.keys(shares), threshold - 1);
        const recovered = recover(pick(shares, sampledShareIds));

        expect(recovered).not.toBe(mnemonic);
      });
    });
  });
});

describe('recover known shares', () => {
  testVectors.forEach(({ mnemonic, knownShares }) => {
    it(`should recover the mnemonic from known shares for ${mnemonic}`, () => {
      const recoveredMnemonic = recover(knownShares);

      expect(recoveredMnemonic).toBe(mnemonic);
    });
  });
});

describe('invalid inputs', () => {
  it('should throw when `numShares` is greater than 2048', () => {
    expect(() => {
      split('abandon abandon', 2050, 3);
    }).toThrow();
  });

  it('should throw when `threshold` is greater than `numShares`', () => {
    expect(() => {
      split('abandon abandon', 5, 6);
    }).toThrow();
  });

  it('should throw when `threshold` is less than 2', () => {
    expect(() => {
      split('abandon abandon', 4, 1);
    }).toThrow();
  });

  it('should throw when a word is not in the word list', () => {
    expect(() => {
      split('abandon abandon notInList', 5, 4);
    }).toThrow();
  });
});
