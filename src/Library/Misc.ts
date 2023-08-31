/**
 * Turn a null value into an undefined value.
 */
export function nullToUndefined<A>(a: A | null): A | undefined {
  return a === null ? undefined : a;
}
