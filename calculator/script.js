// const display=document.getElementById("display");

// function appendtodisplay(input){
// display.value += input;
// }

// function cleardisplay(){
//     display.value = "";

// }
// function calculate(){
//     try{
// display.value= eval(display.value);}
// catch(error){
//     display.value="Error";
// }
// }



const display = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    const input = display.value;
    let operator;
    let operand1, operand2, result;

    // Find the operator (+, -, *, /)
    if (input.includes('+')) {
        operator = '+';
    } else if (input.includes('-')) {
        operator = '-';
    } else if (input.includes('*')) {
        operator = '*';
    } else if (input.includes('/')) {
        operator = '/';
    } else {
        display.value = "Error";
        return;
    }

    // Split the input string into two operands
    [operand1, operand2] = input.split(operator).map(Number);

//calculation
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            // / by zero case
            if (operand2 === 0) {
                display.value = "Error";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            display.value = "Error";
            return;
    }
    // Display the result
    display.value = result;
}
