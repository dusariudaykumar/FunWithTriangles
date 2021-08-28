const inputOne = document.querySelectorAll(".inputsFirst");
const checkBtn = document.querySelector("#checkBtn");
const output1 = document.querySelector("#output1");

function sumCalculate(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  const sumOfAngles = sumCalculate(
    Number(inputOne[0].value),
    Number(inputOne[1].value),
    Number(inputOne[2].value)
  );
  //   console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    output1.innerText = "Yay, the angles form a triangle!";
    output1.style.color = "green";
  } else {
    output1.innerText = "Oh Oh! The angles doesn't form a triangle";
    output1.style.color = "red";
  }
}
checkBtn.addEventListener("click", isTriangle);

// Quiz App

const quizForm = document.querySelector(".quizForm");
const submitBtn = document.querySelector("#submitBtn");
const output2 = document.querySelector("#output2");

const correctAnswers = ["right angled", "90°", "Isosceles"];

function formEvaluation() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output2.innerText = "Your Score: " + score;
}
submitBtn.addEventListener("click", formEvaluation);

// Hypotenuse App

const valueOfBaseA = document.querySelector("#valueOfA");
const valueOfHeightB = document.querySelector("#valueOfB");
const hypotenuseBtn = document.querySelector("#hypotenuseBtn");
const output3 = document.querySelector("#output3");

function calculateSquare(base, height) {
  const sumOfSquare = base * base + height * height;
  return sumOfSquare;
}

function calculateHypotenuse() {
  const base = valueOfBaseA.value;
  const height = valueOfHeightB.value;
  const sumOfSquare = calculateSquare(base, height);
  const hypotenuseLength = Math.sqrt(sumOfSquare);
  output3.innerText = "The length of hypotenuse is " + hypotenuseLength;
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);

// Area App
const inputFeild = document.querySelectorAll(".inputFeild");
const calculateAreaBtn = document.querySelector("#calculateAreaBtn");
const output4 = document.querySelector("#output4");

function calculateBaseAndHeight(base, height) {
  const baseAndHeight = base * height;
  return baseAndHeight;
}

function calculateAreaOfTriangle() {
  const baseAndHeight = calculateBaseAndHeight(
    Number(inputFeild[0].value),
    Number(inputFeild[1].value)
  );
  const areaOfTriangle = baseAndHeight / 2;
  console.log(areaOfTriangle);
  output4.innerText = "Area of a triangle : " + areaOfTriangle + " units ";
}
calculateAreaBtn.addEventListener("click", calculateAreaOfTriangle);
