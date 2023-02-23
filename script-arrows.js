"use strict";

// const a = [1, 3, 4]
// const b = a;
// console.log(b)

// console.log(a.splice(1, 1))
// console.log(a)
// console.log(b)
// console.log(b===a)

// let c = 4;
// let d = c;
// console.log(c === d)
// c = 5;
// console.log(c === d)
// console.log(false||"jj")


// const arr1 = [{ a: 1 }, { b: 2 }]
// const arr2 = [13, 45, 67]
// const summArr = [...arr1,...arr2]

// console.log(summArr)
// console.log(summArr[0])
// summArr[3] = 900;


// Задача 1
// Напишите однострочное решение, которое вычисляет
// сумму квадратных корней для всех чётных чисел целочисленного массива.

// const intNums = [1, 4, 3, 0, 4, 5, 4, 36];
// let sqrRootsSum = 0;

// for (let i = 0; i<intNums.length; i+=1){
//     if (intNums[i] % 2 === 0) {
//         sqrRootsSum += Math.sqrt(intNums[i]);
//     }
// }
// console.log(sqrRootsSum);


// function solution(str) {
  
//   let strArr = "";
//   for(let el of str.split()){
//     if(el.toLowerCase()){
//       strArr+=el.toUpperCase();
//     }else{
//       strArr+=el.toLowerCase();
//     }
//   }
//   return strArr.rowReverse();
// }
// console.log(solution("KaaaaLooo"))


// const a = [1, 2, 3]
// const b = [{ w: 16 }, { t: 56 }, 1]
// const c = [...a, ...b]
// const f = { ...b, good:"Jokoo", ...a, };
// console.log(f)
// console.log(b[2] === a[0])
// console.log(c[0]===a)

// const user = {
//     name: "lolo",
//     age: 73,
// }
// const owner = {
//     name: user.name,
//     job: "business",
//     salary: 9000,
// }
// const common = Object.assign({}, owner, user,);
// console.log(common)
// const newOne = { ...user, language: "English", ...owner };
// console.log(newOne)

// const { name, age } = user;
// const { job, salary } = owner;
// const { name, age, job: occupation, salary, family = "Just a happy single!" } = common;
// console.log(family, occupation)

// const userInfo = {
//     likes: 567,
//     views: 900,
//     location: "USA",
// }
// const { likes, ...restProps } = userInfo;
// console.log(userInfo)