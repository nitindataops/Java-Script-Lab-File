// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 12 | Task 1
function applyTwice(fn, value) {
  const result = fn(value);
  return fn(result);
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
