import { entropyToMnemonic, mnemonicToEntropy } from 'bip39';
import { recoverHex } from './recoverHex';
import { Shares } from './types';

export function recoverMnemonic(shares: Shares): string {
  const hexShares = Object.keys(shares).reduce<Record<string, string>>(
    (accum, id) => {
      const hexShare = mnemonicToEntropy(shares[id]);

      accum[id] = hexShare;
      return accum;
    },
    {}
  );
  const entropy = recoverHex(hexShares);
  return entropyToMnemonic(entropy);
}
