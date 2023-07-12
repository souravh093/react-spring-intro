// // // const a = [1, 2, 3, 4, 5]
// // // console.log(typeof(a))

// // // const b = 124
// // // console.log(typeof(b))

// // // const string1 = "Hello World"
// // // const string2 = `Hello Bangladesh`
// // // const string3 = 'Hello Barishal'

// // // try {
// // //     const total = string1 + string2;
// // //     console.log(total)
// // // } catch (error) {
// // //     console.log(error)
// // // }

// // // function Declaration
// // function functionName(parameter) {
// //     const content = 15 + parameter;
// //     return content
// // }

// // console.log(functionName(2))

// // // function Expression
// // const work = function functionName2(parameter) {
// //     const content = 15 + parameter;
// //     return content
// // }

// // console.log(work(6))

// // const person = {
// //     name: "Sourav",
// //     age: 24,
// //     height: 5.7,
// //     do: function() {
// //         console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
// //     }
// // }
// // person.do()

// // for (const item in person) {
// //     if (Object.hasOwnProperty.call(person, item)) {
// //         const element = person[item];
// //         console.log(element)
// //     }
// // }

// // const person = {
// //     name: "Sourave",
// //     age: 24
// // }
// // // previous way
// // console.log("Hello my name" + person.name + " and my age is " + person.age)

// // // template string or template literals
// // console.log(`Hello my name ${person.name} and my age is ${person.age}`)

// // using the default value in the parameter no needed the return keyword when it one line
// const functionName = (parameter2 = 2, parameter = 5) => parameter + parameter2;
// console.log(functionName());

// // using the single parameter not using the first bracket
// const functionName2 = (parameter) => parameter;
// console.log(functionName2("Hello parameter"));

// // if it needed the multiple line of return then we need the curly bracket
// const functionName3 = (parameter) => {
//   const parameterSum = 10 + parameter;
//   const multiple = parameterSum * 2;
//   return multiple;
// };
// console.log(functionName3(3));

// // // Destructuring array
// // const numbers = [1, 2, 3, 4, 5];
// // const [a, b, , c] = numbers;

// // console.log(a); // Output: 1
// // console.log(b); // Output: 2
// // console.log(c); // Output: 4

// // // Destructuring object
// // const person = {
// //     name: "John",
// //     age: 25,
// //     city: "New York"
// //   };

// //   // Destructuring assignment
// //   const { name, age, city } = person;

// //   console.log(name); // Output: John
// //   console.log(age); // Output: 25
// //   console.log(city); // Output: New York

// const numbers = [1, 2, 3];
// const expandNumber = [...numbers, 4, 5];
// console.log(expandNumber); // output: [1, 2, 3, 4, 5]

// const copyItem = [1, 3, 6];
// const copyArrayed = [...copyItem];
// console.log(copyArrayed); // output: 1, 3, 6

// const a = [1, 5, 8];
// const b = [9, 10, 23]
// const margeArray = [...a, ...b]
// console.log(margeArray) // output: [ 1, 5, 8, 9, 10, 23 ]

// const string = "Hello string"
// const getLetter = [...string];
// console.log(getLetter) // output: ['H', 'e', 'l', 'l', 'o', ' ', 's', 't', 'r', 'i', 'n', 'g']

// var a = 1;
// var b = 0;

// while (a <= 3) {
//   a++;
//   b += a * 2;
//   console.log(b)
// }


(function(a){
  return (function(){
   console.log(a);
   a = 6;
  })()
 })(21);


 
const result = [60, 58, 60, 60, 60, 60, 60, 60];

const averageNumber = result.reduce((acc, curr) => {
  const total = acc + curr;
  const average = total / 8; 
  return average
}, 0)

console.log(averageNumber)