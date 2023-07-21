// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// function reverseString(str) {
//     const reverse = str.split("").reverse().join("");
//     return reverse;
// }

// console.log(reverseString("Hello, world!"))

// const arr = [52, 51, 84, 56, 27];
// let total = 0;
// for (let item of arr) {
//   total = total + item;
// }
// console.log(total);

// alternative

// const total = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(total);

// How to find the largest number of arrays
// let largest = arr[0];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);

// alternative
// const largestNumber = Math.max(...arr);
// console.log(largestNumber)

// find the longest word
// function longestWord(str) {
//     const divideWord = str.split(" ");
//     let longestWord = divideWord[0];
//     for(let i = 0; i < divideWord.length; i++) {
//         if(divideWord[i].length > longestWord.length) {
//             longestWord = divideWord[i];
//         }
//     }

//     return longestWord
// }

// console.log(longestWord("Hello, My name is Sourave Halder! I am From Bangladesh! in International"))

// Vowel Count
// const getCount = str => {
//     const splitting = str.split("")
//     return splitting
//   };

//   console.log(getCount('my pyx')); // 0
//   console.log(getCount('pear tree')); // 4
//   console.log(getCount('abracadabra')); // 5
//   console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13

const arr = [3, 9, 1, 6, 4, 2];

const getMaxMin = (par) => {
  let max = par[0];
  let min = par[0];
  for (let i = 0; i < par.length; i++) {
    const current = par[i];
    if (current > max) {
      max = current;
    } else if (current < min) {
      min = current;
    }
  }

  return {
    max,
    min,
  };
};

console.log(getMaxMin(arr));


