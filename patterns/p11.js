// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

//  1
//  0 1
//  1 0 1
//  0 1 0 1
//  1 0 1 0 1

function printer(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${(i + j) % 2}`;
    }
    console.log(row);
  }
}

printer(5);
