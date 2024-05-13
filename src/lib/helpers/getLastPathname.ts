/**
 * A helper function get last pathname, useful to set title dynamically based on URL pathname
 * @export
 * @param {string} pathname
 * @returns {string}
 */
export function getLastPathname(pathname: string) {
  const pathnameSplit = pathname.split("/");

  const lastPathname: string = pathnameSplit[pathnameSplit.length - 1]
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");

  return lastPathname;
}
