const displayName = document.getElementById("displayName");
const name = localStorage.getItem("textInput");
displayName.textContent = `Hello, ${name}!`;
