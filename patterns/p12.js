// Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

function printer(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j}${j === i ? " ".repeat(n - i) : ""}`;
    }
    for (let k = i; k >= 1; k--) {
      row += `${k === i ? " ".repeat(n - i) : ""}${k}`;
    }
    console.log(row);
  }
}

printer(5);
