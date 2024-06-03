const studentList = ["ali",
"khan",
{name: "abid",
rollNum: 2204,
marks: 50},
{name: "abid",
    rollNum: 2205,
    marks: 40,
},
"mubeen",
"Alexander",
"Benjamin",
"Charlotte",
"Daniel",
"Elizabeth",
"Fiona",
"George",
"Hannah",
"Isabella",
"James",
"Katherine",
"Liam",
"Michael",
"Natalie",
"Olivia"]


const studentName = "abid"
const studentRollNumber = 2204

studentList.find(findStudent)
 
function  findStudent(element,index,array){

   if(element.name === studentName){
            if(element.rollNum === studentRollNumber){
                 console.log(`${element.name} your rollnumber is ${element.rollNum} and your got  ${element.marks} marks `)
                 if(element.marks >= 50){
                    console.log('your pass')
                    }else{
                    console.log('your fail')
                    
                       }          
                   }    
    }
        
}


