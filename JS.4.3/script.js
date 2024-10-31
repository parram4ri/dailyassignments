
const button = document.getElementById("button");
const counterElement = document.getElementById("counter");
const hiddenContent = document.getElementById("hiddenContent");

let counter = 0;

button.addEventListener("click", () => {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }

  counter += 1;

  counterElement.textContent = counter;
});
