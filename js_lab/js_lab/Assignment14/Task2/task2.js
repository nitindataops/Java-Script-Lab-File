// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 14 | Task 2
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
