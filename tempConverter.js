/**
 * Converts temperature between Celsius and Fahrenheit.
 * @param {number} value The temperature value to convert.
 * @param {boolean} cToF Direction flag: true = C to F, false = F to C.
 * @returns {number} Converted temperature rounded to 1 decimal place, or NaN if input invalid.
 */
const tempConverter = function(value, cToF) {
  // Validate input: must be a number (not NaN, not string, not null/undefined).
  if (typeof value !== 'number') {
    return NaN;
  }
  let result = 0;
  /* Convert Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
     Using 1.8 instead of 9/5 for simplicity (9/5 = 1.8). */
  if (cToF === true) {
    result = (value * 1.8) + 32;
  } else if (cToF === false) {
    result = (value - 32) / 1.8; // Convert Fahrenheit to Celsius: (°F - 32) × 5/9 = °C.
  }
  /* Round to 1 decimal place and ensure return type is Number
     toFixed(1) returns a string, so wrap with Number() to convert back. */
  return Number(result.toFixed(1));
};

// Test cases
console.log(tempConverter(32, true));    // 32°C → 89.6°F
console.log(tempConverter(32, false));   // 32°F → 0.0°C
console.log(tempConverter(98.6, false)); // 98.6°F → 37.0°C
console.log(tempConverter("12", true));  // Invalid input → NaN
console.log(tempConverter("12", false)); // Invalid input → NaN
console.log(tempConverter(null, true));  // Invalid input → NaN
console.log(tempConverter(undefined, false)); // Invalid input → NaN
