// Arrays operations

// Equality function
function Equality(value1,value2){
if(value1===value2){
console.log('Equal')
}
else(
    console.log('Not Equal')
)}
Equality(7,'7');
console.log('--------------')

// Range function

function range(testval,val1,val2){
if(testval<=val1 && testval>=val2){
    console.log('Yes')
}
else{
    console.log('No')

}}
range(60,50,25);
console.log('--------------')

// switch function
function swit(valuee){
switch(valuee){
case 'bob':
    console.log('Marley');
    break;
    case '42':
        console.log('the string the answer');
        break;
    case '1':
       console.log('there is no 1');
         break;
         case '99':
            console.log('Missed me by this much');
            break;
            case '7':
                console.log('ate nine');
                break;
                case 'john':
                    console.log(' ');
                    break;
                    case '156':
                        console.log('');
                        break;
                default:
                    console.log('invalid case')


        }
    }
    swit('99');

console.log('------')
    let fruit = ['apple', 'mango','grapee', 'orange', 'banana'];

    fruit.splice(0, 3, 'peach' );
    console.log(fruit)

    let fruits = ['apple', 'orange', 'mango'];

let citrus = fruits.slice(0, 3);
console.log(citrus)
console.log('---------------------')
 let arrayvalues=[1,2,3,4,5,6];
 arrayvalues.push(0);
 console.log(arrayvalues);
 arrayvalues.pop();
 console.log(arrayvalues);
 arrayvalues.shift();
 console.log(arrayvalues)
 arrayvalues.unshift(1);
 console.log(arrayvalues)
let texttt=arrayvalues.toString();
console.log('----------------')
console.log(texttt)
 
let abcd=arrayvalues.join("+")
console.log(abcd)
console.log('----------------')
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length < 6);

console.log(result);
console.log('------------')

// Creating multilevel array
const numbers = [['1', '2'], ['3', '4',
    ['5', ['6'], '7']]];
console.log(numbers);
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);

const set1 = new Set();

set1.add(42);
set1.add(43);
set1.add(13);

console.log(set1);

const arrayy1 = [1, 2, 3];

console.log(arrayy1.includes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));

// Search

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = ['d'];

console.log(paragraph.search(regex));

//index of and last index of
console.log('------------')

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('camel'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));


console.log(beasts.lastIndexOf('bison'));

// Find
const arra1 = [5, 12, 8, 130, 44];

const found = arra1.find((element) => element == 44);

console.log(found);
//sorting
console.log('----------------------')

const sortingarray1 = [17, 30, 4, 21, 15];
sortingarray1.sort();
console.log(sortingarray1);

reversedarray=sortingarray1.reverse();
console.log(reversedarray);


// Math max and min
const mmarray = [1, 3, 2,10,15,2];

console.log(Math.min(...mmarray));
console.log(Math.max(...mmarray));

// Keys
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  console.log(object1.c);