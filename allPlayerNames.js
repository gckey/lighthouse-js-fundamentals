/**
 * Implement allPlayerNames function to get unique player names.
 * @param {Array} outcomes collection of game outcome records.
 * @returns {Array} players; Array of unique player names ordered by encounter.
 */
const allPlayerNames = function(outcomes) {
  // Initialize an array to store unique player names in the order they appear.
  const players = [];
  // Return an empty array if the outcomes collection is empty.
  if (outcomes.length === 0) {
    return players;
  }
  // Iterate through each game outcome record.
  for (const outcome of outcomes) {
    // If the winner is not yet in the players array, add them.
    if (!players.includes(outcome.winner)) {
      players.push(outcome.winner);
    }
    // If the loser is not yet in the players array, add them.
    if (!players.includes(outcome.loser)) {
      players.push(outcome.loser);
    }
  }
  return players;
};

// Test cases
const gameRecords = [
  { winner: 'Charlotte', loser: 'James',   loserPoints: 3 },
  { winner: 'Oliver',    loser: 'Sophia',  loserPoints: 1 },
  { winner: 'Lucas',     loser: 'James',   loserPoints: 2 },
  { winner: 'Lucas',     loser: 'Oliver',  loserPoints: 4 },
  { winner: 'Charlotte', loser: 'Oliver',  loserPoints: 2 },
  { winner: 'Oliver',    loser: 'Sophia',  loserPoints: 3 },
  { winner: 'Sophia',    loser: 'Lucas',   loserPoints: 2 }
];

console.log(allPlayerNames(gameRecords));
// [ 'Charlotte', 'James', 'Oliver', 'Sophia', 'Lucas' ]
