
///>>>>>>>>>>>>>>>>>...for in loop..<<<<<<<<<<<<<<<<<<<///
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);

console.log(myArray)


let values = " ";
for(let x in person){
   values += person[x]
}
console.log(values)


/////>>>>>>>>>>>>>>...for each...<<<<<<<<<<<////

let nameList = ["ali","khan","muhammad","shan","zeeshan"]


let storeList = ""

nameList.forEach(eachFunction)

function eachFunction(value){
    storeList += value
}

console.log(storeList)


