import {
  entropyToMnemonic,
  mnemonicToEntropy,
  validateMnemonic,
} from '../src/mnemonic';
import { testVectors } from './vectors';

/**
 * Test cases adapted from https://github.com/bitcoinjs/bip39/blob/master/test/index.js
 */

describe('mnemonicToEntropy', () => {
  testVectors.forEach(({ entropy, mnemonic }) => {
    it('should convert the mnemonic to the expected entropy', () => {
      const result = mnemonicToEntropy(mnemonic.split(' '));
      expect(result).toBe(entropy);
    });
  });
});

describe('entropyToMnemonic', () => {
  testVectors.forEach(({ entropy, mnemonic }) => {
    it('should convert the entropy to the expected mnemonic', () => {
      const result = entropyToMnemonic(entropy).join(' ');
      expect(result).toBe(mnemonic);
    });
  });
});

describe('validateMnemonic', () => {
  it('should fail for a mnemonic that is too short', () => {
    const mnemonic = 'sleep kitten';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(false);
  });

  it('should fail for a mnemonic that is too short', () => {
    const mnemonic = 'sleep kitten sleep kitten sleep kitten';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(false);
  });

  it('should fail for a mnemonic that is too long', () => {
    const mnemonic =
      'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about end grace oxygen maze bright face loan ticket trial leg cruel lizard bread worry reject journey perfect chef section caught neither install industry';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(false);
  });

  it('should fail if the mnemonic words are not in the word list', () => {
    const mnemonic =
      'turtle front uncle idea crush write shrug there lottery flower risky shell';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(false);
  });

  it('should fail for invalid checksum', () => {
    const mnemonic =
      'sleep kitten sleep kitten sleep kitten sleep kitten sleep kitten sleep kitten';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(false);
  });

  it('should pass for a valid mnemonic', () => {
    const mnemonic =
      'board flee heavy tunnel powder denial science ski answer betray cargo cat';
    const result = validateMnemonic(mnemonic.split(' '));
    expect(result).toBe(true);
  });
});

describe('invalid entropy', () => {
  it('should throw when entropy is empty', () => {
    expect(() => {
      entropyToMnemonic('');
    }).toThrow(/^Invalid entropy$/);
  });

  it('should throw when entropy size is not a multiple of 4 bytes', () => {
    expect(() => {
      entropyToMnemonic(new Array(17).fill('00').join(''));
    }).toThrow(/^Invalid entropy$/);
  });

  it('should throw when entropy is longer than 1024 bits', () => {
    expect(() => {
      entropyToMnemonic(new Array(1028).fill('00').join(''));
    }).toThrow(/^Invalid entropy$/);
  });
});
