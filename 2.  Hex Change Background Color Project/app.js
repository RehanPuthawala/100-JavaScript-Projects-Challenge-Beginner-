// * DOM Element Selection * //

const changeColorButton = document.querySelector(".change-color");
const rootElement = document.documentElement;
const firstHexColorPlaceholder = document.querySelector(".main__para--hex-1");
const secondHexColorPlaceholder = document.querySelector(".main__para--hex-2");

// * Functions  * //

const generateRandomHEX = () => {
  const hexElementsArr = "abcdef0123456789".split("");
  const firstHexColorArr = ["#"];
  const secondHexColorArr = ["#"];
  const hexColorArr = [];

  for (let i = 0; i < 6; i++) {
    const randomElement =
      hexElementsArr[Math.trunc(Math.random() * hexElementsArr.length) + 1];
    firstHexColorArr.push(randomElement);
  }

  for (let i = 0; i < 6; i++) {
    const randomElement =
      hexElementsArr[Math.trunc(Math.random() * hexElementsArr.length)];
    secondHexColorArr.push(randomElement);
  }

  hexColorArr.push(firstHexColorArr.join(""));
  hexColorArr.push(secondHexColorArr.join(""));

  return hexColorArr;
};

const changeColor = (colorArr) => {
  rootElement.style.setProperty("--primary-color", colorArr[0]);
  rootElement.style.setProperty("--secondary-color", colorArr[1]);

  firstHexColorPlaceholder.textContent = colorArr[0];
  secondHexColorPlaceholder.textContent = colorArr[1];
};

// * Event Handlers * //

changeColorButton.addEventListener("click", () => {
  const color = generateRandomHEX();
  changeColor(color);
});
