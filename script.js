"use strict";
// console.log("Hello World!");

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM Elements
const btn = document.querySelector(".share-button");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Loading data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://qaxcjnetpgsuqojzatyr.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFheGNqbmV0cGdzdXFvanphdHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1OTEwNjYsImV4cCI6MTk4NzE2NzA2Nn0.m6vPt7X2ZKKQB8tsv-u3rvwvMy74WDtBai3Y3JUsa-s",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFheGNqbmV0cGdzdXFvanphdHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1OTEwNjYsImV4cCI6MTk4NzE2NzA2Nn0.m6vPt7X2ZKKQB8tsv-u3rvwvMy74WDtBai3Y3JUsa-s",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">${fact.text}
          <p>
            React is being developed by Meta (formerly facebook
            <a
              class="source" 
              href="${fact.source}" target="_blank"
            >(Source)</a>
          </p>
          <span class="tag" style="background-color: #3b82f6"
          >${fact.category}</span>
        </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
// factsList.insertAdjacentHTML("afterbegin", "<li>Julian</li>");

//Toggle Form Visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});

// Notes

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

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else
//     return `Impossible year. Year needs to be less than or equal to ${currentYear}.`;
// }

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

// const fact = ["Lisbon is the capital of Portugal", 2015, true];

// // const [text, createdIn, isCorrect] = fact;
// // console.log(createdIn);

// const newFact = [...fact, "society"];
// console.log(newFact);

// const factObj = {
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact "${
//       this.text
//     }" is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);

// const { category, isCorrect } = factObj;
// console.log(category);

// console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const arr10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// Arrow Function
// const arr10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(arr10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else
//     return `Impossible year. Year needs to be less than or equal to ${currentYear}.`;
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
// console.log(factAges.join("-"));
