const questions = [
    {
      question: "Which language is used to structure a web page?",
      answers: ["Python", "HTML", "C++", "Java"],
      correct: "HTML"
    },
    {
      question: "Which language styles a web page?",
      answers: ["CSS", "C", "SQL", "Python"],
      correct: "CSS"
    },
    {
      question: "Which language adds interactivity to a web page?",
      answers: ["HTML", "CSS", "JavaScript", "XML"],
      correct: "JavaScript"
    },
    {
      question: "Which keyword declares a constant in JavaScript?",
      answers: ["var", "let", "const", "fixed"],
      correct: "const"
    },
    {
      question: "Which data structure follows LIFO?",
      answers: ["Queue", "Stack", "Array", "Tree"],
      correct: "Stack"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const progressElement = document.getElementById("progress");
  const feedbackElement = document.getElementById("feedback");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    answered = false;
  
    const item = questions[currentQuestion];
  
    progressElement.textContent =
      `Question ${currentQuestion + 1} of ${questions.length}`;
  
    questionElement.textContent = item.question;
    answersElement.replaceChildren();
    feedbackElement.textContent = "";
    nextButton.hidden = true;
    scoreElement.textContent = "";
  
    item.answers.forEach(answer => {
      const button = document.createElement("button");
  
      button.textContent = answer;
      button.className = "answer-btn";
      button.type = "button";
      button.addEventListener("click", () => checkAnswer(button, answer));
  
      answersElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedButton, answer) {
    if (answered) return;
    answered = true;
  
    const correctAnswer = questions[currentQuestion].correct;
  
    document.querySelectorAll(".answer-btn").forEach(button => {
      button.disabled = true;
  
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  
    if (answer === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct answer!";
      feedbackElement.style.color = "#4ade80";
    } else {
      selectedButton.classList.add("wrong");
      feedbackElement.textContent =
        `Incorrect! Correct answer: ${correctAnswer}`;
      feedbackElement.style.color = "#f87171";
    }
  
    nextButton.hidden = false;
    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "Show Final Score"
        : "Next Question";
  }
  
  nextButton.addEventListener("click", () => {
    if (!answered) return;
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = "Quiz Completed!";
      progressElement.textContent = "All questions answered";
      answersElement.replaceChildren();
      feedbackElement.textContent = "Well done!";
      nextButton.hidden = true;
      scoreElement.textContent =
        `Your score: ${score} / ${questions.length}`;
    }
  });
  
  showQuestion();
  