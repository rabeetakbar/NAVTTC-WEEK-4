
//for of loop

const student={
name:'rabeet',
rollno :42,
address :{current:'Lahore',permanent:'lahoreeee'}

}

let objectvalues = Object.values[student];
console.log(objectvalues)
// let array=[1,2,3,4,5,6];
// for(let x of objectvalues){

//     console.log(x);
// }



const nestedObject = {
    name: 'Alice',
    age: 25,
    address: {
      city: 'Wonderland',
      zip: '12345',
    },
    hobbies: ['reading', 'coding'],
  };


  function flattenObjectValues(obj) {
    let result = [];
  
    function recurse(current) {
      if (typeof current === 'object' && current !== null) {
        const values = Object.values(current);
        for (const value of values) {
          if (typeof value === 'object' && value !== null) {
            recurse(value);
          } else {
            result.push(value);
          }
        }
      }
    }
  
    recurse(obj);
    return result;
  }

  const flatvalues = flattenObjectValues(nestedObject);
  console.log(flatvalues)