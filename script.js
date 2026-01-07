let questions = [];
let index = 0;
let selectedArea = "";
let correct = 0;

fetch("data/questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    loadQuestion();
  });

function loadQuestion() {
  const q = questions[index];
  document.getElementById("productImage").src = q.image;
  document.getElementById("feedback").innerText = "";
  document.getElementById("progress").innerText =
    `Soal ${index+1} / ${questions.length}`;
}

function selectArea(area) {
  selectedArea = area;
  document.querySelectorAll(".area").forEach(a => a.classList.remove("selected"));
  document.querySelector(`.${area}`).classList.add("selected");
}

function submit() {
  const ng = document.getElementById("ngType").value;
  const q = questions[index];
  const feedback = document.getElementById("feedback");

  if (selectedArea === q.correctArea && ng === q.correctNG) {
    correct++;
    feedback.innerHTML = "✅ 正解<br>" + q.reason;
  } else {
    feedback.innerHTML = "❌ 不正解<br>" + q.reason;
  }

  index++;
  if (index < questions.length) {
    setTimeout(loadQuestion, 1200);
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".container").innerHTML = `
    <h2>Training Result</h2>
    <p>Correct: ${correct} / ${questions.length}</p>
    <p>Accuracy: ${Math.round(correct / questions.length * 100)}%</p>
  `;
}

function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
