"use strict";

// const a = 90;
// console.log(a)//90
// let f;
// console.log(f = 43)//43

// console.log(xfrsdg)//ReferenceError!!!

// const price = 876;
// console.log("Price will be:", price)//Price will be: 876

// const v = typeof "fsdfg";
// console.log(v)//string

// console.log("Do")
// alert("vbdxdiuh")
// console.log("Pislya")

//Global variable window and two methods of it: prompt(), confirm()

// const renewSubscription = confirm("Would u like to prolongue ur subscription?");//gives back to the console choosen result
// console.log(renewSubscription)//true or false

// let showResult = prompt("What do u like the best?");
// showResult = Number(showResult);
// console.log(showResult);
// console.log(typeof showResult);

// const a = 4;
// const b = 5;
// const c = 32;
// console.log(a>=b && c<=b);//false
// console.log(a < b && c > a);//true
// console.log("," && "hihi");//hihi
// console.log(0 && 9);//0
// console.log(1 < 6 && 5 === 7);//false
// console.log(a === b || c < b);//false
// console.log("hjbk" || "nn");//hjbk
// console.log(3 || null);//3
// console.log(!2);//false
// console.log(!NaN);//true
// console.log(!"huh");//false

// let cost;
// const subscription = "middle";
// if (subscription === "pro") {
//     cost = 100;
// } else if(subscription==="middle"){
//     cost = 50;
// } else if (subscription==="start") {
//     cost = 10;
// } else {
//     cost = 0;
// }
// console.log(cost);//50


// const age = 10;
// const type = age >= 18 ? "adult" : "kid";
// console.log(type);
// if (age >= 18) {
//     type = "adult";
// } else {
//     type = "kid";
// }
// console.log(type);


// const firstNumber = 123;
// const secondNumber = 567;
// let biggerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;

// // if (firstNumber > secondNumber) {
// //     biggerNumber = firstNumber;
// // } else {
// //     biggerNumber = secondNumber;
// // }
// console.log(biggerNumber);

// let cost;
// const subscription = "pro";
// switch (subscription) {
//     case "pro":
//         cost = 200;
//         break;
//     case "middle":
//         cost = 150;
//         break;
//     case "minimum":
//         cost = 70;
//         break;
//     default:
//         console.log("Invalid subscription type!");
// }
// console.log(cost);

// const global = "global";
// if (true) {
//     const a = "block a";
//     if (true) {
//         const b = "block b";
//         if (true) {
//             const c = "block c";
//         }
//     }
//     if (true) {
//         const d = "block d";
        
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }


// let clientCounter = 0;
// const maxClients = 90;
// while (clientCounter<maxClients) {
//     clientCounter += 1;
//     console.log(clientCounter);
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// let salary = 1700;
// const maxSalary = 20000;
// for (let i = 0; i <= maxSalary; i += 1000) {
//     salary += i;
//     console.log(salary);
// }


// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");





