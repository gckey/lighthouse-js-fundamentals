/**
 * Implement organizeInstructors () that takes an array of instructor objects ({ name, course }) and groups
 * the instructors by the course they teach.
 *
 * Returns a new object where:
 *   - each key is a course name (e.g. "iOS", "Web", "Blockchain")
 *   - each value is an array of instructor names for that course
 *
 * @param {Array} instructors - list of instructor objects
 * @returns {Object} an object grouped by course
 */

const organizeInstructors = function(instructors) {
  // This empty object will store our final result.
  const organized = {};

  // Loop over every instructor in the input array.
  // `for...of` lets us visit each item (object) one at a time.
  for (const instructor of instructors) {
    // Pull the course and name out of the current instructor object.
    const course = instructor.course;
    const name = instructor.name;

    // If we have NOT seen this course yet, create a new empty array
    // for it. This is what lets us group multiple names under one course.
    // `organized[course]` uses the course string as the object key.
    if (!organized[course]) {
      organized[course] = [];
    }

    // Add this instructor's name to that course's array.
    organized[course].push(name);
  }
  return organized;
};
 
// Edge cases
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
