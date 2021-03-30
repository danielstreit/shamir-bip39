import { wordlist } from './wordlist';

export function mnemonictToIntVector(mnemonic: string): number[] {
  return mnemonic.split(' ').map(word => {
    const i = wordlist.indexOf(word);
    if (i === -1) {
      throw new Error(`${word} no in word list`);
    }
    return i;
  });
}
