// Function to perform the calculation
function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        case '%':
            return operand1 % operand2;
        case '^':
            let result=1;
            for(let i=operand2;i>0; i--){
                result*=operand1;
                
            }
            return result;
        default:
            return null;
    }
}

// Calculate function using if else
// function calculate2(operand1, operand2, operator) {
//     if (operator=='+') {
//             return operand1 + operand2;}
//      else if(operator=='-')       
//     {return operand1 - operand2; } 
//      else if(operator=='*')       {  return operand1 * operand2;}
//      else if(operator=='/'){       
//             return operand1 / operand2; }
//             else if(operator=='%')      {
//             return operand1 % operand2;}
//             else if(operator=='^') {   let result=1;
//             for(let i=operand2;i>0; i--){
//                 result*=operand1;
                
//             }
//             return result;
//         }
// else{
//             return null;
//     }}




function calculator() {
    // Enter first operand
    let operand1 = 6;
  

    // Enter second operand
    let operand2 = 2;
 

    // Enter an operator (+, -, *, /, %, ^)
    let operator ="%";
 

    // Perform the calculation
    let result = calculate(operand1, operand2, operator);
    console.log(result)

}

// Run the calculator function
calculator();
console.log('--------------')
