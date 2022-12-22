"use strict";
console.log("Hello World!");

const btn = document.querySelector(".share-button");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});

// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindblowing;
// console.log("Upvotes:", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

// let votesInteresting = 23;
// let votesMindblowing = 5;

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less than or equal to ${currentYear}.`;
}

// const age1 = calcFactAge(2015);
// console.log(age1);

// if (votesInteresting === votesMindblowing) {
//   alert("This fact is equally interesting and mindblowing");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + votesMindblowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";

// const text = "Lisbon is the capital of Portugal";
// const upperTest = text.toUpperCase();

// const str = `The current fact is "${text}". It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }.`;
// console.log(str);

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Impossible year. Year needs to be less than or equal to ${new Date().getFullYear()}.`;

const fact = ["Lisbon is the capital of Portugal", 2015, true];

const [text, createdIn, isCorrect] = fact;
console.log(createdIn);

const newFact = [...fact, "society"];
console.log(newFact);
