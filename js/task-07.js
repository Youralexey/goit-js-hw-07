const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const el = inputEl.addEventListener('input', () => {
    textEl.style.fontSize = inputEl.value+'px';
});