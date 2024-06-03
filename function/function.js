// function name() {

// }

// () => {

// }

// function sumDiv(a, b) {
//      if (a <= 10 && b <= 10) {
//           const sum = a + b
//           const divide = a % b

//           console.log(`sum is ${sum} and divide is ${divide} `)
//      } else (
//           console.log("the num ber is grater then 10")
//      )

// }

// function calcu(a, b, sumDivCallback) {
//      sumDivCallback(a, b)
// }

// calcu(2, 3, sumDiv)

// ///second exapmle

// function ali(age, perfact) {
//      setTimeout(() => {
//           console.log('your age is', age);
//           if (perfact) {
//                perfact();
//           }
//      }, 2000);
//      console.log(age, "two")
// }

// ali(2, () => {
//      console.log('this is perfect one');
//      ali(4, () => {
//           console.log('no! this is perfect');
//           ali(5, () => {
//                console.log('no! this is perfect');
//                ali(6, () => {
//                     console.log('no! this is perfect');
//                })
//           });
//      });


// });




//callback example

function calculation(a,b,twoFun){
      console.log(a+b)
      twoFun()

}


function twoFun(){
     console.log("hi")
     function two(){
          console.log("chi")
          function three(){
               console.log("gar")
               function four(){
                    console.log("jacheya")
                    
               } 
               four()
               
          }
          
          three()  
     }
     two()
}


calculation(3,4,twoFun)