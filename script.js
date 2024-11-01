// Quiz questions array
const quizData = [
    {
      question: "რომელია მსოფლიოში უდიდესი უდაბნო?",
      options: ["საჰარის უდაბნო", "არაბეთის უდაბნო", "გობის უდაბნო", "ანტარქტიკის უდაბნო"],
      correct: 3,
    },
    {
      question: "რომელია მსოფლიოში ყველაზე გრძელი მდინარე?",
      options: ["ნილოსი", "ამაზონი", "იანძი", "მისისიპი"],
      correct: 0,
    },
    {
      question: "რომელია აფრიკის უმაღლესი მთა?",
      options: ["კილიმანჯარო", "ევერესტი", "კ2", "ელბრუსი"],
      correct: 0,
    },
    {
      question: "რომელ კონტინენტზე მდებარეობს ამაზონის ტყე?",
      options: ["აზია", "აფრიკა", "სამხრეთ ამერიკა", "ავსტრალია"],
      correct: 2,
    },
    {
      question: "რომელ ქვეყანას აქვს ყველაზე მეტი ბუნებრივი ტბა?",
      options: ["აშშ", "კანადა", "რუსეთი", "ბრაზილია"],
      correct: 1,
    },
    {
      question: "რომელია ავსტრალიის დედაქალაქი?",
      options: ["სიდნეი", "კანბერა", "მელბურნი", "პერტი"],
      correct: 1,
    },
    {
      question: "რომელი ქვეყანა ცნობილია როგორც მზის ამოსვლის ქვეყანა?",
      options: ["ჩინეთი", "სამხრეთ კორეა", "იაპონია", "ტაილანდი"],
      correct: 2,
    },
    {
      question: "რომელია მსოფლიოში უდიდესი კუნძული?",
      options: ["გრენლანდია", "ახალი გვინეა", "ბორნეო", "მადაგასკარი"],
      correct: 0,
    },
  ];
  
  // Load quiz on the page
  const quizContainer = document.getElementById("quiz");
  const progressBar = document.querySelector(".progress");
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
      <h2>${currentQuestion.question}</h2>
      ${currentQuestion.options
        .map(
          (option, index) =>
            `<label><input type="radio" name="answer" value="${index}"> ${option}</label>`
        )
        .join("")}
    `;
  
    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
  }
  
  // Check the answer
  document.getElementById("submit").addEventListener("click", () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (!answer) {
      alert("გთხოვთ, მონიშნეთ პასუხი!");
      return;
    }
  
    if (parseInt(answer.value) === quizData[currentQuestionIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `<h2>თქვენ დააგროვეთ ${score} ქულა ${quizData.length}-დან!</h2>`;
      document.getElementById("submit").style.display = "none";
      document.getElementById("result").innerHTML =
        score === quizData.length
          ? "გილოცავთ! 🎉 სრულყოფილი შედეგი!"
          : score > quizData.length / 2
          ? "კარგი შედეგი! 👍 კარგად იცნობთ გეოგრაფიას!"
          : "გისურვებთ წარმატებას მომავალში! 🌍 გააგრძელეთ სწავლა!";
    }
  });
  
  // Initial quiz load
  loadQuiz();
  