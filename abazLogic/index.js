let attendance = [
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: false
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: true
  },
  {
    name: "ali",
    attendance: false
  },
  {
    name: "ali",
    attendance: false
  },
]

let len = attendance.length;

const user = "ali"

let numpp = []

let numaa = []
const checkAttendanc = attendance.forEach(checker)

function checker(value, index) {
  const filterValue = value.attendance;
  const filterName = value.name;

  if (filterName == user) {
    if (filterValue == true) {
      numpp.push(index + 1);
    } else {
      numaa.push(index + 1);
    }

  } else {

    console.log("user not found")
  }

}

let totalpp = numpp.length;
let totalaa = numaa.length;
let perdayamount = 800;
let totalamount = len * perdayamount;
let eranamount = totalpp * perdayamount;


console.log("working days",len)

console.log(`Presents: ${totalpp}`);
console.log(`Absents: ${totalaa}`);



console.log("perday amount",perdayamount);

console.log("total amount",totalamount);
console.log("total eran",eranamount);