
const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.input.value === '') {
        refs.output.innerHTML = 'незнакомец' 
    } else
    {
        refs.output.innerHTML = event.currentTarget.value;
    }
}