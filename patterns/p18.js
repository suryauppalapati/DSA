// Expected Output
// E
// D E
// C D E
// B C D E
// A B C D E

function printer(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n - i - 1; j < n; j++) {
      row += `${String.fromCharCode(65 + j)} `;
    }
    console.log(row);
  }
}

printer(4);
