# Shamir BIP39

Applies [Shamir's Secret Sharing Scheme](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) to [BIP39 mnemonics](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

Proposed specification: https://github.com/ethereum/EIPs/pull/3445

## Installation

Yarn:

```
yarn add shamir-bip39
```

NPM:

```
npm install --save shamir-bip39
```

## API

### Split Mnemonic

Split a BIP39 mnemonic into the specified number of shares such that the threshold number of shares are required to recover the original. Each share is a BIP39 mnemonic and an id. **Both the mnemonic and the id are required to recover the original mnemonic.**

Accepts a BIP39 mnemonic and returns a `Shares` map, in which the keys are the share id's and the values are the BIP39 mnemonics.

```ts
import { splitMnemonic } from 'shamir-bip39';

const mnemonic =
  'jelly better achieve collect unaware mountain thought cargo oxygen act hood bridge';

// Generate 3 shares and require 2 to recover the mnemonic
const shares = splitMnemonic(mnemonic, 3, 2);

// `splitMnemonic` will generate different shares on every run.
// One example result:
{
  '1':
    'liquid use shine dentist aspect brief neither learn hope tourist tray cinnamon',
  '2':
    'liberty antique mean describe wrestle man latin right gown shield decide dynamic',
  '3':
    'install video evil clutch butter asset answer toss noodle captain rate jacket',
};
```

### Recover Mnemonic

Given a `Shares` object, returns the recovered BIP39 mnemonic.

Note: If the number of shares provided does not meet the threshold, `recoverMnemonic` will still return a valid BIP39 mnemonic. It just won't be the same as the initial one stored. The user is responsible for providing the minimum number of shares.

```ts
import { recoverMnemonic } from 'shamir-bip39';

const shares = {
  '1':
    'liquid use shine dentist aspect brief neither learn hope tourist tray cinnamon',
  '3':
    'install video evil clutch butter asset answer toss noodle captain rate jacket',
};

const originalMnemonic = recoverMnemonic(shares);

expect(originalMnemonic)).toBe(
  'jelly better achieve collect unaware mountain thought cargo oxygen act hood bridge'
);
```

## Acknowledgements

Heavily borrowed from [grempe's secrets.js](https://github.com/grempe/secrets.js) for the implementation of Shamir's and the finite field arithmetic.

With additional inspiration from

- [jwerle's sharirs-secret-sharing](https://github.com/jwerle/shamirs-secret-sharing)
- [ilap's slip-39-js](https://github.com/ilap/slip39-js)
- [iancoleman's shamir39](https://github.com/iancoleman/shamir39)
