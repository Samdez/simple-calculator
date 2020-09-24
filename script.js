const firstValue = document.querySelector('#first-number');
const secondValue = document.querySelector('#second-number');
const operand = document.querySelector('#operand');
const resultButton = document.querySelector('.result-button');
const resultDisplay = document.querySelector('.result-display');

resultButton.addEventListener('click', () => {
    let result;
    switch (operand.value) {
        case ('+'):
            result = +firstValue.value + +secondValue.value;
            break;
        case ('-'):
            result = +firstValue.value - +secondValue.value;
            break;
        case ('*'):
            result = +firstValue.value * +secondValue.value;
            break;
        case ('/'):
            result = +firstValue.value / +secondValue.value;
            break;
        default:
            throw new Error("Invalid operator");
    }
    resultDisplay.innerHTML = result;
})

