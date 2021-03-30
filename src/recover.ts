import { Shares } from './types';
import { mnemonictToIntVector } from './mnemonicToIntVector';
import { wordlist } from './wordlist';
import { lagrange } from './lagrange';

export function recover(shares: Shares) {
  const x: number[] = [];
  const y: number[][] = [];

  // Convert each share to an int vector and then rotate
  // those arrays where the first element of each row is converted to
  // its own array, the second element of each to its own Array, and so on for all of the rest.
  // Essentially zipping all of the shares together.
  //
  // e.g.
  //   [ 193, 186, 29, 150, 5, 120, 44, 46, 49, 59, 6, 1, 102, 98, 177, 196 ]
  //   [ 53, 105, 139, 49, 187, 240, 91, 92, 98, 118, 12, 2, 204, 196, 127, 149 ]
  //   [ 146, 211, 249, 167, 209, 136, 118, 114, 83, 77, 10, 3, 170, 166, 206, 81 ]
  //
  // becomes:
  //
  // [ [ 193, 53, 146 ],
  //   [ 186, 105, 211 ],
  //   [ 29, 139, 249 ],
  //   [ 150, 49, 167 ],
  //   [ 5, 187, 209 ],
  //   [ 120, 240, 136 ],
  //   [ 44, 91, 118 ],
  //   [ 46, 92, 114 ],
  //   [ 49, 98, 83 ],
  //   [ 59, 118, 77 ],
  //   [ 6, 12, 10 ],
  //   [ 1, 2, 3 ],
  //   [ 102, 204, 170 ],
  //   [ 98, 196, 166 ],
  //   [ 177, 127, 206 ],
  //   [ 196, 149, 81 ] ]
  //

  Object.keys(shares).forEach(shareId => {
    x.push(parseInt(shareId, 10));
    const data = mnemonictToIntVector(shares[shareId]);

    for (let j = 0; j < data.length; j++) {
      y[j] = y[j] || [];
      y[j][x.length - 1] = data[j];
    }
  });

  return y
    .map(part => lagrange(0, x, part))
    .reduce((accum, part) => {
      const word = wordlist[part];
      if (!accum) {
        return word;
      } else {
        return `${accum} ${word}`;
      }
    }, '');
}
