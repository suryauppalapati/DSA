// Expected Output
// ABCDE
// ABCD
// ABC
// AB
// A

function printer(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

printer(5);
