import { normalizeString } from "./normalizeString";

/**
 * A helper function get last pathname, useful to set title dynamically based on URL pathname
 * @export
 * @param {string} pathname
 * @returns {string}
 */
export function getLastPathname(pathname: string) {
  const pathnameSplit = pathname.split("/");

  const lastPathname: string = normalizeString(
    pathnameSplit[pathnameSplit.length - 1]
  );
  return lastPathname;
}
