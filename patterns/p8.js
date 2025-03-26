// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

// *********
//  *******
//   *****
//    ***
//     *

function printer(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    // loop to print white spaced left triangle
    for (let l = 0; l < n - i; l++) {
      row += " ";
    }
    // loop to print stars
    for (let j = 0; j < 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printer(5);
