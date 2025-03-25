// Given an integer n. You need to recreate the pattern given below for any value of N.
// The pattern should look like as below:

// *****
// *****
// *****
// *****
// *****

function printer(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

printer(5);
