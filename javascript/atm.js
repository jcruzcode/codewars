// ATM Money Counter (6 kyu)
function atm(value) {
  const digits = [];
  let val = value,
    chars;

  // Create array of digits 0-9
  for (let i = 0; i < 10; i++) digits.push(i);

  // Remove spaces in string (if needed)
  // Split into characters
  if (value.includes(" ")) {
    val = val.split(" ").join("");
    chars = val.split("");
  } else {
    chars = val.split("");
  }

  let currency = [],
    amount = [];

  // Separate letters and numbers
  for (let char of chars) {
    digits.includes(+char) ? amount.push(char) : currency.push(char);
  }

  let cash = +amount.join("");
  const sym = currency.join("").toUpperCase();

  const currencies = Object.keys(VALUES);

  if (!currencies.includes(sym)) {
    return `Sorry, have no ${sym}.`;
  }

  const smallestNote = VALUES[sym][0];

  if (cash % smallestNote !== 0) {
    return `Can't do ${cash} ${sym}. Value must be divisible by ${smallestNote}!`;
  }

  const copyNotes = VALUES[sym];

  let index = copyNotes.length - 1;
  let numOfBills,
    withdrawn = [];

  while (cash > 0) {
    // Find number of bills for
    // a given denomination
    if (copyNotes[index] <= cash) {
      numOfBills = Math.floor(cash / copyNotes[index]);
    } else {
      numOfBills = 0;
    }

    if (numOfBills !== 0) {
      withdrawn.push(`${numOfBills} * ${copyNotes[index]} ${sym}`);
    }

    // Calculate remaining amount to be dispensed
    cash -= numOfBills * copyNotes[index];
    index--;
  }

  return withdrawn.join(", ");
}
