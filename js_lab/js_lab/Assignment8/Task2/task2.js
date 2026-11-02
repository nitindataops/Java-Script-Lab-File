// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 8 | Task 2
class Locker {
  constructor() {
    this.pin = 1234;
  }

  checkPin(number) {
    return this.pin === number;
  }
}

const locker = new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
