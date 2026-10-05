/**
 * Filters a list of stations and returns the names of those that have a
 * capacity of at least 20 and are either a school or a community centre.
 *
 * @param {Array<[string, number, string]>} stationsList - The array of stations, where each station contains [name, capacity, type].
 * @returns {string[]} An array containing the names of the eligible stations.
 */
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = (stationsList) => {
  return stationsList
  // Filter stations: skip name (index 0), check capacity >= 20, and ensure type is school or community.
    .filter(([, capacity, type]) => {
      const isLargeEnough = capacity >= 20;
      const isCorrectType = type === 'school' || type === 'community centre';
      return isLargeEnough && isCorrectType;
    })
    .map(([name]) => name);
};

console.log(chooseStations(stations));