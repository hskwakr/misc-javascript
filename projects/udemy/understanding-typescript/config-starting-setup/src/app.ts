const clicked = (message: string) => {
  console.log("Clicked" + message);
};

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", clicked.bind(null, "You're welcome!"));
}
