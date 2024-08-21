
const arr=["a","b","c","d","e"];
arr.map((value3,index,wholearray)=>{
console.log(`this is index${index}:${value3}`)
console.log(wholearray)
})
// objects destructuring
const object={
    username:"rabeet._.akbar",
    email:"rabeetakbar0@gmail.com",
    age:'22',
    address:{city:"Lahore",
        street:"20",
    }
}
console.log(object["address"]["city"])
const {username,age,email,
    address:{city,street}
}=object
console.log(username,city,street)

// practice destructuring

const object2={
uname:"Rabeet",
secondname:"Akbar",
institute:{clas:"16",department:{engineering:"electrical",arts:"painting",sciences:"computerscience"},section:"morning"}

}
console.log(object2["institute"]["department"]["sciences"])
const {uname,secondname,
    institute:{clas,section,department:{sciences}}
}=object2
console.log(uname,secondname,clas,section,sciences);

//spread operator


const array4=[1,2,3];
const array5=[4,5,6,...array4];
console.log(array5)
const array6=[...array4,...array5];
console.log(array6)


// rest operator
function add(...number){
    console.log(number);
    }
add(22,23,24)

// reduce method-- accumulator and total value
const array7=[5,6,7,8,9]
const initialvalue=0
const reducedvalue=array7.reduce((accumulator,currentvalue)=> {
    console.log("acc:",accumulator,currentvalue);
return accumulator+currentvalue
},
initialvalue 

);
console.log(reducedvalue)
