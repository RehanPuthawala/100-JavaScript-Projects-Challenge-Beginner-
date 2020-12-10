// * DOM Element Selection * //

const changeColorButton = document.querySelector(".change-color");
const root = document.documentElement;

const primaryColorsArr = ["red", "green", "blue", "Brown", "Olive", "Orange"];
const secondaryColorsArr = [
  "cyan",
  "magneta",
  "yellow",
  "Beige",
  "Orange",
  "black",
];

// * Event Handlers * //

changeColorButton.addEventListener("click", (e) => {
  let randomIdx = Math.trunc(Math.random() * primaryColorsArr.length) + 1;

  root.style.setProperty("--primary-color", `${primaryColorsArr[randomIdx]}`);
  root.style.setProperty(
    "--secondary-color",
    `${secondaryColorsArr[randomIdx]}`)
  });
