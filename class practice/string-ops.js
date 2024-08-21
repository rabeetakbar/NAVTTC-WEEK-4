//string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//concat
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

//split

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars[8]);

//replace

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));


