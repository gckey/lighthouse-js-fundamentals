/**
 * Implement a function which can run a given function after a specific delay.
 * @param {Function} callback The function to execute after the delay. It receives `data` as an argument.
 * @param {number} delay  The time, in milliseconds, to wait before executing the callback.
 * @param {*} data  The data to be passed into the callback function upon execution.
 * @returns {void} This function does not return a value.
 */

const doShortly = function(callback, delay, data) {
  /* Set a timer to execute the callback function asynchronously
     after the specified delay.
  */
  setTimeout(() => {
    // Invoke the callback function and pass the provided data into it.
    callback(data);
  }, delay);
};