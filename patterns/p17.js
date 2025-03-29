// Expected output:
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

function printer(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // increasing part
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 + j);
    }

    // decreasing part
    for (let k = i - 2; k >= 0; k--) {
      row += String.fromCharCode(65 + k);
    }

    console.log(row);
  }
}

printer(5);
