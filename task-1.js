const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isLeapYear(year) {
  let yearInEra;
  let [_, firstLetter, numOfYear] = /(\w)(\d+)/.exec(year);
  numOfYear = parseInt(numOfYear) - 1;
  switch (firstLetter) {
    case 'M':
      yearInEra = 1868 + numOfYear;
      break;
    case 'T':
      yearInEra = 1912 + numOfYear;
      break;
    case 'S':
      yearInEra = 1926 + numOfYear;
      break;
    case 'H':
      yearInEra = 1989 + numOfYear;
      break;
    case 'R':
      yearInEra = 2019 + numOfYear;
      break;
  }

  if (yearInEra % 4 === 0) {
    if (yearInEra % 100 === 0) {
      return yearInEra % 400 === 0 ? 1 : 0;
    }
    return 1;
  }
  return 0;
}

rl.question("Given a year in traditional Japanese format: ", function(year) {
  if (!/(\w)(\d+)/.test(year)) {
    throw new Error(`Year ${year} is not validate in traditional Japanese format`);
  }
  console.log(isLeapYear(year) === 1 ? true : false);
  rl.close();
});
