const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

console.log(inputEl);
console.log(textEl);

const handleInput  = document.addEventListener("input", () => {
    textEl.style.fontSize = `${inputEl.value}px`;
})