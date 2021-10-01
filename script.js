const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container" )
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

function startGame() {
  console.log("started");
  startButton.classList.add('hide'); 
  questionContainerElement.classList.remove('hide');
  showQuestion()
}

// function setNextQ() {
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

function showQuestion() {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text; 
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
    // resetState()
  });
}

// function resetState() {
//   nextButton.classList.add('hide');
//   while(answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// }

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
  clearStatusClass(element); 
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const question = 
  {
    question: "How many players are on the field in a rugby league game?",
    answers: [
      { text: '13', 
        correct: false},
      { text: '15', 
        correct: false},
      { text: '22',
        correct: false},
      { text: '26',
        correct: true}
    ]
  }
