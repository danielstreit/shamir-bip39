import { splitMnemonic, recoverMnemonic } from '../src';
import { testVectors } from './vectors';

describe('splitting and recovering a mnemonic', () => {
  it('should recover the mnemonic with the required number of shares', () => {
    const mnemonic =
      'beyond stage sleep clip because twist token leaf atom beauty genius food business side grid unable middle armed observe pair crouch tonight away coconut';

    const shares = splitMnemonic(mnemonic.split(' '), 6, 3);

    const recoveryShares = {
      '1': shares['1'],
      '3': shares['3'],
      '6': shares['6'],
    };
    const recovered = recoverMnemonic(recoveryShares).join(' ');

    expect(recovered).toBe(mnemonic);
  });

  testVectors.forEach(({ mnemonic }) => {
    it('should split and recover the mnemonic', () => {
      const shares = splitMnemonic(mnemonic.split(' '), 6, 4);

      const recovered = recoverMnemonic(shares).join(' ');

      expect(recovered).toBe(mnemonic);
    });
  });
});
