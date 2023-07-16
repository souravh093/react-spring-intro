// // Setup
// const myArray = [];

// // Only change code below this line
// let i = 5;
// while(i > -1) {
//   myArray.push(i);
//   i--;
// }

// console.log(myArray)


// Setup
// const myArray = [];

// // Only change code below this line
// for(let i = 1; i < 6; i++) {
//   myArray.push(i)
// }

// console.log(myArray)

// // Setup
// const myArray = [];

// // Only change code below this line
// for(let i = 9; i > 0; i -= 2 ) {
//   myArray.push(i)
// }

// console.log(myArray)


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++) {
      for(let k = 0; k < arr[i].lenght; k++) {
        return arr[i][k]
      }
    }
    // Only change code above this line
    return product;
  }
  
  

  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))
  
