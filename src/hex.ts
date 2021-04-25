import { leftPad } from './leftPad';

export function isHex(hex: string): boolean {
  return !!hex.match(/^[0-9a-fA-F]+$/);
}

/**
 * Given a hex string, return a vector of numbers, where
 * each number belongs to GF(256)
 */
export function hexToIntVector(hex: string): number[] {
  /* istanbul ignore if */
  if (!isHex(hex)) {
    throw new Error(`Expected a hex string, but got ${hex}`);
  }

  /**
   * Any two digit hex number belongs to GF(256), so we will split the given
   * hex string into an array of two digit hex strings and then convert to
   * numbers.
   */

  // If we have an odd number of digits, padd a 0 to the front to preserve the
  // full number.
  // Note, this will never occur with a valid BIP39 entropy
  const paddedSecret = leftPad(hex, '0', hex.length + (hex.length % 2));

  // Split the string into an array of strings with two hex characters each.
  const splitSecret = paddedSecret.match(/.{1,2}/g) as string[];

  // Convert the hex strings to integers.
  return splitSecret.map(value => parseInt(value, 16));
}
