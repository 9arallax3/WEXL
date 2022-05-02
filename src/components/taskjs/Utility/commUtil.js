// this file contains commonly reused utilities for SCC activities

// this function takes a range of numbers and produces a random number
// within that range.
// values of min and max are inlcuded
export function randmNumb(min, max) { 
  return (Math.floor(Math.random() * (max - min + 1) + min))
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 **/
export function shuffleAry(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// reverses an array
export function reverseArr(input) {
  var ret = new Array;
  for(var i = input.length-1; i >= 0; i--) {
      ret.push(input[i]);
  }
  return ret;
};


// comparing portions of a given string; source is arr, matching part is sub
// note that if arr is not an array, then map error will occur; use str.split(' ')
// when invoking
export function partial_string_compare(arr, sub) {
  sub = sub.toLowerCase();
  return arr.map(s => s
    .toLowerCase()
    .startsWith(sub.slice(0, Math.max(s.length - 1, 1)))
  );
};