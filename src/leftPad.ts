/**
 * Pads a string with the given padString on the left until the specified length is achieved
 * @param str The string to pad
 * @param padString The string to add
 * @param length The desired length of the result
 */
export function leftPad(
  str: string,
  padString: string,
  length: number
): string {
  while (str.length < length) {
    str = padString + str;
  }
  return str;
}
