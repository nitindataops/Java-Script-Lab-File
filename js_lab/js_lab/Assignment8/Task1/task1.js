// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 8 | Task 1
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const t = new Teacher("Anita", "Maths");
console.log(t.greet());
