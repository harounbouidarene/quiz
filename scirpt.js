
let questions = [
 {
     question: "What is the capital of France?",
     answers: ["Berlin", "Madrid", "Paris", "Rome"],
     correct: 2
 },
 {
     question: "What is the capital of USA?",
     answers: ["Washington, D.C.", "New York", "Los Angeles", "Chicago"],
     correct: 0
 },
 {
     question: "What is the capital of Japan?",
     answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
     correct: 1
 }
];

let headline = document.querySelector(".quiz");
let buttons = document.querySelectorAll(".btns button");


let connect = questions[0];
headline.textContent = connect.question;

buttons.forEach((button, index) => {
    button.textContent = connect.answers[index];
});


let currentidex = 0;
let score = 0;

function showQuestion() {
    let connect = questions[currentidex];
    headline.textContent = connect.question;
    buttons.forEach((button, index) => {
        button.textContent = connect.answers[index];

        button.onclick = () => {
            if (index === connect.correct) {
                alert("✅ Correct!");
                score++;
            } else {
                alert("❌ Wrong! The correct answer is " + connect.answers[connect.correct]);
            }

            currentidex++;

            if (currentidex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        };
    });
}

function endQuiz() {
    headline.textContent = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
    buttons.forEach(button => button.style.display = "none");
}


showQuestion();