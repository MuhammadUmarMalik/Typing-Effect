const text = document.querySelector(".second-text");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Eat";
  }, 0);

  setTimeout(() => {
    text.textContent = "Drink";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Code";
  }, 8000);
};
textload();
textload(setInterval, 12000);
