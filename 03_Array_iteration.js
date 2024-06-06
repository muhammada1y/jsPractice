
//first example

const number = [2,3,5,35,13,3,234,6];

number.forEach((element,index,array) => {
    // console.log(element,index,array)
});


//second example

number.map((element,index,arry)=>{
    // console.log(element,index,arry)
})

//third example

number.flatMap((element,index,array)=>{
    // console.log(element,index,array)
})

//fourth example
const myfunction = (element,index,arry)=>{
    return element > 8
}
const ala = number.filter(myfunction)
console.log(ala)


const lal = (sumeOfArray,elemet,index,array)=>{
    return sumeOfArray + elemet
}
const oo = number.reduce(lal)
// console.log(oo)

const laluto = (element,index,array)=>{
     return element > 90
}
const ooo = number.some(laluto)
// console.log(ooo)


