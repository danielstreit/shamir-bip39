import { splitMnemonic, recoverMnemonic } from '../src';
import { generateMnemonic } from 'bip39';
import { testVectors } from './vectors';
import { pick, sampleSize } from 'lodash';

describe('end to end', () => {
  [128, 160, 192, 224, 256].forEach(strength => {
    it(`should split and recover a mnemonic of strength ${strength}`, () => {
      const mnemonic = generateMnemonic(strength);
      const shares = splitMnemonic(mnemonic, 5, 3);
      const recoveredMnemonic = recoverMnemonic(pick(shares, ['1', '3', '4']));

      expect(recoveredMnemonic).toBe(mnemonic);
    });
  });
});

describe('split and recover test vectors', () => {
  testVectors.forEach(({ entropy, mnemonic, numShares, threshold }) => {
    it(`should split and recover the mnemonic for ${entropy}`, () => {
      const shares = splitMnemonic(mnemonic, numShares, threshold);
      const sampledShareIds = sampleSize(Object.keys(shares), threshold);
      const recovered = recoverMnemonic(pick(shares, sampledShareIds));

      expect(recovered).toBe(mnemonic);
    });
  });

  describe('with fewer than the threshold shares', () => {
    testVectors.forEach(({ entropy, mnemonic, numShares, threshold }) => {
      it(`fail recover the mnemonic for ${entropy}`, () => {
        const shares = splitMnemonic(mnemonic, numShares, threshold);
        const sampledShareIds = sampleSize(Object.keys(shares), threshold - 1);
        const recovered = recoverMnemonic(pick(shares, sampledShareIds));

        expect(recovered).not.toBe(mnemonic);
      });
    });
  });
});

describe('recover known shares', () => {
  testVectors.forEach(({ entropy, mnemonic, knownShares }) => {
    it(`should recover the mnemonic from known shares for ${entropy}`, () => {
      const recoveredMnemonic = recoverMnemonic(knownShares);

      expect(recoveredMnemonic).toBe(mnemonic);
    });
  });
});
