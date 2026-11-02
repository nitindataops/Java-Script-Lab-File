// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 7 | Task 3
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};

const s = new Student("Asha", 88);
console.log(s.result());
