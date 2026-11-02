// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 2 | Task 3
const a = 8;
const b = 4;
let operator = "+";

function check() {
  if (operator === "+") {
    console.log("Sum: " + (a + b));
  } else if (operator === "-") {
    console.log("Difference: " + (a - b));
  }
}

check();
operator = "-";
check();
