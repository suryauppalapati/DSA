// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

// A
// AB
// ABC
// ABCD
// ABCDE

function printer(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

printer(20);
