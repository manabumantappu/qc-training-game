let score = 0;

// data soal (nanti bisa jadi JSON)
const correctAnswer = "NG";
const reason = "理由：表面にキズあり（Surface scratch）";

function answer(choice) {
  const result = document.getElementById("result");
  const scoreText = document.getElementById("score");

  if (choice === correctAnswer) {
    score += 10;
    result.innerHTML = "✅ 正解！<br>" + reason;
    result.style.color = "#22c55e";
  } else {
    result.innerHTML = "❌ 不正解<br>" + reason;
    result.style.color = "#ef4444";
  }

  scoreText.innerText = "Score: " + score;
}
