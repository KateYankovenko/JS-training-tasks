"use strict";

// const fnA = function (str, callback) {//2)here fnB is a parameter for fnA
//     console.log("Here is your string:", str)
//     console.log(callback)//it is not an f-ion calling, shows only fn's body
//     callback(123,789,654);//3)here passed params for fnB
// }

// const fnB = function (...params) {//4)[123,789,654]
//     console.log("Callback fn:", params)//5)logging params
// }

// fnA("Hope is here for u!", fnB)//1)calling of funct.


//Reusable code logic:
// const doMath = function (a, b, callback) {
//     console.log("My numbers:", a, b);

//     const result = callback(a, b);
//     console.log(result)
// };

// const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;

// doMath(56, 7, add);
// doMath(56, 7, subtract);


//Ivent listener function:
// const buttonRef = document.querySelector(".button");
// // console.dir(buttonRef)//button is a js object

// const handleBtnClick = function () {
//     console.log("Button is clicked!")
// }

// buttonRef.addEventListener("click", handleBtnClick);


const numbers = [65, 7, 2, 1, 0, 3, 4, 56]

// numbers.forEach((number, index) => {
//     console.log(`There are el and indexes!`, number, index)
// })


/*
 * Фильтр
 */

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

