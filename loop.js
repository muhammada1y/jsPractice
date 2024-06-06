const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}


for (let i = 0; i <= count; i++) {
  rows.push(padRow(i + 1))
}

let result = "";

for(let row of rows){
  result = result + "\n" + row
}


console.log(result)










