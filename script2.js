const questions = [
  {
    question: " Which of the following is not a CSS box model property?",
    choices: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
  {
    question:
      " Which of the following is not a valid way to declare a function in JavaScript?",
    choices: [
      "function myFunction() {}",
      " let myFunction = function() {};",
      "myFunction: function() {}",
      "const myFunction = () => {};",
    ],
    answer: "myFunction: function() {}",
  },
  {
    question: " Which of the following is not a JavaScript data type?",
    choices: ["string", "boolean", "object", "float"],
    answer: "float",
  },
  {
    question: " What is the purpose of the this keyword in JavaScript?",
    choices: [
      "It refers to the current function.",
      "It refers to the current object.",
      "It refers to the parent object.",
      " It is used for comments.",
    ],
    answer: "It refers to the current object.",
  },
  {
    question:
      " function area([x, y]) { return((x * y) / 2) } console.log([4, 5])",
    choices: ["20", "10", "4, 5", "18"],
    anwser: "10",
  },
];

// window.addEventListener("DOMContentLoaded", ()=> {
//   update()
//   checkAnwser()
//   updateCurrentQuestion()
// })
let correct;
let currentQuestion = 0;
const checkInp = document.querySelectorAll("#checkInp");
// const input = document.querySelectorAll('#questions-container input')

// let questLength = questions.length;

const questionContainer = document.getElementById("questions-container");
const choices = document.querySelectorAll(".choice");
// const options = document.querySelectorAll("input:checked");
const choicesTab = document.querySelector("#choicesTab");

function updateQuestion() {
  questions.forEach((question, index) => {
    const quesChoice = question.choices.forEach((choice, idx) => {
      const template = `
      <input type="radio" name="anwser" id="checkInp" value="${choice}">
      <label for="">${choice}</label><br>
      `;
    });

    

    questionContainer.innerHTML += `
      <div id="questionBox">
        <h3>${index + 1}. ${questions[index].question}</h3>
        <label>${quesChoice}</label>
      </div>
    `;
  });
}

const container  = document.createElement("")

updateQuestion();
