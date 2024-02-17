export const onlyContainsNumbers = (str: string) => /^\d+$/.test(str);

export function generateGUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0; // Generate a random integer between 0 and 15.
    const v = c === "x" ? r : (r & 0x3) | 0x8; // For 'x' use the random number, for 'y' ensure it's 8, 9, A, or B.
    return v.toString(16); // Convert the number to its hexadecimal representation.
  });
}
