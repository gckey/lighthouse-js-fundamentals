/**
 * Implement a urlDecode() that parses a URL encoded string into a JS object.
 * @param {string} text The URL encoded string into parse
 *  Format: "key1=value1&key2=value2" where %20 represents a space.
 *  e.g: "city=Toronto&weather=freezing%20rain"
 * @returns {Object.<string, string>} An object with decoded key-value pairs.
 *  e.g {city: "Toronto", weather: "freezin rain"}
 */

const urlDecode = function(txt) {
  // Check if input is empty or undefined
  if (!txt || txt.length === 0) {
    return {};
  }
  // Initialize result object to store key-value pairs
  const result = {};
  /* Split the input string by "&" to get individul key=value pairs
   e.g "city=Toronto&weather=freezing%20rain"
   becomes ["city=Toronto", "weather=freezing%20rain"]
  */
  const pairs = txt.split("&");
  // Loop through each key=value pair
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    /* Split each pair by "=" to separate key and value
       e.g "city=Toronto" becomes ["city", "Toronto"]
    */
    const keyValue = pair.split("=");
    // Extract key (1st element) and value (2nd element)
    const key = keyValue[0];
    let value = keyValue[1] || ""; // Default to empty string if no value
    /* Decode URL encoding - replace %20 with space character
       Using replace with global regex to replace all occurrences
       e.g: "freezing%20rain" becomes "freezin rain"
     */
    value = value.replace(/%20/g, " ");
    // Asssing the decoded value to the key in result object
    result[key] = value;
  }
  return result; // Return the final object

};


console.log(urlDecode("city=Toronto&weather=freezing%20rain"));
console.log(urlDecode(""));
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

