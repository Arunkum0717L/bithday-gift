// app.js

// Floating Heart Animation
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(spawnHeart, 300);

// Relationship Timer
const startDate = new Date("2023-02-14T00:00:00");
const timerContainer = document.createElement("div");
timerContainer.style = "text-align:center;margin-top:30px;font-weight:bold;color:#d63384;font-size:1.3rem;";
timerContainer.id = "relationship-timer";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".quiz").appendChild(timerContainer);
});

function updateRelationshipTime() {
  const now = new Date();
  const diff = new Date(now - startDate);
  const years = diff.getUTCFullYear() - 1970;
  const months = diff.getUTCMonth();
  const days = diff.getUTCDate() - 1;
  timerContainer.innerHTML = `🎉 You and Billa have been together for <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days 💕`;
}

setInterval(updateRelationshipTime, 1000);

// Quiz Logic
const quizHTML = `
  <form id="quiz-form">
    <p><strong>Q1:</strong> What is Billa’s favorite thing about Billi?</p>
    <label><input type="radio" name="q1" value="Her smile"> Her smile</label><br>
    <label><input type="radio" name="q1" value="all of things about you"> all of things about you</label><br>
    <label><input type="radio" name="q1" value="Her voice"> Her voice</label><br>
    <label><input type="radio" name="q1" value="Her hugs"> Her hugs</label><br><br>
   
    <p><strong>Q2:</strong> When did we first say "I love you"?</p>
    <label><input type="radio" name="q2" value="After 1 week"> After 1 week</label><br>
    <label><input type="radio" name="q2" value="After 3 weeks"> After 3 weeks</label><br>
    <label><input type="radio" name="q2" value="After 2 month"> After 2 month</label><br><br>

    <p><strong>Q3:</strong> What gift did Billa give on the first meetup ?</p>
    <label><input type="radio" name="q3" value="Teddy"> Teddy</label><br>
    <label><input type="radio" name="q3" value="Ring"> Ring</label><br>
    <label><input type="radio" name="q3" value="Love Letter"> Love Letter</label><br>
    <label><input type="radio" name="q3" value="Handmade Card"> Handmade Card</label><br><br>

    <button type="submit">Submit Answers 💌</button>
  </form>
`;

window.addEventListener("DOMContentLoaded", () => {
  const quizDiv = document.querySelector(".quiz");
  quizDiv.innerHTML = '<h3>🎁 Surprise Quiz for You, Billi!</h3>' + quizHTML;

  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const answers = {
      q1: "all of things about you",
      q2: "After 2 month",
      q3: "Teddy"
    };

    const form = new FormData(this);
    let correct = 0;

    for (let key in answers) {
      if (form.get(key) === answers[key]) correct++;
    }

    if (correct === 3) {
      alert("Correct! Here's your surprise! 💖");
      updateRelationshipTime();
    } else {
      alert("Oops! Try again, Billi! 😺");
    }
  });
});
