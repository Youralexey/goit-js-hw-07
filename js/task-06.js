const inputEl = document.querySelector('#validation-input');
console.log(inputEl.dataset.length);
console.log(inputEl.value.length);

inputEl.addEventListener('blur', () => {
    if (+inputEl.dataset.length === inputEl.value.length) {
         inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
});








