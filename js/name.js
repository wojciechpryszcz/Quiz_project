const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  const inputValue = input.value;
  localStorage.setItem("textInput", inputValue);
});
