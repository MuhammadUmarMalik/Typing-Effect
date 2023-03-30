const text = document.querySelector(".second-text");

const textload = () => {

    setTimeout(() => {
        text.textContent = "Eating";
    }, 0);

    setTimeout(() => {
        text.textContent = "Drinking";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Coding";
    }, 8000);
}
textload();
textload(setInterval, 12000); 