// Expected output:

// 5 5 5 5 5 5 5 5 5
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5

function printer(n) {
  const size = 2 * n - 1;
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      let minDistance = Math.min(i, j, size - 1 - i, size - 1 - j);
      row += n - minDistance + " ";
    }
    console.log(row.trim());
  }
}

// Test with n = 4
printer(5);
