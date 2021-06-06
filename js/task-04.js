

let counterValue = 0;

const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value');

incBtn.addEventListener('click', increment => {
    counterValue++;
    showCounterValue()
})
decBtn.addEventListener('click', decrement => {
    counterValue -= 1;
    showCounterValue()
})

function showCounterValue(){
    value.innerHTML = counterValue;
}