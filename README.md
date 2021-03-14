# Shamir BIP39

Applies [Shamir's Secret Sharing Scheme](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) to [BIP39 mnemonics](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

## API

### Split Mnemonic

Split a BIP39 mnemonic into the specified number of shares such that the threshold number of shares are required to recover the original. Each share is a BIP39 mnemonic and an id. **Both the mnemonic and the id are required to recover the original mnemonic.**

Accepts the mnemonic as an array of words and returns a `Shares` object, in which the keys are the share id's and the values are the share mnemonics, as an array of strings.

```ts
import { splitMnemonic } from 'shamir-bip39';

const mnemonic =
  'board flee heavy tunnel powder denial science ski answer betray cargo cat';

// Generate 3 shares and require 2 to recover the mnemonic
const shares = splitMnemonic(mnemonic.split(' '), 3, 2);

// Note that `splitMnemonic` will generate different shares on every run.
// One example result:
expect(shares).toEqual({
  '1': [
    'wire',
    'rabbit',
    'crowd',
    'dish',
    'vault',
    'lab',
    'subject',
    'just',
    'taxi',
    'million',
    'suspect',
    'kingdom',
  ],
  '2': [
    'snow',
    'genre',
    'stone',
    'ketchup',
    'summer',
    'reward',
    'pact',
    'cook',
    'ring',
    'solution',
    'nice',
    'practice',
  ],
  '3': [
    'cinnamon',
    'measure',
    'mask',
    'proof',
    'limb',
    'yard',
    'meadow',
    'orient',
    'horse',
    'finish',
    'home',
    'van',
  ],
});
```

### Recover Mnemonic

Given a `Shares` object, it will return the recovered BIP39 mnemonic, as an array of strings.

Note: If the number of shares provided does not meet the threshold, `recoverMnemonic` will still return a valid BIP39 mnemonic. It just won't be the same as the initial one stored. The user is responsible for providing the minimum number of shares.

```ts
import { recoverMnemonic } from 'shamir-bip39';

const shares = {
  '2': [
    'snow',
    'genre',
    'stone',
    'ketchup',
    'summer',
    'reward',
    'pact',
    'cook',
    'ring',
    'solution',
    'nice',
    'practice',
  ],
  '3': [
    'cinnamon',
    'measure',
    'mask',
    'proof',
    'limb',
    'yard',
    'meadow',
    'orient',
    'horse',
    'finish',
    'home',
    'van',
  ],
};

const originalMnemonic = recoverMnemonic(shares);

expect(originalMnemonic.join(' ')).toBe(
  'board flee heavy tunnel powder denial science ski answer betray cargo cat'
);
```
