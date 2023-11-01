let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = () => {
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;
  let signature = document.createElement("p");
  signature.innerText = "️🖊️" + name + " from " + hometown + " supports this.";
  document.getElementsByClassName("signatures")[0].appendChild(signature);

  // Remove old counter
  let oldCounter = document.getElementById("counter");
  oldCounter.remove();

  // Increase count of signatures
  count = count + 1;

  // Create new counter
  let newCounter = document.createElement("p");
  newCounter.setAttribute("id", "counter");
  newCounter.innerText = "🖊️ " + count + " people have signed this petition and support this cause.";

  // Append new counter to signatures div
  document.getElementsByClassName("signatures")[0].appendChild(newCounter);
}
