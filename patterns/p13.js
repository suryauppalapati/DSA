//Given an integer n. You need to recreate the pattern given below for any value of N.
// Let's say for N = 5, the pattern should look like as below:

//  1
//  2 3
//  4 5 6
//  7 8 9 10
//  11 12 13 14 15

function printer(n) {
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${temp} `;
      temp++;
    }
    console.log(row);
  }
}

printer(5);
