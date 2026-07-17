/**
 * Implement makeCase() that build a case maker; it can convert
 * strings into all different kinds of case styles;
 * like camel, pascal, snake, or even kebab.
 */

const makeCase = function(input, caseOption) {
  // Step 1: Normalize the case option into an array.
  // The function can receive either a single string ("camel")
  // OR an array of strings (["upper", "snake"]). Turning both into an array.

  const cases = Array.isArray(caseOption) ? caseOption : [caseOption];

  // Step 2: Break the input into individual "words".
  // A word is any group of letters. We:
  //   - lowercase everything first (the styles rebuild casing anyway)
  //   - split on anything that is not a letter (spaces, punctuation...)
  //   - .filter(Boolean) drops the empty strings the split leaves behind
  // Example: "this is a string"  ->  ["this", "is", "a", "string"]

  const words = input
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean);

  // Step 3: Build the "base" style — group 1 (highest priority).
  // Only one of these is normally used, so we use if/else-if.
  // Precedence order: camel > pascal > snake > kebab > title
  let result = "";

  if (cases.includes("camel")) {
    // camelCase: first word all lowercase, the rest get a capital first letter.
    // e.g. ["this","is","a","string"] -> "thisIsAString"
    result = words
      .map((word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");
  } else if (cases.includes("pascal")) {
    // PascalCase: every word starts with a capital.
    // e.g. "ThisIsAString"
    result = words
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  } else if (cases.includes("snake")) {
    // snake_case: words joined by underscores, all lowercase.
    result = words.join("_");
  } else if (cases.includes("kebab")) {
    // kebab-case: words joined by hyphens, all lowercase.
    result = words.join("-");
  } else if (cases.includes("title")) {
    // Title Case: words joined by spaces, each capitalized.
    result = words
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    // No group-1 style was requested. Keep words separated by spaces
    // so the group-2 / group-3 styles still have something to work on.
    result = words.join(" ");
  }

  // Step 4: Group 2 — vowel / consonant casing.
  // These run on whatever the base style produced above.
  if (cases.includes("vowel")) {
    // Uppercase every vowel (a, e, i, o, u); leave everything else alone.
    result = result.replace(/[aeiou]/g, (char) => char.toUpperCase());
  }
  if (cases.includes("consonant")) {
    // Uppercase every consonant (any letter that is not a vowel).
    // The regex [a-z] matches letters only, so spaces/symbols are untouched.
    result = result.replace(/[a-z]/gi, (char) =>
      /[aeiou]/i.test(char) ? char : char.toUpperCase()
    );
  }

  // Step 5: Group 3 — upper / lower casing (lowest priority).

  if (cases.includes("upper")) {
    result = result.toUpperCase();
  }
  if (cases.includes("lower")) {
    result = result.toLowerCase();
  }

  return result;
};

// Edge cases
console.log(makeCase("this is a string", "camel"));      // thisIsAString
console.log(makeCase("this is a string", "pascal"));     // ThisIsAString
console.log(makeCase("this is a string", "snake"));      // this_is_a_string
console.log(makeCase("this is a string", "kebab"));      // this-is-a-string
console.log(makeCase("this is a string", "title"));      // This Is A String
console.log(makeCase("this is a string", "vowel"));      // thIs Is A strIng
console.log(makeCase("this is a string", "consonant"));  // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING
