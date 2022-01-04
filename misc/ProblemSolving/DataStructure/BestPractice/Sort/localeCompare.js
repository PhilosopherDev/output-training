/**
 * https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
 */
const array1 = ["1", "30", "4", "21", "100000"];

array1.sort((a, b) => a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'base'
  }));

console.log(array1);