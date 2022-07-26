const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".cor");

btn.addEventListener("click", function () {
  const numeroAleatorio = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[numeroAleatorio];
  color.textContent = colors[numeroAleatorio];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
