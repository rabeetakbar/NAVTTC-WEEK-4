// for loop

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + " " ;
// }
// console.log(text)
 
// nested loop

// let result=' ';
// for(let i=0; i<10; i++ ){

//     for(let j=0; j<10; j++ ){
//         result += 'i: ' + i + ', j: ' + j + '\n';
// }
// result += '\n';
// }
// console.log(result)

let age=50;

if(age<18){
console.log("You're child")
}
else if(age>18 && age<30 ){
    console.log("you're Adult")
}
else if(age>=30 && age<=40 ){
console.log("you're about to die")

}
else if(age>=60 && age<=80 ){
    console.log("senior citizen")
    
    }
    else{
        console.log("not in age limit")
    }
// Switches


let x = 2;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)

// functions

// passed 3 parameters
function arith(a,b,c){
console.log(a+b+c)
if(b=2){
    var g=5;
}
console.log(g)
}
arith(1,2,3);






