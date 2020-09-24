
        let firstValue = +prompt('Enter first value');
        let operand = prompt('Enter operator');
        let secondValue = +prompt('Enter second value');

        switch (operand) {
            case ('+'):
                console.log(firstValue + secondValue);
                break;
            case ('-'):
                console.log(firstValue - secondValue);
                break;
            case ('*'):
                console.log(firstValue * secondValue);
                break;
            case ('/'):
                console.log(firstValue / secondValue);
                break;
            default:
                throw new Error("Invalid operator");
        }
