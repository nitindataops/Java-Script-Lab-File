// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 12 | Task 3
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => console.log("Round " + round));
