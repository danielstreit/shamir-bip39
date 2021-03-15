import { entropyToMnemonic, mnemonicToEntropy } from 'bip39';
import { splitHex } from './splitHex';
import { Shares } from './types';

export function splitMnemonic(
  mnemonic: string,
  numShares: number,
  threshold: number
): Shares {
  const entropy = mnemonicToEntropy(mnemonic);
  const hexShares = splitHex(entropy, numShares, threshold);

  return Object.keys(hexShares).reduce<Shares>((accum, id) => {
    const mnemonicShare = entropyToMnemonic(hexShares[id]);

    accum[id] = mnemonicShare;
    return accum;
  }, {});
}
