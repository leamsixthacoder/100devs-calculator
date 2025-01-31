const buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach(button => button.addEventListener('click', makeActions));
let firstValue = 0
let currentOperator = null
let isOperatorClicked = false
const input = document.getElementById('input');
function makeActions(click) {

    if (click.target.classList.contains('seven')) {
        input.value += '7';
    } else if (click.target.classList.contains('eight')) {
        input.value += '8';
    } else if (click.target.classList.contains('nine')) {
        input.value += '9';
    } else if (click.target.classList.contains('four')) {
        input.value += '4';
    } else if (click.target.classList.contains('five')) {
        input.value += '5';
    } else if (click.target.classList.contains('six')) {
        input.value += '6';
    } else if (click.target.classList.contains('one')) {
        input.value += '1';
    } else if (click.target.classList.contains('two')) {
        input.value += '2';
    } else if (click.target.classList.contains('three')) {
        input.value += '3';
    } else if (click.target.classList.contains('zero')) {
        input.value += '0';
    }  else if (click.target.classList.contains('point')) {
        if (!input.value.includes('.')) {
            input.value += '.';
        }
    } else if (click.target.classList.contains('add')) {
        handleOperator('+');
    } else if (click.target.classList.contains('minus')) {
        handleOperator('-');
    } else if (click.target.classList.contains('mult')) {
        handleOperator('*');
    } else if (click.target.classList.contains('divi')) {
        handleOperator('/');
    } else if (click.target.classList.contains('equal')) {
        calculateResult();
    }
}
   

function handleOperator(operator) {
    if(input.value !== '' ) {
        firstValue = +input.value
        currentOperator = operator
        input.value = ''
        isOperatorClicked = true
    }


}

function calculateResult () {
    if(currentOperator && input.value !=''){
        const secondValue = +input.value
        let result

        switch(currentOperator) {
            case '+': 
                result = firstValue + secondValue
                break;
            case '-': 
                result = firstValue - secondValue
                break;
            case '/': 
                result = firstValue / secondValue
                break;
            case '*': 
                result = firstValue * secondValue
                break;
            default:
                result = 'Error'
        }

        input.value = result
        firstValue = result
        currentOperator = null
        isOperatorClicked = false


    }
}
