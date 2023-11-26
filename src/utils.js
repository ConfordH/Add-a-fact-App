/**
 * This checks if a uri provided is valid
 * @param {*} string url stirng
 * @returns true is uri is correct else false
 */
export const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};
