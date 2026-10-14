/**
 * Implement a function that calculates a person's age based on
 * their birth year and the current year.
 * @param {string} name The name of the person.
 * @param {number} yearOfBirth The year the person was born.
 * @param {number} currentYear The current year.
 * @returns {string} A formatted string stating the person's name and age.
 */
const ageCalculator = (name, yearOfBirth, currentYear) => {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));