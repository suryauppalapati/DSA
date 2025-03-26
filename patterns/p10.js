// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function upperTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

function lowerTriangle(n) {
  for (let i = n - 1; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

function printer(n) {
  upperTriangle(n);
  lowerTriangle(n);
}

printer(5);
