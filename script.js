const popUpMessage = document.querySelector(".sub");
let questLength = document.getElementById("questLength");
let corrQuestions = document.getElementById("correct");

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
    question: "What is the purpose of CSS?",
    choices: [
      "To style and visually enhance web pages",
      "To define the structure and layout of web pages",
      "To handle server-side logic and data processing",
      "To manage client-side interactions and events",
    ],
    answer: "To style and visually enhance web pages",
  },
  {
    question: "What is the role of HTML in web development?",
    choices: [
      "To define the structure and content of web pages",
      "To style and design web pages",
      "To handle server-side scripting and database operations",
      "To provide interactivity and dynamic behavior on web pages",
    ],
    answer: "To define the structure and content of web pages",
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    choices: [
      "To define the layout and presentation of web pages",
      "To create and manage databases for web applications",
      "To implement client-side interactivity and dynamic behavior",
      "To handle server-side processing and data storage",
    ],
    answer: "To implement client-side interactivity and dynamic behavior",
  },
  {
    question: "What does SEO stand for in web development?",
    choices: [
      "Search Engine Optimization",
      "Server Environment Optimization",
      "Security and Encryption Options",
      "Structured Error Output",
    ],
    answer: "Search Engine Optimization",
  },
  {
    question: "What is the purpose of a responsive web design?",
    choices: [
      "To optimize website performance and speed",
      "To ensure cross-browser compatibility",
      "To provide an engaging user experience across different devices",
      "To protect against security vulnerabilities and threats",
    ],
    answer: "To provide an engaging user experience across different devices",
  },
];

let correct = 0;
let currentQuestion = 0;
// corrQuestions.innerText = correct

questLength.innerText = questions.length;
const checkInp = document.querySelectorAll("#checkInp");

const questionContainer = document.getElementById("questions-container");
const choices = document.querySelectorAll(".choice");
const choicesTab = document.querySelector("#choicesTab");

function updateQuestion() {
  questions.forEach((question, index) => {
    questionContainer.innerHTML += `
      <div id="question">
        <h2>${question.question}</h2>
        ${question.choices
          .map(
            (choice) =>
              `
              <div>
                <input type="radio" name="${index}" value="${choice}" id="input">
                <label>${choice}</label>
              </div>
            `
          )
          .join("")}
      </div>
    `;
    let input = document.querySelectorAll("#input");
    input.forEach((input) => {
      input.addEventListener("change", (e) => {
        let answer = questions[e.target.name].answer;
        let selectedAnwser = e.target.value;

        if (selectedAnwser === answer) {
          console.log("correct");
          correct++;
          corrQuestions.innerText = correct;
          corr.innerText = correct;
        } else {
          console.log("false");
          // correct--
          corrQuestions.innerText = correct;
          corr.innerText = correct;
        }
      });
    });
  });
}

const submit = document.querySelector("#submit");
const restart = document.querySelector("#restart");
submit.addEventListener("click", submitQue);
restart.addEventListener("click", restartQue);

function submitQue() {
  popUpMessage.style.transform = "translate(-50%, -50%) scale(1)";
}
function restartQue() {
  window.location.reload();
}

updateQuestion();

cancel.addEventListener("click", () => {
  popUpMessage.style.transform = "translate(-50%, -50%) scale(0)";
});
