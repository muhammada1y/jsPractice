
//syntax
let name = "";


//The concat() method joins two or more strings.

///string.concat(string1, string2, ..., stringX)

let fname = "muhammad ";
let sname = "ali ";
let lname = "khan";


let fullname = fname.concat(sname, lname)

console.log(fullname)



//second method
//    at

let firstAlphbat = fname.at(0)
let secondAlphbat = sname[1]
console.log(firstAlphbat, secondAlphbat)

//3rd method 
// charAt

let findIndex = fname.charAt(0)
let findIndextwo = fname.charAt(fname.length - 1)

console.log(findIndex, findIndextwo)

///4th method 

let say = "Hello worlds";
let bolo = say.endsWith("worlds")
console.log(bolo)


/// 5th method
//includes

let string = "ali@ali-HP-EliteBook-2560 Documents js string$ "

let check = string.includes("js")

console.log(check)
//6th method

let ss = "2 hjhj j"

let cc = ss.indexOf("j")

console.log(cc)



//7th method split()


let content = "hi i am ali wellcome to my world";

const newString = content.split(' ')
const bnewString = content.split('',3)
const cnewString = newString[4]

console.log(newString,bnewString,cnewString)

//8th method substring()

let text = "hi i am ali wellcome to my world";

const newText = text.substring(2,5)

console.log(newText,"kjadkj")
