/**
 * Formats a date string from YYYY/MM/DD format to human readable format.
 * @param {string} date; Date string in format YYYY/MM/DD
 * @returns {string} Human readable date like `December 2nd, 2017`
 */
const talkingCalendar = function(date) {
  // Split the input date string by "/".  "YYYY/MM/DD" -> ["YYYY", "MM", "DD"]
  const dateParts = date.split("/");
  // Destructure for clarity: year, month (1-12), day
  const year = dateParts[0];
  const month = parseInt(dateParts[1], 10);  // parseInt with base 10 for safety
  const day = parseInt(dateParts[2], 10);
  // Map month number (1-12) to month name. Arrays are 0-indexed, so month 1 = index 0
  const monthNames = [
    "January", "February", "March", "April", "May", "June","July",
    "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[month - 1];
  /*Determine ordinal suffix for the day
    Special cases: 11th, 12th, 13th (teens are always "th")
    Otherwise check last digit: 1->st, 2->nd, 3->rd, else->th
  */
  let daySuffix;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1: daySuffix = "st";
        break;
      case 2: daySuffix = "nd";
        break;
      case 3: daySuffix = "rd";
        break;
      default: daySuffix = "th";
    }
  }
  const dayWithSuffix = day + daySuffix;
  // Format and return the human-readable date string
  // "Month DaySuffix, Year" (e.g., "December 2nd, 2017")
  return `${monthName} ${dayWithSuffix}, ${year}`;
};

// Test cases
console.log(talkingCalendar("2017/12/02"));  // December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));  // November 11th, 2007
console.log(talkingCalendar("1987/08/24"));  // August 24th, 1987