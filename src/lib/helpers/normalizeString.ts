export function normalizeString(str: string) {
  const newStr = str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");

  return newStr;
}
