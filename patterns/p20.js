// Expected output:
//  *        *
//  **      **
//  ***    ***
//  ****  ****
//  **********
//  ****  ****
//  ***    ***
//  **      **
//  *        *

function printer(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    // Print stars
    const leftStars = "*".repeat(i);

    // Print spaces
    const spaces = " ".repeat(2 * n - 2 * i);

    // Print stars
    const rightStars = "*".repeat(i);

    row = leftStars + spaces + rightStars;
    console.log(row);
  }

  for (let i = 0; i < n; i++) {
    let row = "";
    // Print stars
    const rightStars = "*".repeat(n - i);

    // Print spaces
    const spaces = " ".repeat(2 * i);

    // Print stars
    const leftStars = "*".repeat(n - i);

    row = leftStars + spaces + rightStars;
    console.log(row);
  }
}

printer(5);
