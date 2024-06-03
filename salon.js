const registerCustomer = [
    {name:"ali",
        bookedTime: new Date("October 13, 2024 11:13:00"),
        timeEnd: new Date("October 13, 2024 12:20:00") ,
        AmPm: "PM"

    },
    {name:"aasdi",
              bookedTime: new Date("October 13, 2024 12:21:00"),
               timeEnd: new Date("October 13, 2024 01:00:00"),
               AmPm: "AM" 

    },{
        name:"muhammad",
        bookedTime: new Date("October 14, 2024 01:00"),
        timeEnd: new Date("October 14, 2024 02:00"),
        AmPm: "PM"
    }
]


const customer = {
    name:"khan",
    bookedTime: new Date("October 13, 2014 12:21:00"),
    timeEnd: new Date("October 13, 2014 01:00:00") ,
}

const findRegisterCustomer = registerCustomer.find(customerFunction)

function customerFunction(elements,value,array){
        if(customer.bookedTime <= elements.bookedTime && elements.timeEnd >= customer.timeEnd  ){
              if(customer.AmPm === elements.AmPm){
                 console.log("this time period is booked")
                
              }else{
                console.log('sucess')
              }
        }else{
            console.log('sucess')
        }
}



function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));


const  userfist = "04:00"
const   usersecond = "03:34"
const  dbfist = "03:35"
const  dbsecond = "03:34"
   
    const userfistslice = userfist.slice(0, 2)
    const userfistslicetwo = userfist.slice(-1,-2)
    const usersecondlice = usersecond.slice(0,1)
    const usersecondlicetwo = usersecond.slice(0,1)

    const dbfistlice = dbfist.slice(0, 2)
    const dbfistlicetwo = dbfist.slice(-1,-2)
    const dbsecondlice = dbsecond.slice(1,0)
    const dbsecondlicetwo = dbsecond.slice(-1,-2)
    
    if(parseInt(userfistslice) <= parseInt(dbfistlice)){
        return console.log("yes")
    }else{
        return console.log("no")
    }



// numArray.find(showGapBtTime)
// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// console.log("Please enter your input:");

// process.stdin.on('data', function(data) {
//     console.log(`You entered: ${data.trim()}`);
//     process.exit();
// });
