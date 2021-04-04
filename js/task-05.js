const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output')
}

refs.input.addEventListener('keyup', onKeyPress);

function onKeyPress(event) {
    if (refs.input.value === "") {
        refs.output.innerHTML = "незнакомец";
    } else {
        refs.output.innerHTML = refs.input.value
    };

};
