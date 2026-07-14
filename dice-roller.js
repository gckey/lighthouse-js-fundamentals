/**
 * Rolls a given number of six-sided dice and returns the results.
 */

const rollDice = function(diceRolled) {
  // Create an empty array to store the rolled dice values
  const rolls = [];

  // Loop once per die we want to roll
  for (let i = 0; i < diceRolled; i++) {
    // Generate a random number between 1 and 6 (inclusive)
    // Math.random() -> [0,1); *6 -> [0,6); +1 -> [1,7);
    // floor -> 1,2,3,4,5,6 (all equally likely)
    const roll = Math.floor(Math.random() * 6 + 1);
    // Add the roll value to the rolls array
    rolls.push(roll);
  }

  // Convert the rolls array into a string with comma-separated values
  return rolls.join(", ");
};
// Read the 3rd item of process.argv:
const diceRolls = process.argv[2];

// Print the result using a template strings
console.log(`Rolled ${diceRolls} dice: ${rollDice(diceRolls)}`);
