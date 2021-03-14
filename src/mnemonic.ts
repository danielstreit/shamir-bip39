import { wordlist } from './wordlist';
import { leftPad } from './leftPad';
import createHash from 'create-hash';

/**
 * Adapted/Ported from https://github.com/bitcoinjs/bip39
 *
 * All logic around seeds have been omitted; only logic around
 * entropy and mnemonics are required here.
 */

const invalidMnemonic = 'Invalid mnemonic';
const invalidEntropy = 'Invalid entropy';

function bytesToBinary(bytes: number[]): string {
  return bytes
    .map((x: number): string => leftPad(x.toString(2), '0', 8))
    .join('');
}

function deriveChecksumBits(entropyBuffer: Buffer): string {
  const ENT = entropyBuffer.length * 8;
  const CS = ENT / 32;
  const hash = createHash('sha256')
    .update(entropyBuffer)
    .digest();

  return bytesToBinary(Array.from(hash)).slice(0, CS);
}

/**
 * Convert the mnemonic to entropy, a hex string
 *
 * @param mnemonic An array of words from the wordlist
 */
export function mnemonicToEntropy(mnemonic: string[]): string {
  if (mnemonic.length % 3 !== 0) {
    throw new Error(invalidMnemonic);
  }

  // convert word indices to 11 bit binary strings
  const bits = mnemonic
    .map(word => {
      const index = wordlist.indexOf(word.normalize('NFKD'));

      return leftPad(index.toString(2), '0', 11);
    })
    .join('');

  // split the binary string into entropy and checksum
  const dividerIndex = Math.floor(bits.length / 33) * 32;
  const entropyBits = bits.slice(0, dividerIndex);
  const checksumBits = bits.slice(dividerIndex);

  // calculate the checksum and compare
  const entropyBytes = entropyBits
    .match(/(.{1,8})/g)!
    .map(value => parseInt(value, 2));

  if (entropyBytes.length < 16) {
    throw new Error(invalidMnemonic);
  }
  if (entropyBytes.length > 32) {
    throw new Error(invalidMnemonic);
  }
  /* istanbul ignore if not sure how to produce this given conditions above */
  if (entropyBytes.length % 4 !== 0) {
    throw new Error(invalidMnemonic);
  }

  const entropy = Buffer.from(entropyBytes);
  const newChecksum = deriveChecksumBits(entropy);
  if (newChecksum !== checksumBits) {
    throw new Error(invalidMnemonic);
  }

  return entropy.toString('hex');
}

/**
 * Convert entropy a mnemonic
 *
 * @param entropyHex A hex string
 */
export function entropyToMnemonic(entropyHex: string): string[] {
  const entropy = Buffer.from(entropyHex, 'hex');

  // 128 <= ENT <= 256
  if (entropy.length < 16) {
    throw new TypeError(invalidEntropy);
  }
  if (entropy.length > 32) {
    throw new TypeError(invalidEntropy);
  }
  if (entropy.length % 4 !== 0) {
    throw new TypeError(invalidEntropy);
  }

  const entropyBits = bytesToBinary(Array.from(entropy));
  const checksumBits = deriveChecksumBits(entropy);

  const bits = entropyBits + checksumBits;
  const chunks = bits.match(/(.{1,11})/g)!;

  return chunks.map((binary: string): string => {
    const index = parseInt(binary, 2);
    return wordlist![index];
  });
}

/**
 * Validates the given mnemonic according to the BIP39 standard
 *
 * @param mnemonic As an array of words from the wordlist
 */
export function validateMnemonic(mnemonic: string[]): boolean {
  try {
    mnemonicToEntropy(mnemonic);
  } catch (e) {
    return false;
  }

  return true;
}
