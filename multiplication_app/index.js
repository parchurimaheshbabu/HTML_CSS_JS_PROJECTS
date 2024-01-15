const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const question = document.getElementById("question");
question.innerHTML = `What is ${num1} Multiply by ${num2}?`;
const correctans = num1 * num2;
const input1 = document.getElementById("input");
const form1 = document.getElementById("form");
let userans=0
let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score=0
}
form1.addEventListener("submit", () => {
  userans = +input1.value;
  // alert(userans,typeof userans)
  // alert(typeof userans)
  if (userans == correctans) {
    score++;
    updatelocalstorage();
  } else {
    score--;
    updatelocalstorage();
  }
});



function updatelocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

score1=document.getElementById('score')
score1.innerHTML=`score:${score}`