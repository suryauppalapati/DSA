// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

// 12345
// 1234
// 123
// 12
// 1

function printer(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += j;
    }
    console.log(row);
  }
}

printer(5);
