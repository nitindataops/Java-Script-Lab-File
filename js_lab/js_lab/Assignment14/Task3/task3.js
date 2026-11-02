// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 14 | Task 3
let count = 0;

const id = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(id);
  }
}, 200);
