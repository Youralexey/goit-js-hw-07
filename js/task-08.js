
const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');

renderEl.addEventListener('click', getAmount);
destroyEl.addEventListener('click', destroyBoxes);


function destroyBoxes() {
    boxesEl.innerHTML = "";
};

function getAmount() {
    let amount = document.querySelector("#controls input").value;
    createBoxes(amount);
};

function createBoxes(amount) {
    let basicSize = 30;
    let fragmentEl = document.createDocumentFragment();

    for (let i = 0; i < amount; i++){
        let size = basicSize + i * 10;
        let randomDiv = document.createElement('div');
        randomDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragmentEl.appendChild(randomDiv);
    }
    boxesEl.appendChild(fragmentEl)
};


function random() {
    return Math.floor(Math.random()*256)
};