// select dom
let value = document.getElementById("value");
let result = document.getElementById("result");

let deg = +prompt("Enter Your Deg");

// function
function calc(deg) {
  value.textContent = deg;
  result.textContent = Math.floor(((deg - 32) * 5) / 9);
}
calc(deg);
