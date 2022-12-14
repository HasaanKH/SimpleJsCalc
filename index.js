const numberButtons = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-op]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-ac]');
const previousLine = document.querySelector('[data-previous]');
const currentLine = document.querySelector('[data-current]');

class Calculator{
    constructor(previousLineConstruct, currentLineConstruct){
        this.previousLineConstruct = previousLineConstruct;
        this.currentLineConstruct = currentLineConstruct;
        this.currentOperand = '';
        this.Operation = null;
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')){}
        else
        {this.currentOperand = this.currentOperand + number.toString();}
    }
    updateDisplay(){
        this.currentLineConstruct.innerText = this.currentOperand;
    }
    appendOperator(operator){
        if(this.Operation === null) {
            this.currentOperand = this.currentOperand +' ' + operator.toString();
            this.previousLineConstruct.innerText = this.currentOperand;
            this.Operation = operator;
            this.currentOperand = '';
        }
        else {
            this.compute();
            this.currentOperand = this.currentOperand +' ' + operator.toString();
            this.previousLineConstruct.innerText = this.currentOperand;
            this.Operation = operator;
            this.currentOperand = '';
        }
    }
    compute(){
        switch(this.Operation){
            case '+':
                this.currentOperand = parseFloat(this.currentOperand) + parseFloat(this.previousLineConstruct.innerText);
                break;
            case '-':
                this.currentOperand = parseFloat(this.previousLineConstruct.innerText) - parseFloat(this.currentOperand);
                break;
            case 'x':
                this.currentOperand = parseFloat(this.currentOperand) * parseFloat(this.previousLineConstruct.innerText);
                break;
            case '/':
                this.currentOperand = parseFloat(this.previousLineConstruct.innerText) / parseFloat(this.currentOperand);
                break;
            case '%':
                this.currentOperand = parseFloat(this.previousLineConstruct.innerText) * 0.01 * parseFloat(this.currentOperand);
        }
        this.previousLineConstruct.innerText = '';
        this.Operation = null;

    }
    delete(){
        this.currentOperand = '';
        this.previousLineConstruct.innerText = '';
        this.currentLineConstruct.innerText = '';
        this.Operator = null;
    }
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendOperator(button.innerText);
    calculator.updateDisplay();
})
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
var calculator = new Calculator(previousLine,currentLine);





