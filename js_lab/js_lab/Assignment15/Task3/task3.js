// Name: Nitin Kumar | Roll: BCS2025601 | Assignment 15 | Task 3
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

async function run() {
  try {
    console.log(await checkMarks(65));
    console.log(await checkMarks(-5));
  } catch (error) {
    console.log("Caught: " + error.message);
  }
}

run();
